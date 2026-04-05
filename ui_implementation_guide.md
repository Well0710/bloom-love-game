# 《Bloom》UI实现说明

## 1. HTML结构修改

### 1.1 设置页面

在 `<body>` 标签内，`</div id="game-container">` 之前添加：

```html
<!-- 设置页面 -->
<div id="settings-page">
    <div class="settings-content">
        <div class="settings-header">
            <h2 class="settings-title">设置</h2>
            <button class="settings-close-btn" onclick="game.closeSettings()">×</button>
        </div>
        
        <!-- 背景音乐开关 -->
        <div class="setting-item">
            <div class="setting-label">
                <span class="setting-icon">🎵</span>
                <span>背景音乐</span>
            </div>
            <div class="toggle-switch active" id="bgm-toggle" onclick="game.toggleBGM()"></div>
        </div>
        
        <!-- 音效音量 -->
        <div class="setting-item">
            <div class="setting-label">
                <span class="setting-icon">🔊</span>
                <span>音效音量</span>
            </div>
            <input type="range" class="volume-slider" id="sfx-volume" min="0" max="100" value="80" oninput="game.setSFXVolume(this.value)">
        </div>
        
        <!-- 打字音效开关 -->
        <div class="setting-item">
            <div class="setting-label">
                <span class="setting-icon">📝</span>
                <span>打字音效</span>
            </div>
            <div class="toggle-switch active" id="typing-toggle" onclick="game.toggleTypingSound()"></div>
        </div>
        
        <!-- 选择音效开关 -->
        <div class="setting-item">
            <div class="setting-label">
                <span class="setting-icon">👆</span>
                <span>选择音效</span>
            </div>
            <div class="toggle-switch active" id="choice-toggle" onclick="game.toggleChoiceSound()"></div>
        </div>
        
        <div class="settings-footer">
            <button class="settings-btn primary" onclick="game.openSavePage()">存档管理</button>
            <button class="settings-btn secondary" onclick="game.returnToMain()">返回主菜单</button>
        </div>
    </div>
</div>
```

### 1.2 存档管理页面

在设置页面之后添加：

```html
<!-- 存档管理页面 -->
<div id="save-page">
    <div class="save-content">
        <div class="settings-header">
            <h2 class="settings-title">存档管理</h2>
            <button class="settings-close-btn" onclick="game.closeSavePage()">×</button>
        </div>
        
        <div id="save-slots-container">
            <!-- 存档槽位将由 JavaScript 动态生成 -->
        </div>
        
        <div class="settings-footer">
            <button class="settings-btn primary" onclick="game.autoSave()">快速存档</button>
        </div>
    </div>
</div>
```

### 1.3 引导弹窗

在存档页面之后添加：

```html
<!-- 引导弹窗 -->
<div id="tutorial-modal">
    <div class="tutorial-content">
        <h2 class="tutorial-title">💡 游戏指南</h2>
        
        <div class="tutorial-section">
            <div class="tutorial-label">
                <span>📝</span>
                <span>了解你的性格</span>
            </div>
            <p class="tutorial-text">选择最匹配的攻略对象</p>
        </div>
        
        <div class="tutorial-section">
            <div class="tutorial-label">
                <span>🎮</span>
                <span>如何游玩</span>
            </div>
            <ul class="tutorial-list">
                <li>每天有 3 次行动机会</li>
                <li>选择活动提升好感度</li>
                <li>做出选择影响剧情走向</li>
                <li>目标：60天内攻略心仪对象</li>
            </ul>
        </div>
        
        <button class="tutorial-btn" onclick="game.closeTutorial()">开始游戏</button>
    </div>
</div>
```

### 1.4 游戏主页添加设置按钮

修改 `#game-main-page` 的 `.top-bar`：

```html
<div class="top-bar">
    <div class="day-info">
        <span class="day-badge">Day <span id="day-num">1</span></span>
    </div>
    <div class="action-points" id="action-points">
        <span class="action-point available"></span>
        <span class="action-point available"></span>
        <span class="action-point available"></span>
    </div>
    <!-- 添加设置按钮 -->
    <button class="settings-btn-entry" onclick="game.openSettings()">⚙️</button>
</div>
```

