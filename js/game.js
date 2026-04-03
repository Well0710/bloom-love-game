// 游戏引擎核心

class GameEngine {
    constructor() {
        this.currentStory = null;
        this.isTyping = false;
        this.typingTimer = null;
        this.fullText = '';
        this.displayedText = '';
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkSaves();
        this.showScreen('start-screen');
    }

    // 绑定事件
    bindEvents() {
        // 开始界面
        document.getElementById('btn-new-game').onclick = () => this.startNewGame();
        document.getElementById('btn-continue').onclick = () => this.continueGame();
        document.getElementById('btn-load').onclick = () => this.showSaveScreen('load');

        // 角色创建
        document.getElementById('btn-mbti-direct').onclick = () => this.showMBTIDirect();
        document.getElementById('btn-mbti-test').onclick = () => this.startMBTITest();
        document.getElementById('btn-start-game').onclick = () => this.createCharacter();

        // MBTI 测试
        this.mbtiTest = new MBTITest();

        // 游戏界面
        document.getElementById('btn-save').onclick = () => this.showSaveScreen('save');
        document.getElementById('btn-load-ingame').onclick = () => this.showSaveScreen('load');
        document.getElementById('btn-title').onclick = () => this.showTitle();

        // 存档界面
        document.getElementById('btn-back-save').onclick = () => this.showScreen('game-screen');

        // 结局界面
        document.getElementById('btn-back-title').onclick = () => this.showTitle();

        // 点击对话框继续
        document.getElementById('dialogue-box').onclick = (e) => {
            if (e.target.id !== 'choices-container' && !e.target.classList.contains('choice-btn')) {
                this.completeTyping();
            }
        };
    }

    // 检查是否有存档
    checkSaves() {
        const continueBtn = document.getElementById('btn-continue');
        continueBtn.disabled = !saveSystem.hasSaves();
    }

    // 显示屏幕
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    // 开始新游戏
    startNewGame() {
        gameState.reset();
        this.showScreen('create-screen');
        this.checkCreateComplete();
    }

    // 继续游戏
    continueGame() {
        // 找最新的存档
        const slots = saveSystem.getAllSlots();
        const latestSlot = slots.filter(s => s.info).sort((a, b) => b.info.timestamp - a.info.timestamp)[0];
        
        if (latestSlot) {
            this.loadGame(latestSlot.index);
        }
    }

