/**
 * Bloom Audio System - 程序化音乐与音效
 * 使用 Web Audio API 实时合成，无需外部音频文件
 * 
 * 使用方法：
 *   await BloomAudio.init();           // 初始化（需用户交互后调用）
 *   BloomAudio.playBgm('menu');        // 播放BGM
 *   BloomAudio.stopBgm();              // 停止BGM
 *   BloomAudio.playSound('click');     // 播放音效
 *   BloomAudio.setVolume(0.5);         // 设置音量 0-1
 */

const BloomAudio = (function() {
  let audioContext = null;
  let masterGain = null;
  let currentBgm = null;
  let currentBgmNodes = [];
  let isInitialized = false;
  let fadeTime = 0.5; // 淡入淡出时间（秒）

  // 音符频率表 (Hz)
  const NOTES = {
    // C大调音阶
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77,
    C6: 1046.50,
    // 半音
    Cs3: 138.59, Ds3: 155.56, Fs3: 185.00, Gs3: 207.65, As3: 233.08,
    Cs4: 277.18, Ds4: 311.13, Fs4: 369.99, Gs4: 415.30, As4: 466.16,
    Cs5: 554.37, Ds5: 622.25, Fs5: 739.99, Gs5: 830.61, As5: 932.33,
  };

  // A小调音阶 (自然小调)
  const A_MINOR = [NOTES.C3, NOTES.D3, NOTES.Ds3, NOTES.F3, NOTES.G3, NOTES.Gs3, NOTES.As3,
                   NOTES.C4, NOTES.D4, NOTES.Ds4, NOTES.F4, NOTES.G4, NOTES.Gs4, NOTES.As4,
                   NOTES.C5, NOTES.D5, NOTES.Ds5, NOTES.F5, NOTES.G5, NOTES.Gs5, NOTES.As5];

  // C大调音阶
  const C_MAJOR = [NOTES.C3, NOTES.D3, NOTES.E3, NOTES.F3, NOTES.G3, NOTES.A3, NOTES.B3,
                   NOTES.C4, NOTES.D4, NOTES.E4, NOTES.F4, NOTES.G4, NOTES.A4, NOTES.B4,
                   NOTES.C5, NOTES.D5, NOTES.E5, NOTES.F5, NOTES.G5, NOTES.A5, NOTES.B5];

  // 升号小调（更有氛围感）
  const A_MINOR_HM = [NOTES.C3, NOTES.D3, NOTES.Ds3, NOTES.F3, NOTES.G3, NOTES.A3,
                      NOTES.C4, NOTES.D4, NOTES.Ds4, NOTES.F4, NOTES.G4, NOTES.A4,
                      NOTES.C5, NOTES.D5, NOTES.Ds5, NOTES.F5, NOTES.G5, NOTES.A5];

  // ==================== 基础音频工具 ====================

  /**
   * 创建振荡器
   */
  function createOscillator(type, frequency, startTime, duration, volume = 0.3) {
    if (!audioContext) return null;

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = type;
    osc.frequency.value = frequency;

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);

    return { osc, gain };
  }

  /**
   * 创建钢琴音色（带衰减包络）
   */
  function playPianoNote(freq, time, duration = 1, vol = 0.25) {
    if (!audioContext) return;

    // 主振荡器
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.value = freq;
    osc2.frequency.value = freq * 2; // 泛音

    filter.type = 'lowpass';
    filter.frequency.value = 2000;

    // 钢琴包络
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(vol * 0.6, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration + 0.1);
    osc2.stop(time + duration + 0.1);
  }

  /**
   * 创建Pad音色（铺底音色）
   */
  function playPadChord(frequencies, time, duration = 4, vol = 0.15) {
    if (!audioContext) return;

    frequencies.forEach(freq => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.value = freq;

      filter.type = 'lowpass';
      filter.frequency.value = 800;

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(vol, time + 0.3);
      gain.gain.setValueAtTime(vol, time + duration - 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(time);
      osc.stop(time + duration + 0.1);
    });
  }

  /**
   * 创建吉他音色（用简谐波模拟）
   */
  function playGuitarNote(freq, time, duration = 0.8, vol = 0.2) {
    if (!audioContext) return;

    const harmonics = [1, 2, 3, 4, 5];
    const harmonicVols = [1, 0.5, 0.25, 0.125, 0.0625];

    harmonics.forEach((h, i) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.value = freq * h;

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(vol * harmonicVols[i], time + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration * (1 - i * 0.15));

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(time);
      osc.stop(time + duration + 0.1);
    });
  }

  /**
   * 创建电子音色
   */
  function playElectronicNote(freq, time, duration = 0.3, vol = 0.2) {
    if (!audioContext) return;

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.value = freq;

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, time);
    filter.frequency.exponentialRampToValueAtTime(200, time + duration);
    filter.Q.value = 5;

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.01);
    gain.gain.setValueAtTime(vol * 0.8, time + duration * 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(time);
    osc.stop(time + duration + 0.1);
  }

  /**
   * 创建简单音效（单音）
   */
  function playTone(freq, duration = 0.2, type = 'sine', vol = 0.3) {
    if (!audioContext) return;

    const time = audioContext.currentTime;
    createOscillator(type, freq, time, duration, vol);
  }

  /**
   * 创建带包络的音效
   */
  function playEnvelopeTone(freq, duration, attack, decay, sustain, release, type = 'sine', vol = 0.3) {
    if (!audioContext) return;

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    const now = audioContext.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + attack);
    gain.gain.linearRampToValueAtTime(vol * sustain, now + attack + decay);
    gain.gain.setValueAtTime(vol * sustain, now + duration - release);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  // ==================== BGM 生成器 ====================

  /**
   * 主菜单BGM - 梦幻轻柔
   * 钢琴 + Pad，70 BPM
   */
  function startMenuBgm() {
    const bpm = 70;
    const beatDuration = 60 / bpm;
    let step = 0;

    const sequence = [
      // 左手低音
      [NOTES.C3, null, null, null, NOTES.G3, null, NOTES.A3, null],
      [NOTES.C3, null, null, null, NOTES.E3, null, NOTES.F3, null],
      // 右手旋律（简化版）
      [NOTES.C4, null, NOTES.E4, null, NOTES.G4, null, NOTES.E4, null],
      [NOTES.F4, null, NOTES.A4, null, NOTES.C5, null, NOTES.A4, null],
      // Pad 和弦
      null, null, null, null,
      [[NOTES.C4, NOTES.E4, NOTES.G4], [NOTES.F4, NOTES.A4, NOTES.C5]],
    ];

    function playStep() {
      if (!currentBgm || currentBgm !== 'menu') return;

      const time = audioContext.currentTime;

      // Pad 铺底（每4拍）
      if (step % 4 === 0) {
        playPadChord([NOTES.C4, NOTES.E4, NOTES.G4], time, beatDuration * 3.8, 0.08);
      }

      // 钢琴主旋律（每拍）
      const melody = [NOTES.C5, NOTES.E5, NOTES.G5, NOTES.E5, NOTES.F5, NOTES.A5, NOTES.G5, NOTES.E5];
      playPianoNote(melody[step % 8], time, beatDuration * 0.9, 0.2);

      // 左手根音
      const bass = [NOTES.C3, NOTES.C3, NOTES.G3, NOTES.G3, NOTES.F3, NOTES.F3, NOTES.C4, NOTES.C4];
      playPianoNote(bass[step % 8], time, beatDuration * 0.8, 0.15);

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 日常BGM - 轻松愉快
   * 轻钢琴 + 轻吉他，90 BPM
   */
  function startDailyBgm() {
    const bpm = 90;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'daily') return;

      const time = audioContext.currentTime;

      // 主旋律（轻快节奏）
      const melody = [
        NOTES.C4, NOTES.E4, NOTES.G4, NOTES.C5,
        NOTES.D4, NOTES.F4, NOTES.A4, NOTES.D5,
        NOTES.E4, NOTES.G4, NOTES.B4, NOTES.E5,
        NOTES.F4, NOTES.A4, NOTES.C5, NOTES.F5,
      ];
      playPianoNote(melody[step % 16], time, beatDuration * 0.7, 0.18);

      // 吉他分解和弦（每2拍换一次）
      if (step % 2 === 0) {
        const chordIdx = Math.floor(step / 2) % 4;
        const chords = [
          [NOTES.C4, NOTES.E4, NOTES.G4],
          [NOTES.F4, NOTES.A4, NOTES.C5],
          [NOTES.G4, NOTES.B4, NOTES.D5],
          [NOTES.A4, NOTES.C5, NOTES.E5],
        ];
        playGuitarNote(chords[chordIdx][0], time, beatDuration * 1.8, 0.12);
        playGuitarNote(chords[chordIdx][1], time + 0.1, beatDuration * 1.6, 0.1);
        playGuitarNote(chords[chordIdx][2], time + 0.2, beatDuration * 1.4, 0.08);
      }

      // 低音
      const bass = [NOTES.C3, NOTES.F3, NOTES.G3, NOTES.A3];
      if (step % 4 === 0) {
        playPianoNote(bass[Math.floor(step / 4) % 4], time, beatDuration * 1.5, 0.15);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 温雅主题 - 安静柔美，钢琴小品，徐缓
   */
  function startWenyaBgm() {
    const bpm = 60;
    const beatDuration = 60 / bpm;
    let step = 0;

    const melody = [
      NOTES.E4, NOTES.G4, NOTES.A4, NOTES.G4,
      NOTES.E4, NOTES.D4, NOTES.C4, null,
      NOTES.C4, NOTES.D4, NOTES.E4, NOTES.D4,
      NOTES.C4, NOTES.B3, NOTES.C4, null,
    ];

    function playStep() {
      if (!currentBgm || currentBgm !== 'wenya') return;

      const time = audioContext.currentTime;

      // 钢琴旋律（缓慢、留白多）
      const note = melody[step % 16];
      if (note) {
        playPianoNote(note, time, beatDuration * 2, 0.25);
      }

      // Pad 铺底（每4拍换和弦）
      if (step % 4 === 0) {
        const chordIdx = Math.floor(step / 4) % 4;
        const chords = [
          [NOTES.C4, NOTES.E4, NOTES.G4],
          [NOTES.A3, NOTES.C4, NOTES.E4],
          [NOTES.F3, NOTES.A3, NOTES.C4],
          [NOTES.G3, NOTES.B3, NOTES.D4],
        ];
        playPadChord(chords[chordIdx], time, beatDuration * 3.5, 0.1);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 夏阳主题 - 明快活泼，节奏感强，电子感
   */
  function startXiayangBgm() {
    const bpm = 120;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'xiayang') return;

      const time = audioContext.currentTime;

      // 电子鼓点节奏
      if (step % 4 === 0) {
        // 底鼓
        createOscillator('sine', 60, time, 0.1, 0.3);
      }
      if (step % 4 === 2) {
        // 军鼓
        createOscillator('noise', 200, time, 0.1, 0.2);
      }
      // hi-hat
      if (step % 2 === 0) {
        createOscillator('square', 8000, time, 0.05, 0.1);
      }

      // 主旋律（明快）
      const melody = [
        NOTES.C5, NOTES.E5, NOTES.G5, NOTES.E5,
        NOTES.D5, NOTES.F5, NOTES.A5, NOTES.F5,
        NOTES.E5, NOTES.G5, NOTES.B5, NOTES.G5,
        NOTES.F5, NOTES.A5, NOTES.C6, NOTES.A5,
      ];
      playElectronicNote(melody[step % 16], time, beatDuration * 0.5, 0.2);

      // 贝斯线
      const bass = [NOTES.C3, NOTES.D3, NOTES.E3, NOTES.F3];
      if (step % 4 === 0) {
        playElectronicNote(bass[Math.floor(step / 4) % 4], time, beatDuration * 0.8, 0.25);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 苏静怡主题 - 冷静克制，极简，留白多
   */
  function startSujingyiBgm() {
    const bpm = 50;
    const beatDuration = 60 / bpm;
    let step = 0;

    // 极简旋律
    const notes = [NOTES.C4, null, NOTES.E4, null, NOTES.G4, null, NOTES.A4, null];

    function playStep() {
      if (!currentBgm || currentBgm !== 'sujingyi') return;

      const time = audioContext.currentTime;

      // 极简钢琴（大量留白）
      const note = notes[step % 8];
      if (note) {
        playPianoNote(note, time, beatDuration * 3, 0.2);
      }

      // 稀疏的 Pad
      if (step % 8 === 0) {
        playPadChord([NOTES.C4, NOTES.E4, NOTES.G4], time, beatDuration * 7, 0.06);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 陆潇主题 - 优雅精致，法式咖啡馆风味
   */
  function startLuxiaoBgm() {
    const bpm = 85;
    const beatDuration = 60 / bpm;
    let step = 0;

    // 法式旋律（使用爵士和弦色彩）
    const melody = [
      NOTES.E4, null, NOTES.G4, NOTES.B4,
      NOTES.A4, null, NOTES.G4, NOTES.E4,
      NOTES.F4, null, NOTES.A4, NOTES.C5,
      NOTES.D4, null, NOTES.F4, NOTES.A4,
    ];

    function playStep() {
      if (!currentBgm || currentBgm !== 'luxiao') return;

      const time = audioContext.currentTime;

      // 钢琴主旋律
      const note = melody[step % 16];
      if (note) {
        playPianoNote(note, time, beatDuration * 1.5, 0.22);
      }

      // 吉他分解和弦（咖啡馆感觉）
      if (step % 4 === 0) {
        const chordIdx = Math.floor(step / 4) % 4;
        const chords = [
          [NOTES.E4, NOTES.Gs4, NOTES.B4], // E大七
          [NOTES.A4, NOTES.Cs5, NOTES.E5],  // A大七
          [NOTES.D4, NOTES.Fs4, NOTES.A4],  // D大七
          [NOTES.G4, NOTES.B4, NOTES.D5],  // G大七
        ];
        playGuitarNote(chords[chordIdx][0], time, beatDuration * 3, 0.1);
        playGuitarNote(chords[chordIdx][1], time + 0.15, beatDuration * 2.5, 0.08);
        playGuitarNote(chords[chordIdx][2], time + 0.3, beatDuration * 2, 0.06);
      }

      // 轻柔的低音
      if (step % 2 === 0) {
        const bass = [NOTES.E3, NOTES.A3, NOTES.D3, NOTES.G3];
        playPianoNote(bass[Math.floor(step / 2) % 4], time, beatDuration * 1.5, 0.12);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 林婉清主题 - 简洁有力，都市节奏
   */
  function startLinwanqingBgm() {
    const bpm = 100;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'linwanqing') return;

      const time = audioContext.currentTime;

      // 都市节拍
      if (step % 4 === 0) {
        createOscillator('triangle', 80, time, 0.15, 0.25);
      }
      if (step % 4 === 2) {
        createOscillator('triangle', 150, time, 0.1, 0.15);
      }

      // 主旋律（简洁有力）
      const melody = [
        NOTES.C5, NOTES.E5, NOTES.D5, NOTES.C5,
        NOTES.E5, NOTES.D5, NOTES.C5, NOTES.B4,
        NOTES.C5, NOTES.D5, NOTES.E5, NOTES.D5,
        NOTES.C5, NOTES.B4, NOTES.A4, NOTES.G4,
      ];
      playElectronicNote(melody[step % 16], time, beatDuration * 0.6, 0.18);

      // bass line
      const bass = [NOTES.C3, NOTES.C3, NOTES.D3, NOTES.E3, NOTES.F3, NOTES.E3, NOTES.D3, NOTES.C3];
      if (step % 2 === 0) {
        playElectronicNote(bass[Math.floor(step / 2) % 8], time, beatDuration * 0.5, 0.2);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 浪漫BGM
   */
  function startRomanticBgm() {
    const bpm = 65;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'romantic') return;

      const time = audioContext.currentTime;

      // 深情旋律
      const melody = [
        NOTES.C5, NOTES.E5, NOTES.G5, NOTES.E5,
        NOTES.A4, NOTES.C5, NOTES.E5, NOTES.D5,
        NOTES.B4, NOTES.D5, NOTES.F5, NOTES.E5,
        NOTES.G4, NOTES.B4, NOTES.D5, NOTES.C5,
      ];

      // 浪漫 pad
      if (step % 2 === 0) {
        const chordIdx = Math.floor(step / 2) % 4;
        const chords = [
          [NOTES.C4, NOTES.E4, NOTES.G4, NOTES.B4],
          [NOTES.A3, NOTES.C4, NOTES.E4, NOTES.G4],
          [NOTES.F3, NOTES.A3, NOTES.C4, NOTES.E4],
          [NOTES.G3, NOTES.B3, NOTES.D4, NOTES.G4],
        ];
        playPadChord(chords[chordIdx], time, beatDuration * 1.8, 0.12);
      }

      playPianoNote(melody[step % 16], time, beatDuration * 1.2, 0.22);

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 紧张BGM
   */
  function startTenseBgm() {
    const bpm = 110;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'tense') return;

      const time = audioContext.currentTime;

      // 紧张的重复音型
      const motif = [NOTES.Cs4, NOTES.Ds4, NOTES.Fs4, NOTES.Gs4];

      // 下行旋律制造紧张感
      playElectronicNote(motif[step % 4], time, beatDuration * 0.4, 0.2);

      // 持续的 bass
      if (step % 2 === 0) {
        createOscillator('sawtooth', NOTES.Cs3, time, beatDuration * 0.8, 0.15);
      }

      // 紧张的 hi-hat
      if (step % 2 === 1) {
        createOscillator('square', 6000, time, 0.03, 0.08);
      }

      // 偶尔的不协和音
      if (step % 8 === 0) {
        createOscillator('sawtooth', NOTES.As3, time + beatDuration * 0.5, beatDuration * 0.5, 0.1);
      }

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 好结局BGM
   */
  function startEndingGoodBgm() {
    const bpm = 75;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'ending_good') return;

      const time = audioContext.currentTime;

      // 温暖的上行旋律
      const melody = [
        NOTES.C4, NOTES.E4, NOTES.G4, NOTES.C5,
        NOTES.D4, NOTES.F4, NOTES.A4, NOTES.D5,
        NOTES.E4, NOTES.G4, NOTES.B4, NOTES.E5,
        NOTES.G4, NOTES.B4, NOTES.D5, NOTES.G5,
      ];

      // 辉煌的和弦
      if (step % 4 === 0) {
        const chordIdx = Math.floor(step / 4) % 4;
        const chords = [
          [NOTES.C4, NOTES.E4, NOTES.G4, NOTES.C5],
          [NOTES.F4, NOTES.A4, NOTES.C5, NOTES.F5],
          [NOTES.G4, NOTES.B4, NOTES.D5, NOTES.G5],
          [NOTES.C4, NOTES.E4, NOTES.G4, NOTES.C5],
        ];
        playPadChord(chords[chordIdx], time, beatDuration * 3.5, 0.15);
      }

      playPianoNote(melody[step % 16], time, beatDuration * 1.5, 0.25);

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  /**
   * 坏结局BGM
   */
  function startEndingBadBgm() {
    const bpm = 55;
    const beatDuration = 60 / bpm;
    let step = 0;

    function playStep() {
      if (!currentBgm || currentBgm !== 'ending_bad') return;

      const time = audioContext.currentTime;

      // 下行的悲伤旋律
      const melody = [
        NOTES.E5, NOTES.D5, NOTES.C5, NOTES.B4,
        NOTES.A4, NOTES.G4, NOTES.F4, NOTES.E4,
        NOTES.D4, NOTES.C4, NOTES.B3, NOTES.A3,
        NOTES.G3, NOTES.F3, NOTES.E3, NOTES.D3,
      ];

      // 小调和弦
      if (step % 4 === 0) {
        const chordIdx = Math.floor(step / 4) % 4;
        const chords = [
          [NOTES.A3, NOTES.C4, NOTES.E4],
          [NOTES.F3, NOTES.A3, NOTES.C4],
          [NOTES.E3, NOTES.G3, NOTES.B3],
          [NOTES.D3, NOTES.F3, NOTES.A3],
        ];
        playPadChord(chords[chordIdx], time, beatDuration * 3.5, 0.1);
      }

      playPianoNote(melody[step % 16], time, beatDuration * 2, 0.2);

      step++;
      currentBgmNodes.push(setTimeout(() => playStep(), beatDuration * 1000));
    }

    playStep();
    return { stop: () => {} };
  }

  // ==================== UI 音效 ====================

  /**
   * 普通按钮点击（轻微弹簧感）
   */
  function soundClick() {
    playEnvelopeTone(800, 0.1, 0.005, 0.02, 0.3, 0.05, 'sine', 0.25);
    playEnvelopeTone(1200, 0.08, 0.005, 0.015, 0.2, 0.03, 'sine', 0.15);
  }

  /**
   * 解锁角色（上行音符）
   */
  function soundUnlock() {
    const notes = [NOTES.C5, NOTES.E5, NOTES.G5, NOTES.C6];
    notes.forEach((note, i) => {
      setTimeout(() => {
        playEnvelopeTone(note, 0.3, 0.01, 0.05, 0.5, 0.1, 'sine', 0.3);
      }, i * 100);
    });
  }

  /**
   * 好感度上升（温柔的叮声）
   */
  function soundAffectionUp() {
    playEnvelopeTone(NOTES.E5, 0.25, 0.01, 0.03, 0.4, 0.1, 'sine', 0.25);
    setTimeout(() => {
      playEnvelopeTone(NOTES.G5, 0.3, 0.01, 0.03, 0.5, 0.15, 'sine', 0.2);
    }, 80);
  }

  /**
   * 好感度下降（轻微下行音）
   */
  function soundAffectionDown() {
    playEnvelopeTone(NOTES.G4, 0.3, 0.01, 0.05, 0.3, 0.1, 'triangle', 0.2);
    setTimeout(() => {
      playEnvelopeTone(NOTES.E4, 0.35, 0.01, 0.05, 0.3, 0.15, 'triangle', 0.15);
    }, 100);
  }

  /**
   * 进入睡眠（夜晚ambient）
   */
  function soundSleep() {
    const time = audioContext.currentTime;

    // 柔和的下降音
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(NOTES.C5, time);
    osc.frequency.exponentialRampToValueAtTime(NOTES.C3, time + 1.5);

    filter.type = 'lowpass';
    filter.frequency.value = 1000;

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(time);
    osc.stop(time + 1.6);
  }

  /**
   * 提示弹出（轻柔提示音）
   */
  function soundToast() {
    playEnvelopeTone(NOTES.E5, 0.15, 0.005, 0.02, 0.4, 0.05, 'sine', 0.2);
    setTimeout(() => {
      playEnvelopeTone(NOTES.G5, 0.2, 0.005, 0.02, 0.3, 0.08, 'sine', 0.15);
    }, 50);
  }

  /**
   * 新的一天开始（晨间chime）
   */
  function soundDayStart() {
    const notes = [NOTES.C5, NOTES.E5, NOTES.G5, NOTES.C6, NOTES.E6];
    notes.forEach((note, i) => {
      setTimeout(() => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = 'sine';
        osc.frequency.value = note;

        const now = audioContext.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.85);
      }, i * 120);
    });
  }

  /**
   * 告白场景（心跳 + 上升音调）
   */
  function soundConfession() {
    const time = audioContext.currentTime;

    // 心跳
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = 'sine';
        osc.frequency.value = 60;

        const t = audioContext.currentTime;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.4, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(t);
        osc.stop(t + 0.35);
      }, i * 500);
    }

    // 上升音调
    const melody = [NOTES.C4, NOTES.E4, NOTES.G4, NOTES.C5, NOTES.E5, NOTES.G5, NOTES.C6];
    melody.forEach((note, i) => {
      setTimeout(() => {
        playEnvelopeTone(note, 0.4, 0.02, 0.05, 0.5, 0.15, 'sine', 0.25);
      }, 200 + i * 120);
    });
  }

  // ==================== 主控制器 ====================

  const bgmStarters = {
    menu: startMenuBgm,
    daily: startDailyBgm,
    wenya: startWenyaBgm,
    xiayang: startXiayangBgm,
    sujingyi: startSujingyiBgm,
    luxiao: startLuxiaoBgm,
    linwanqing: startLinwanqingBgm,
    romantic: startRomanticBgm,
    tense: startTenseBgm,
    ending_good: startEndingGoodBgm,
    ending_bad: startEndingBadBgm,
  };

  const sounds = {
    click: soundClick,
    unlock: soundUnlock,
    affection_up: soundAffectionUp,
    affection_down: soundAffectionDown,
    sleep: soundSleep,
    toast: soundToast,
    day_start: soundDayStart,
    confession: soundConfession,
  };

  return {
    /**
     * 初始化音频系统（需用户交互后调用）
     */
    async init() {
      if (isInitialized) return;

      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioContext.createGain();
      masterGain.gain.value = 0.5;
      masterGain.connect(audioContext.destination);

      isInitialized = true;
      console.log('BloomAudio initialized');
    },

    /**
     * 播放BGM
     * @param {string} scene - 场景名称
     */
    playBgm(scene) {
      if (!isInitialized) {
        console.warn('BloomAudio not initialized. Call init() first.');
        return;
      }

      // 停止当前BGM
      this.stopBgm();

      currentBgm = scene;

      if (bgmStarters[scene]) {
        bgmStarters[scene]();
        console.log(`Playing BGM: ${scene}`);
      } else {
        console.warn(`Unknown BGM scene: ${scene}`);
      }
    },

    /**
     * 停止BGM
     */
    stopBgm() {
      // 清除所有定时器
      currentBgmNodes.forEach(timer => clearTimeout(timer));
      currentBgmNodes = [];

      // 淡出
      if (masterGain && audioContext) {
        const now = audioContext.currentTime;
        masterGain.gain.setValueAtTime(masterGain.gain.value, now);
        masterGain.gain.linearRampToValueAtTime(0, now + fadeTime);

        setTimeout(() => {
          if (masterGain) {
            masterGain.gain.value = 0.5;
          }
        }, fadeTime * 1000 + 100);
      }

      currentBgm = null;
    },

    /**
     * 播放音效
     * @param {string} name - 音效名称
     */
    playSound(name) {
      if (!isInitialized) {
        console.warn('BloomAudio not initialized.');
        return;
      }

      if (sounds[name]) {
        sounds[name]();
      } else {
        console.warn(`Unknown sound: ${name}`);
      }
    },

    /**
     * 设置音量
     * @param {number} volume - 音量 0-1
     */
    setVolume(volume) {
      if (masterGain) {
        masterGain.gain.value = Math.max(0, Math.min(1, volume));
      }
    },

    /**
     * 获取当前BGM名称
     */
    getCurrentBgm() {
      return currentBgm;
    },

    /**
     * 检查是否已初始化
     */
    isReady() {
      return isInitialized;
    },
  };
})();

// 导出供模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BloomAudio;
}