### 1.5 MBTI入口页添加引导

修改 `#mbti-page` 的内容：

```html
<div id="mbti-page" class="page">
    <div class="mbti-entry-content">
        <h2 class="page-title">让我们先了解一下你</h2>
        <!-- 添加引导说明 -->
        <div class="intro-box" style="margin-bottom: 30px; padding: 20px; max-width: 350px;">
            <p style="color: rgba(255,255,255,0.8);">💡 了解自己的性格，选择最匹配的攻略对象</p>
        </div>
        <div class="mbti-entry-buttons">
            <button class="entry-btn" onclick="game.goToMbtiSelect()">
                <span class="entry-icon">💡</span>
                <span class="entry-text">我知道我的MBTI</span>
                <span class="entry-hint">直接选择，跳过测试</span>
            </button>
            <button class="entry-btn" onclick="game.goToMbtiTest()">
                <span class="entry-icon">📝</span>
                <span class="entry-text">帮我测试</span>
                <span class="entry-hint">回答问题，找到你的MBTI</span>
            </button>
        </div>
        <button class="skip-btn" onclick="game.skipToCharSelect()">跳过，直接选择角色 →</button>
    </div>
</div>
```

## 2. CSS引入

### 2.1 引入补丁样式

在 `<head>` 标签内的 `<style>` 标签末尾添加：

```html
<style>
    /* ... 现有样式 ... */
</style>
<!-- 引入UI整改补丁样式 -->
<link rel="stylesheet" href="ui_fix.css">
```

或者直接将 `ui_fix.css` 的内容复制到现有 `<style>` 标签的末尾。

## 3. JavaScript功能实现

### 3.1 GameEngine类扩展

在 `GameEngine` 类中添加以下方法：