    // 显示 MBTI 直接选择
    showMBTIDirect() {
        const mbtiTypes = [
            'INTJ', 'INTP', 'ENTJ', 'ENTP',
            'INFJ', 'INFP', 'ENFJ', 'ENFP',
            'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
            'ISTP', 'ISFP', 'ESTP', 'ESFP'
        ];

        const resultEl = document.getElementById('mbti-result');
        resultEl.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px;">
                ${mbtiTypes.map(type => `
                    <button class="sub-btn" onclick="game.selectMBTI('${type}')">${type}</button>
                `).join('')}
            </div>
        `;
    }

    // 选择 MBTI
    selectMBTI(type) {
        gameState.player.mbti = type;
        document.getElementById('mbti-result').innerHTML = `
            <div style="color: #fd79a8; font-weight: bold;">
                已选择：${type} - ${getMBTIDescription(type)}
            </div>
        `;
        this.checkCreateComplete();
    }

    // 开始 MBTI 测试
    startMBTITest() {
        this.showScreen('mbti-test-screen');
        this.mbtiTest.start((result) => {
            gameState.player.mbti = result;
            document.getElementById('mbti-result').innerHTML = `
                <div style="color: #fd79a8; font-weight: bold;">
                    测试结果：${result} - ${getMBTIDescription(result)}
                </div>
            `;
            this.showScreen('create-screen');
            this.checkCreateComplete();
        });
    }

    // 检查角色创建是否完成
    checkCreateComplete() {
        const name = document.getElementById('player-name').value.trim();
        const age = document.getElementById('player-age').value;
        const job = document.getElementById('player-job').value.trim();
        const mbti = gameState.player.mbti;

        const startBtn = document.getElementById('btn-start-game');
        startBtn.disabled = !(name && age && job && mbti);
    }

    // 监听输入
    setupCreateListeners() {
        ['player-name', 'player-age', 'player-job'].forEach(id => {
            document.getElementById(id).addEventListener('input', () => {
                this.checkCreateComplete();
            });
        });
    }

    // 创建角色
    createCharacter() {
        const name = document.getElementById('player-name').value.trim();
        const age = parseInt(document.getElementById('player-age').value);
        const job = document.getElementById('player-job').value.trim();
        const mbti = gameState.player.mbti;

        gameState.setPlayer(name, age, job, mbti);

        // 开始游戏
        this.startStory('start');
    }

    // 开始剧情
    startStory(storyId) {
        const story = getStory(storyId);
        if (!story) {
            console.error('剧情不存在:', storyId);
            return;
        }

        this.currentStory = story;
        gameState.currentStoryId = storyId;
        gameState.currentChapter = story.chapter;

        this.showScreen('game-screen');
        this.renderStory(story);
    }

    // 渲染剧情
    renderStory(story) {
        // 设置背景
        const bg = document.getElementById('background');
        if (story.bg) {
            bg.style.background = story.bg;
        }

        // 设置角色立绘
        const sprite = document.getElementById('character-sprite');
        if (story.sprite && CHARACTERS[story.sprite]) {
            // 暂时用颜色块代替立绘
            sprite.style.background = `linear-gradient(180deg, ${CHARACTERS[story.sprite].color} 0%, transparent 100%)`;
            sprite.style.display = 'block';
        } else {
            sprite.style.display = 'none';
        }

        // 设置章节标题
        document.getElementById('chapter-title').textContent = 
            story.chapter > 0 ? `第${story.chapter}章 ${story.title || ''}` : story.title || '';

        // 显示好感度
        this.updateAffectionDisplay();

        // 设置对话
        const speakerEl = document.getElementById('speaker-name');
        const textEl = document.getElementById('dialogue-text');

        if (story.speaker) {
            speakerEl.textContent = story.speaker;
            speakerEl.style.display = 'block';
        } else {
            speakerEl.style.display = 'none';
        }

        // 打字机效果
        this.fullText = story.text;
        this.displayedText = '';
        this.isTyping = true;
        textEl.textContent = '';
        
        this.typeText(story.text, textEl);

        // 设置选项
        this.renderChoices(story.choices);
    }

    // 打字机效果
    typeText(text, element) {
        if (!this.isTyping) return;

        const chars = text.split('');
        let index = 0;

        const type = () => {
            if (index < chars.length && this.isTyping) {
                this.displayedText += chars[index];
                element.textContent = this.displayedText;
                index++;
                this.typingTimer = setTimeout(type, 30); // 打字速度
            } else {
                this.isTyping = false;
            }
        };

        type();
    }

    // 完成打字
    completeTyping() {
        if (this.isTyping) {
            this.isTyping = false;
            clearTimeout(this.typingTimer);
            document.getElementById('dialogue-text').textContent = this.fullText;
        }
    }

    // 渲染选项
    renderChoices(choices) {
        const container = document.getElementById('choices-container');
        container.innerHTML = '';

        if (!choices || choices.length === 0) {
            return;
        }

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.onclick = (e) => {
                e.stopPropagation();
                this.makeChoice(choice);
            };
            container.appendChild(btn);
        });
    }

    // 做出选择
    makeChoice(choice) {
        // 处理好感度变化
        if (choice.affection) {
            Object.keys(choice.affection).forEach(charId => {
                changeAffection(charId, choice.affection[charId]);
            });
            this.updateAffectionDisplay();
        }

        // 标记角色已遇见
        if (choice.affection) {
            Object.keys(choice.affection).forEach(charId => {
                gameState.markMet(charId);
            });
        }

        // 跳转到下一个剧情
        if (choice.next) {
            this.startStory(choice.next);
        }
    }

    // 更新好感度显示
    updateAffectionDisplay() {
        const container = document.getElementById('affection-display');
        container.innerHTML = '';

        getAllCharacters().forEach(char => {
            if (gameState.metCharacters.includes(char.id) || char.affection > 0) {
                const heart = document.createElement('div');
                heart.className = 'affection-heart';
                heart.innerHTML = `
                    <span style="color: ${char.color}">❤️</span>
                    <span>${char.name.split('')[0]}</span>
                    <span>${'★'.repeat(Math.floor(char.affection / 20))}${'☆'.repeat(5 - Math.floor(char.affection / 20))}</span>
                `;
                container.appendChild(heart);
            }
        });
    }

    // 显示存档界面
    showSaveScreen(mode) {
        this.saveMode = mode;
        this.showScreen('save-screen');
        this.renderSaveSlots();
    }

    // 渲染存档槽位
    renderSaveSlots() {
        const container = document.getElementById('save-slots');
        const slots = saveSystem.getAllSlots();

        container.innerHTML = slots.map(slot => {
            if (slot.info) {
                return `
                    <div class="save-slot" onclick="game.handleSaveSlotClick(${slot.index})">
                        <div class="slot-title">💾 存档 ${slot.index + 1}</div>
                        <div class="slot-info">${slot.info.formattedTime}</div>
                        <div class="slot-info">第${slot.info.chapter}章</div>
                        <div class="slot-info">${slot.info.playerName} (${slot.info.playerMbti})</div>
                    </div>
                `;
            } else {
                return `
                    <div class="save-slot empty" onclick="game.handleSaveSlotClick(${slot.index})">
                        <div class="slot-title">📭 空槽位 ${slot.index + 1}</div>
                        <div class="slot-info">点击${this.saveMode === 'save' ? '保存' : '读取'}</div>
                    </div>
                `;
            }
        }).join('');

        document.querySelector('#save-screen h2').textContent = 
            this.saveMode === 'save' ? '💾 保存进度' : '📂 读取存档';
    }

    // 处理存档槽位点击
    handleSaveSlotClick(slotIndex) {
        if (this.saveMode === 'save') {
            saveSystem.save(slotIndex, gameState.export());
            alert('存档成功！');
            this.showScreen('game-screen');
        } else {
            const success = this.loadGame(slotIndex);
            if (success) {
                this.showScreen('game-screen');
            } else {
                alert('该槽位没有存档');
            }
        }
    }

    // 读取游戏
    loadGame(slotIndex) {
        const state = saveSystem.load(slotIndex);
        if (state) {
            gameState.import(state);
            this.startStory(state.currentStoryId);
            this.checkSaves();
            return true;
        }
        return false;
    }

    // 显示标题界面
    showTitle() {
        this.checkSaves();
        this.showScreen('start-screen');
    }

    // 显示结局（待实现）
    showEnding(endingId) {
        const ending = ENDINGS[endingId];
        if (!ending) return;

        document.getElementById('ending-title').textContent = ending.title;
        document.getElementById('ending-text').textContent = ending.text;
        this.showScreen('ending-screen');
    }
}

// 初始化输入监听
document.addEventListener('DOMContentLoaded', () => {
    window.game = new GameEngine();
    game.setupCreateListeners();
});