```javascript
class GameEngine {
    // ... 现有代码 ...
    
    // ===== 设置系统 =====
    
    constructor() {
        // ... 现有构造函数代码 ...
        this.settings = {
            bgmEnabled: true,
            sfxVolume: 80,
            typingEnabled: true,
            choiceEnabled: true
        };
        this.loadSettings();
    }
    
    // 打开设置页面
    openSettings() {
        document.getElementById('settings-page').classList.add('active');
        this.loadSettingsUI();
    }
    
    // 关闭设置页面
    closeSettings() {
        document.getElementById('settings-page').classList.remove('active');
    }
    
    // 加载设置到UI
    loadSettingsUI() {
        document.getElementById('bgm-toggle').classList.toggle('active', this.settings.bgmEnabled);
        document.getElementById('sfx-volume').value = this.settings.sfxVolume;
        document.getElementById('typing-toggle').classList.toggle('active', this.settings.typingEnabled);
        document.getElementById('choice-toggle').classList.toggle('active', this.settings.choiceEnabled);
    }
    
    // 切换背景音乐
    toggleBGM() {
        this.settings.bgmEnabled = !this.settings.bgmEnabled;
        document.getElementById('bgm-toggle').classList.toggle('active', this.settings.bgmEnabled);
        this.saveSettings();
        // TODO: 实际的BGM控制逻辑
        this.showToast(this.settings.bgmEnabled ? '🎵 背景音乐已开启' : '🔇 背景音乐已关闭');
    }
    
    // 设置音效音量
    setSFXVolume(value) {
        this.settings.sfxVolume = parseInt(value);
        this.saveSettings();
        // TODO: 实际的音量控制逻辑
    }
    
    // 切换打字音效
    toggleTypingSound() {
        this.settings.typingEnabled = !this.settings.typingEnabled;
        document.getElementById('typing-toggle').classList.toggle('active', this.settings.typingEnabled);
        this.saveSettings();
    }
    
    // 切换选择音效
    toggleChoiceSound() {
        this.settings.choiceEnabled = !this.settings.choiceEnabled;
        document.getElementById('choice-toggle').classList.toggle('active', this.settings.choiceEnabled);
        this.saveSettings();
    }
    
    // 保存设置到localStorage
    saveSettings() {
        localStorage.setItem('bloom_v3_settings', JSON.stringify(this.settings));
    }
    
    // 从localStorage加载设置
    loadSettings() {
        const saved = localStorage.getItem('bloom_v3_settings');
        if (saved) {
            Object.assign(this.settings, JSON.parse(saved));
        }
    }
    
    // ===== 存档系统 =====
    
    // 打开存档页面
    openSavePage() {
        this.closeSettings();
        document.getElementById('save-page').classList.add('active');
        this.renderSaveSlots();
    }
    
    // 关闭存档页面
    closeSavePage() {
        document.getElementById('save-page').classList.remove('active');
    }
    
    // 渲染存档槽位
    renderSaveSlots() {
        const container = document.getElementById('save-slots-container');
        let html = '';
        
        for (let i = 0; i < 3; i++) {
            const saveKey = `bloom_v3_save_${i}`;
            const saveData = localStorage.getItem(saveKey);
            
            if (saveData) {
                const data = JSON.parse(saveData);
                const charName = data.selectedChar ? CHARACTERS[data.selectedChar].name : '未选择';
                const affection = data.selectedChar ? data.charAttitudes[data.selectedChar] : 0;
                const date = new Date(data.savedAt || Date.now()).toLocaleString('zh-CN');
                
                html += `
                    <div class="save-slot">
                        <div class="save-slot-header">
                            <span class="save-slot-title">槽位 ${i + 1}</span>
                        </div>
                        <div class="save-slot-info">📅 ${date}</div>
                        <div class="save-slot-details">
                            <span>Day ${data.day}</span>
                            <span>|</span>
                            <span>${charName}</span>
                            <span>|</span>
                            <span>好感度 ${affection}</span>
                        </div>
                        <div class="save-slot-actions">
                            <button class="slot-btn primary" onclick="game.loadSaveSlot(${i})">读取</button>
                            <button class="slot-btn secondary" onclick="game.overwriteSaveSlot(${i})">覆盖</button>
                            <button class="slot-btn danger" onclick="game.deleteSaveSlot(${i})">删除</button>
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <div class="save-slot empty" onclick="game.saveToSlot(${i})">
                        <span>槽位 ${i + 1} [空]</span>
                    </div>
                `;
            }
        }
        
        container.innerHTML = html;
    }
    
    // 保存到指定槽位
    saveToSlot(slotIndex) {
        const saveData = {
            ...this.state,
            savedAt: Date.now()
        };
        localStorage.setItem(`bloom_v3_save_${slotIndex}`, JSON.stringify(saveData));
        this.renderSaveSlots();
        this.showToast('✅ 存档成功！');
    }
    
    // 覆盖存档
    overwriteSaveSlot(slotIndex) {
        if (confirm('确定要覆盖这个存档吗？')) {
            this.saveToSlot(slotIndex);
        }
    }
    
    // 读取存档
    loadSaveSlot(slotIndex) {
        const saveData = localStorage.getItem(`bloom_v3_save_${slotIndex}`);
        if (saveData) {
            Object.assign(this.state, JSON.parse(saveData));
            this.closeSavePage();
            this.renderActivityGrid();
            this.updateUI();
            this.selectedCharId = this.state.selectedChar;
            this.showPage('game-main-page');
            this.showToast('📖 读档成功！');
        }
    }
    
    // 删除存档
    deleteSaveSlot(slotIndex) {
        if (confirm('确定要删除这个存档吗？此操作不可恢复！')) {
            localStorage.removeItem(`bloom_v3_save_${slotIndex}`);
            this.renderSaveSlots();
            this.showToast('🗑️ 存档已删除');
        }
    }
    
    // 快速存档（自动选择第一个可用槽位）
    autoSave() {
        // 先尝试更新当前槽位，如果没有则使用槽位1
        const currentSlot = 0;
        this.saveToSlot(currentSlot);
        this.closeSavePage();
        this.showToast('✅ 快速存档成功！');
    }
    
    // 返回主菜单
    returnToMain() {
        this.closeSettings();
        this.showPage('landing-page');
    }
    
    // ===== 教程系统 =====
    
    // 显示教程
    showTutorial() {
        document.getElementById('tutorial-modal').classList.add('active');
    }
    
    // 关闭教程
    closeTutorial() {
        document.getElementById('tutorial-modal').classList.remove('active');
        localStorage.setItem('bloom_v3_tutorial_seen', 'true');
    }
    
    // 检查是否显示教程
    checkTutorial() {
        const seen = localStorage.getItem('bloom_v3_tutorial_seen');
        if (!seen) {
            // 延迟一点显示，避免和页面加载动画冲突
            setTimeout(() => this.showTutorial(), 500);
        }
    }
    
    // ===== 页面过渡 =====
    
    // 改进的页面切换方法
    showPage(id) {
        const currentPage = document.querySelector('.page.active');
        const targetPage = document.getElementById(id);
        
        if (currentPage && currentPage.id !== id) {
            currentPage.classList.add('fade-out');
            setTimeout(() => {
                currentPage.classList.remove('active', 'fade-out');
                targetPage.classList.add('active', 'fade-in');
                setTimeout(() => targetPage.classList.remove('fade-in'), 300);
            }, 300);
        } else if (!currentPage) {
            targetPage.classList.add('active', 'fade-in');
            setTimeout(() => targetPage.classList.remove('fade-in'), 300);
        }
    }
    
    // ===== 好感度进度条颜色 =====
    
    // 获取好感度等级
    getAffectionLevel(affection) {
        if (affection >= 70) return 3; // 恋人
        if (affection >= 50) return 2; // 暧昧
        if (affection >= 30) return 1; // 朋友
        return 0; // 陌生
    }
    
    // 更新角色卡片上的进度条颜色
    updateAffectionBars() {
        Object.keys(CHARACTERS).forEach(charId => {
            const affection = this.state.charAttitudes[charId];
            const level = this.getAffectionLevel(affection);
            const fill = document.querySelector(`#char-${charId} .char-affection-fill`);
            if (fill) {
                fill.style.width = `${affection}%`;
                fill.className = `char-affection-fill level-${level}`;
            }
        });
    }
    
    // ===== 交互反馈 =====
    
    // 播放点击音效
    playClickSound() {
        if (this.settings.choiceEnabled) {
            // TODO: 实际播放音效逻辑
            // const audio = new Audio('assets/sounds/click.mp3');
            // audio.volume = this.settings.sfxVolume / 100;
            // audio.play();
        }
    }
    
    // 播放打字音效
    playTypingSound() {
        if (this.settings.typingEnabled) {
            // TODO: 实际播放音效逻辑
            // const audio = new Audio('assets/sounds/typing.mp3');
            // audio.volume = this.settings.sfxVolume / 100;
            // audio.play();
        }
    }
    
    // 修改现有的打字机效果方法
    typeText(text, callback) {
        this.isTyping = true;
        const textEl = document.getElementById('dialogue-text');
        const cursorEl = document.getElementById('typing-cursor');
        let idx = 0;
        
        textEl.textContent = '';
        cursorEl.style.display = 'inline';
        document.getElementById('choices-area').innerHTML = '';
        
        const type = () => {
            if (idx < text.length) {
                textEl.textContent += text[idx];
                idx++;
                this.playTypingSound(); // 播放打字音效
                this.typingTimeout = setTimeout(type, 50);
            } else {
                this.isTyping = false;
                cursorEl.style.display = 'none';
                if (callback) callback();
            }
        };
        type();
    }
}
```

### 3.2 初始化修改

修改 `init()` 方法：

```javascript
init() {
    this.renderMbtiGrid();
    this.renderCharGrid();
    this.renderActivityGrid();
    this.checkContinue();
    this.checkTutorial(); // 添加教程检查
}
```

### 3.3 修改选择角色时的好感度显示

修改 `renderCharGrid()` 方法：

```javascript
renderCharGrid() {
    const grid = document.getElementById('char-grid');
    if (!grid) return;
    grid.innerHTML = Object.values(CHARACTERS).map(c => {
        const affection = this.state.charAttitudes[c.id];
        const level = this.getAffectionLevel(affection);
        return `
            <div class="char-card" style="--char-color: ${c.color}; --char-glow: ${c.color}40;" onclick="game.selectChar('${c.id}')" id="char-${c.id}">
                <div class="char-avatar" style="border-color: ${c.color}; background: ${c.color}20;">
                    <img src="${c.avatar}" alt="${c.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span style="display:none; color: ${c.color}; font-size: 2rem;">${c.name[0]}</span>
                </div>
                <div class="char-name">${c.name}</div>
                <div class="char-trait">${c.trait}</div>
                <div class="char-affection-bar">
                    <div class="char-affection-fill level-${level}" style="width: ${affection}%; background: ${c.color};"></div>
                </div>
            </div>
        `;
    }).join('');
}
```

### 3.4 添加页面过渡类到HTML

修改所有 `<div class="page">` 元素，确保它们在初始时没有 `active` 类，而是通过 JavaScript 添加：

```html
<div id="landing-page" class="page">
```

## 4. 页面过渡效果实现

### 4.1 CSS类名说明

- `.fade-in` - 淡入效果
- `.fade-out` - 淡出效果
- `.slide-in` - 从右滑入
- `.slide-out` - 向左滑出
- `.slideUp` - 从下方滑入

### 4.2 使用示例

```javascript
// 淡入淡出过渡
this.showPage('target-page-id');

// 滑入滑出过渡（自定义）
document.querySelector('.page.active').classList.add('slide-out');
setTimeout(() => {
    document.querySelector('.page.active').classList.remove('active', 'slide-out');
    document.getElementById('target-page').classList.add('active', 'slide-in');
}, 250);
```

## 5. 存档数据结构

### 5.1 存档键名规则

- 主存档：`bloom_v3_save`
- 槽位存档：`bloom_v3_save_0`, `bloom_v3_save_1`, `bloom_v3_save_2`
- 设置数据：`bloom_v3_settings`
- 教程标记：`bloom_v3_tutorial_seen`

### 5.2 存档数据格式

```javascript
{
    day: 15,
    energy: 80,
    mbti: "INFP",
    selectedChar: "wenya",
    charAttitudes: {
        wenya: 85,
        xiayang: 30,
        sujingyi: 45,
        luxiao: 20,
        linwanqing: 35
    },
    charUnlocked: {
        wenya: true,
        xiayang: true,
        sujingyi: true,
        luxiao: false,
        linwanqing: false
    },
    savedAt: 1712329200000  // 保存时间戳
}
```

## 6. 实施步骤

### 第一步：添加HTML结构
1. 在 `game-v3.html` 中添加设置页面
2. 添加存档管理页面
3. 添加引导弹窗
4. 修改游戏主页顶部栏
5. 修改MBTI入口页

### 第二步：引入CSS
1. 复制 `ui_fix.css` 的内容到 `<style>` 标签末尾
2. 或使用 `<link>` 标签引入外部文件

### 第三步：添加JavaScript功能
1. 在 `GameEngine` 类中添加设置相关方法
2. 添加存档管理相关方法
3. 添加教程相关方法
4. 修改 `init()` 方法
5. 修改 `renderCharGrid()` 方法
6. 修改 `typeText()` 方法添加音效

### 第四步：测试
1. 测试手机端按钮遮挡是否修复
2. 测试设置页面功能
3. 测试存档读取和保存
4. 测试教程弹窗显示
5. 测试页面过渡动画
6. 测试好感度进度条颜色

### 第五步：音效集成（可选）
1. 准备音频文件（背景音乐、点击音效、打字音效）
2. 将文件放入 `assets/sounds/` 目录
3. 在JavaScript中实现音频播放逻辑
4. 测试音效开关和音量调节

## 7. 注意事项

1. **手机端测试**：务必在真实手机设备上测试按钮遮挡问题
2. **localStorage限制**：localStorage有5MB限制，不要存储过多数据
3. **浏览器兼容性**：使用现代浏览器特性，避免过时API
4. **动画性能**：使用 `transform` 和 `opacity` 进行动画，避免使用 `top/left`
5. **触摸优化**：确保所有交互元素都有足够大的点击区域
6. **无障碍访问**：为按钮添加适当的 `aria-label`

## 8. 后续优化建议

1. 添加更多存档槽位（扩展到5个）
2. 支持云存档功能
3. 添加成就系统界面
4. 添加图鉴/角色收藏界面
5. 添加更多音效和背景音乐
6. 支持自定义游戏速度
7. 添加自动存档功能
8. 支持导出/导入存档
