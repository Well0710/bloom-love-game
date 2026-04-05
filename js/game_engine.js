// ===== 《Bloom》游戏引擎 =====
// 整合所有设计文件 - v3.0

// ===== 角色数据 =====
const CHARACTERS = {
    wenya: {
        id: 'wenya',
        name: '温雅',
        mbti: 'INFP',
        emoji: '🌸',
        color: '#c084fc',
        desc: '隔壁的插画师，安静内敛',
        portrait: 'assets/characters/wenya_portrait.png'
    },
    xiayang: {
        id: 'xiayang',
        name: '夏阳',
        mbti: 'ESFP',
        emoji: '☀️',
        color: '#fb923c',
        desc: '健身达人，阳光活力',
        portrait: 'assets/characters/xiayang_portrait.png'
    },
    sujingyi: {
        id: 'sujingyi',
        name: '苏静怡',
        mbti: 'ISTJ',
        emoji: '🩺',
        color: '#34d399',
        desc: '心内科医生，克制理性',
        portrait: 'assets/characters/sujingyi_portrait.png'
    },
    luxiao: {
        id: 'luxiao',
        name: '陆潇',
        mbti: 'ENTJ',
        emoji: '🔥',
        color: '#f43f5e',
        desc: '餐厅主厨，强势自信',
        portrait: 'assets/characters/luxiao_portrait.png'
    },
    linwanqing: {
        id: 'linwanqing',
        name: '林婉清',
        mbti: 'ESTJ',
        emoji: '💼',
        color: '#60a5fa',
        desc: '客户总监，高效干练',
        portrait: 'assets/characters/linwanqing_portrait.png'
    }
};

// ===== 活动配置 =====
const ACTIVITIES = {
    stay_home: { name: '在家宅着', emoji: '🏠', scene: 'home', desc: '安静的出租屋，窗外梧桐树影摇曳' },
    gym: { name: '健身房', emoji: '💪', scene: 'gym', desc: '充满汗水和决心的地方' },
    park: { name: '公园散步', emoji: '🌿', scene: 'park', desc: '傍晚的公园，空气里有桂花香' },
    dinner: { name: '外出就餐', emoji: '🍽️', scene: 'restaurant', desc: '精致的法餐厅，烛光摇曳' },
    overtime: { name: '在公司加班', emoji: '💻', scene: 'office', desc: '深夜的办公室，只剩一盏台灯' },
    cafe: { name: '咖啡馆', emoji: '☕', scene: 'cafe', desc: '安静的咖啡馆，爵士乐在流淌' }
};

// ===== MBTI测试题目 =====
const MBTI_QUESTIONS = [
    {
        text: '周末你更倾向于：',
        options: [
            { text: '和朋友聚会，参加社交活动', scores: { E: 2 } },
            { text: '在家看书或做自己喜欢的事', scores: { I: 2 } },
            { text: '视情况而定', scores: { E: 1, I: 1 } }
        ]
    },
    {
        text: '面对问题时，你更依赖：',
        options: [
            { text: '直觉和灵感', scores: { N: 2 } },
            { text: '事实和经验', scores: { S: 2 } },
            { text: '两者结合', scores: { N: 1, S: 1 } }
        ]
    },
    {
        text: '做决定时，你更看重：',
        options: [
            { text: '逻辑和公平', scores: { T: 2 } },
            { text: '感受和和谐', scores: { F: 2 } },
            { text: '具体情况具体分析', scores: { T: 1, F: 1 } }
        ]
    },
    {
        text: '你更喜欢的生活节奏是：',
        options: [
            { text: '有计划、有条理', scores: { J: 2 } },
            { text: '随性、灵活应变', scores: { P: 2 } },
            { text: '大方向有计划，细节可调整', scores: { J: 1, P: 1 } }
        ]
    },
    {
        text: '在社交场合，你通常：',
        options: [
            { text: '主动和人交流，气氛担当', scores: { E: 2 } },
            { text: '和熟悉的人聊天', scores: { I: 1, E: 1 } },
            { text: '安静观察，不主动搭话', scores: { I: 2 } }
        ]
    },
    {
        text: '你更关注：',
        options: [
            { text: '未来的可能性', scores: { N: 2 } },
            { text: '当下的现实', scores: { S: 2 } },
            { text: '两者都关注', scores: { N: 1, S: 1 } }
        ]
    },
    {
        text: '朋友向你倾诉烦恼，你会：',
        options: [
            { text: '帮TA分析问题，提供建议', scores: { T: 2 } },
            { text: '倾听并安慰TA的情绪', scores: { F: 2 } },
            { text: '先倾听，再视情况给建议', scores: { T: 1, F: 1 } }
        ]
    },
    {
        text: '你的工作/学习风格是：',
        options: [
            { text: '提前规划，按部就班', scores: { J: 2 } },
            { text: '截止日期前高效完成', scores: { P: 2 } },
            { text: '有大致计划，灵活调整', scores: { J: 1, P: 1 } }
        ]
    }
];

// ===== 游戏状态 =====
const GameState = {
    day: 1,
    actionPoints: 3,
    energyPoints: 3,  // 精力点系统
    playerMbti: null,
    selectedChar: null,
    characters: {},
    activitiesUsed: {},
    activityCount: {},
    currentDialogue: null,
    tempAffectionChanges: {},
    settings: {
        bgmEnabled: true,
        sfxVolume: 80,
        typingSound: true
    },
    
    init() {
        this.day = 1;
        this.actionPoints = 3;
        this.energyPoints = 3;
        this.playerMbti = null;
        this.selectedChar = null;
        this.characters = {};
        this.activitiesUsed = {};
        this.activityCount = {};
        this.currentDialogue = null;
        this.tempAffectionChanges = {};
        this.settings = {
            bgmEnabled: true,
            sfxVolume: 80,
            typingSound: true
        };
        
        // 初始化角色状态
        Object.keys(CHARACTERS).forEach(charId => {
            this.characters[charId] = {
                known: false,
                affection: 0,
                attitude: 50,  // 态度值 0-100
                temperature: 50,  // 温度值 0-100
                metDay: null,
                storyProgress: {},
                unlocked: false
            };
        });
        
        // 初始化活动计数
        Object.keys(ACTIVITIES).forEach(actId => {
            this.activityCount[actId] = 0;
        });
    },
    
    save() {
        const data = {
            day: this.day,
            actionPoints: this.actionPoints,
            energyPoints: this.energyPoints,
            playerMbti: this.playerMbti,
            selectedChar: this.selectedChar,
            characters: this.characters,
            activityCount: this.activityCount,
            settings: this.settings
        };
        localStorage.setItem('bloom_save', JSON.stringify(data));
    },
    
    load() {
        const data = localStorage.getItem('bloom_save');
        if (data) {
            const parsed = JSON.parse(data);
            this.day = parsed.day || 1;
            this.actionPoints = parsed.actionPoints || 3;
            this.energyPoints = parsed.energyPoints || 3;
            this.playerMbti = parsed.playerMbti;
            this.selectedChar = parsed.selectedChar;
            this.characters = parsed.characters || {};
            this.activityCount = parsed.activityCount || {};
            this.settings = parsed.settings || { bgmEnabled: true, sfxVolume: 80, typingSound: true };
            return true;
        }
        return false;
    },
    
    // 保存到指定槽位
    saveToSlot(slotId) {
        const saves = this.getAllSaves();
        saves[slotId] = {
            day: this.day,
            selectedChar: this.selectedChar,
            timestamp: Date.now()
        };
        localStorage.setItem('bloom_saves_meta', JSON.stringify(saves));
        localStorage.setItem(`bloom_save_${slotId}`, localStorage.getItem('bloom_save'));
    },
    
    // 从指定槽位加载
    loadFromSlot(slotId) {
        const data = localStorage.getItem(`bloom_save_${slotId}`);
        if (data) {
            localStorage.setItem('bloom_save', data);
            return this.load();
        }
        return false;
    },
    
    // 获取所有存档信息
    getAllSaves() {
        const data = localStorage.getItem('bloom_saves_meta');
        return data ? JSON.parse(data) : {};
    },
    
    // 删除存档
    deleteSlot(slotId) {
        const saves = this.getAllSaves();
        delete saves[slotId];
        localStorage.setItem('bloom_saves_meta', JSON.stringify(saves));
        localStorage.removeItem(`bloom_save_${slotId}`);
    }
};

// ===== 游戏引擎 =====
const GameEngine = {
    currentPage: 'landing-page',
    pageHistory: [],
    mbtiScores: {},
    testAnswers: [],
    currentQuestion: 0,
    selectedMbti: null,
    selectedChar: null,
    typingInterval: null,
    isTyping: false,
    exitConfirmCallback: null,
    
    // 初始化
    init() {
        this.checkSaveData();
        this.setupEventListeners();
        this.setupExitHandler();
        this.showPage('landing-page');
        
        // 初始化心动特效
        if (typeof HeartEffects !== 'undefined') {
            HeartEffects.init();
        }
    },
    
    // 设置退出处理
    setupExitHandler() {
        // 监听页面关闭/刷新
        window.addEventListener('beforeunload', (e) => {
            if (this.currentPage === 'dialogue-overlay' || 
                document.getElementById('dialogue-overlay')?.classList.contains('active')) {
                // 在对话中退出，触发惩罚
                this.applyExitPenalty();
            }
        });
    },
    
    // 应用退出惩罚
    applyExitPenalty() {
        const penalty = 10 + Math.floor(Math.random() * 11); // 10-20点
        const currentChar = this.currentStoryNode?.charId;
        if (currentChar && GameState.characters[currentChar]) {
            GameState.characters[currentChar].affection = Math.max(0, 
                GameState.characters[currentChar].affection - penalty);
            GameState.save();
        }
    },
    
    // 检查存档
    checkSaveData() {
        const hasSave = GameState.load();
        const continueBtn = document.getElementById('btn-continue');
        if (continueBtn) {
            continueBtn.disabled = !hasSave;
        }
    },
    
    // 设置事件监听
    setupEventListeners() {
        // 点击对话框跳过打字
        const dialogueBubble = document.getElementById('dialogue-bubble');
        if (dialogueBubble) {
            dialogueBubble.addEventListener('click', () => this.skipTyping());
        }
    },
    
    // 页面切换
    showPage(pageId, addToHistory = true) {
        // 隐藏当前页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // 显示新页面
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.add('active');
            this.currentPage = pageId;
            
            if (addToHistory) {
                this.pageHistory.push(pageId);
            }
            
            // 页面特定初始化
            this.onPageShow(pageId);
        }
    },
    
    // 页面显示回调
    onPageShow(pageId) {
        switch(pageId) {
            case 'mbti-select-page':
                this.renderMbtiGrid();
                break;
            case 'mbti-test-page':
                this.startMbtiTest();
                break;
            case 'char-select-page':
                this.renderCharGrid();
                break;
            case 'game-main-page':
                this.updateGameUI();
                break;
        }
    },
    
    // 返回上一页
    goBack() {
        if (this.pageHistory.length > 1) {
            this.pageHistory.pop();
            const prevPage = this.pageHistory[this.pageHistory.length - 1];
            this.showPage(prevPage, false);
        }
    },
    
    // ===== 首页操作 =====
    startNewStory() {
        GameState.init();
        this.showPage('mbti-page');
    },
    
    continueGame() {
        if (GameState.load()) {
            this.showPage('game-main-page');
        }
    },
    
    // ===== MBTI流程 =====
    goToMbtiSelect() {
        this.showPage('mbti-select-page');
    },
    
    goToMbtiTest() {
        this.showPage('mbti-test-page');
    },
    
    skipToCharSelect() {
        this.showPage('char-select-page');
    },
    
    // 渲染MBTI网格
    renderMbtiGrid() {
        const grid = document.getElementById('mbti-grid');
        if (!grid) return;
        
        const mbtiTypes = [
            'INTJ', 'INTP', 'ENTJ', 'ENTP',
            'INFJ', 'INFP', 'ENFJ', 'ENFP',
            'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
            'ISTP', 'ISFP', 'ESTP', 'ESFP'
        ];
        
        grid.innerHTML = mbtiTypes.map(type => `
            <button class="mbti-card ${this.selectedMbti === type ? 'selected' : ''}" 
                    data-mbti="${type}"
                    onclick="game.selectMbti('${type}')">
                ${type}
            </button>
        `).join('');
    },
    
    // 选择MBTI
    selectMbti(type) {
        this.selectedMbti = type;
        this.renderMbtiGrid();
        
        const confirmBtn = document.getElementById('mbti-confirm-btn');
        if (confirmBtn) {
            confirmBtn.disabled = false;
        }
    },
    
    // 确认MBTI选择
    confirmMbti() {
        if (this.selectedMbti) {
            GameState.playerMbti = this.selectedMbti;
            this.showPage('char-select-page');
        }
    },
    
    // ===== MBTI测试 =====
    startMbtiTest() {
        this.currentQuestion = 0;
        this.testAnswers = [];
        this.mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.showTestQuestion();
    },
    
    showTestQuestion() {
        const question = MBTI_QUESTIONS[this.currentQuestion];
        
        document.getElementById('q-num').textContent = this.currentQuestion + 1;
        document.getElementById('q-total').textContent = MBTI_QUESTIONS.length;
        document.getElementById('progress-fill').style.width = 
            ((this.currentQuestion + 1) / MBTI_QUESTIONS.length * 100) + '%';
        
        document.getElementById('question-text').textContent = question.text;
        
        const optionsList = document.getElementById('options-list');
        optionsList.innerHTML = question.options.map((opt, idx) => `
            <button class="option-btn ${this.testAnswers[this.currentQuestion] === idx ? 'selected' : ''}"
                    onclick="game.selectTestOption(${idx})">
                ${opt.text}
            </button>
        `).join('');
        
        document.getElementById('test-next-btn').disabled = 
            this.testAnswers[this.currentQuestion] === undefined;
    },
    
    selectTestOption(idx) {
        this.testAnswers[this.currentQuestion] = idx;
        this.showTestQuestion();
        document.getElementById('test-next-btn').disabled = false;
    },
    
    testNext() {
        // 记录分数
        const question = MBTI_QUESTIONS[this.currentQuestion];
        const answerIdx = this.testAnswers[this.currentQuestion];
        const scores = question.options[answerIdx].scores;
        
        Object.entries(scores).forEach(([key, val]) => {
            this.mbtiScores[key] += val;
        });
        
        this.currentQuestion++;
        
        if (this.currentQuestion >= MBTI_QUESTIONS.length) {
            this.showTestResult();
        } else {
            this.showTestQuestion();
        }
    },
    
    testBack() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showTestQuestion();
        }
    },
    
    showTestResult() {
        // 计算MBTI
        const result = 
            (this.mbtiScores.E >= this.mbtiScores.I ? 'E' : 'I') +
            (this.mbtiScores.S >= this.mbtiScores.N ? 'S' : 'N') +
            (this.mbtiScores.T >= this.mbtiScores.F ? 'T' : 'F') +
            (this.mbtiScores.J >= this.mbtiScores.P ? 'J' : 'P');
        
        this.selectedMbti = result;
        document.getElementById('result-type').textContent = result;
        this.showPage('mbti-result-page');
    },
    
    confirmResult() {
        GameState.playerMbti = this.selectedMbti;
        this.showPage('char-select-page');
    },
    
    retryTest() {
        this.startMbtiTest();
    },
    
    // ===== 角色选择 =====
    renderCharGrid() {
        const grid = document.getElementById('char-grid');
        if (!grid) return;
        
        grid.innerHTML = Object.values(CHARACTERS).map(char => `
            <div class="char-card ${this.selectedChar === char.id ? 'selected' : ''} ${char.id}"
                 onclick="game.selectChar('${char.id}')">
                <div class="char-avatar">
                    <img src="${char.portrait}" alt="${char.name}" 
                         onerror="this.style.display='none'; this.parentElement.textContent='${char.emoji}'">
                </div>
                <div class="char-info">
                    <span class="char-name">${char.name}</span>
                    <span class="char-mbti">${char.mbti}</span>
                </div>
            </div>
        `).join('');
    },
    
    selectChar(charId) {
        this.selectedChar = charId;
        GameState.selectedChar = charId;
        this.renderCharGrid();
        
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) {
            startBtn.disabled = false;
        }
    },
    
    startGame() {
        if (this.selectedChar) {
            // 初始化选中角色
            GameState.characters[this.selectedChar].unlocked = true;
            GameState.characters[this.selectedChar].known = true;
            GameState.characters[this.selectedChar].metDay = 1;
            
            this.showPage('game-main-page');
        }
    },
    
    // ===== 游戏主页 =====
    updateGameUI() {
        // 更新天数
        document.getElementById('day-num').textContent = GameState.day;
        
        // 更新精力点显示
        const energyDisplay = document.getElementById('energy-display');
        if (energyDisplay) {
            energyDisplay.innerHTML = Array(3).fill(0).map((_, i) => `
                <span class="energy-point ${i < GameState.energyPoints ? '' : 'used'}">⚡</span>
            `).join('');
        }
        
        // 更新行动点
        const actionPoints = document.getElementById('action-points');
        if (actionPoints) {
            actionPoints.innerHTML = Array(3).fill(0).map((_, i) => `
                <span class="action-point ${i < GameState.actionPoints ? 'available' : 'used'}"></span>
            `).join('');
        }
        
        const actionRemain = document.getElementById('action-remain');
        if (actionRemain) {
            actionRemain.textContent = GameState.actionPoints;
        }
        
        // 渲染活动
        this.renderActivities();
        
        // 渲染已认识的角色
        this.renderKnownChars();
        
        // 更新快捷好感度
        this.renderQuickHearts();
    },
    
    renderActivities() {
        const grid = document.getElementById('activity-grid');
        if (!grid) return;
        
        const todayKey = `day${GameState.day}`;
        
        grid.innerHTML = Object.entries(ACTIVITIES).map(([actId, act]) => {
            const used = GameState.activitiesUsed[`${todayKey}_${actId}`];
            const count = GameState.activityCount[actId] || 0;
            
            return `
                <button class="activity-card ${used ? 'used' : ''}" 
                        data-activity="${actId}"
                        onclick="${used ? '' : `game.selectActivity('${actId}')`}">
                    <span class="activity-icon">${act.emoji}</span>
                    <span class="activity-name">${act.name}</span>
                    ${used ? '<span class="activity-hint">已完成</span>' : ''}
                </button>
            `;
        }).join('');
    },
    
    renderKnownChars() {
        const section = document.getElementById('chars-section');
        const row = document.getElementById('chars-row');
        if (!section || !row) return;
        
        const knownChars = Object.entries(GameState.characters)
            .filter(([_, char]) => char.known);
        
        if (knownChars.length === 0) {
            section.style.display = 'none';
            return;
        }
        
        section.style.display = 'block';
        row.innerHTML = knownChars.map(([charId, char]) => {
            const charData = CHARACTERS[charId];
            return `
                <div class="char-mini ${char.unlocked ? 'glow' : ''}" onclick="game.showCharDetail('${charId}')">
                    <div class="char-mini-icon">${charData.emoji}</div>
                    <div class="char-mini-name">${charData.name}</div>
                    <div class="char-mini-bar">
                        <div class="char-mini-fill" style="width: ${Math.min(char.affection, 100)}%; background: ${charData.color}"></div>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    renderQuickHearts() {
        const container = document.getElementById('quick-hearts');
        if (!container) return;
        
        const knownChars = Object.entries(GameState.characters)
            .filter(([_, char]) => char.known);
        
        container.innerHTML = knownChars.map(([charId, char]) => {
            const charData = CHARACTERS[charId];
            return `
                <div class="heart-mini">
                    <span class="heart-icon">${charData.emoji}</span>
                    <span>${char.affection}</span>
                </div>
            `;
        }).join('');
    },
    
    // ===== 活动选择 =====
    selectActivity(actId) {
        if (GameState.actionPoints <= 0) {
            this.showToast('今天的行动点已用完');
            return;
        }
        
        // 获取故事节点
        const storyNode = this.getStoryNode(actId);
        if (storyNode) {
            this.startDialogue(storyNode, actId);
        }
    },
    
    // 获取故事节点（整合 narrative_stories.js 数据）
    getStoryNode(actId) {
        // 使用外部 ACTIVITY_STORIES 数据
        if (typeof ACTIVITY_STORIES === 'undefined') {
            console.error('ACTIVITY_STORIES not loaded');
            return null;
        }
        
        const stories = ACTIVITY_STORIES[actId];
        if (!stories || stories.length === 0) {
            return null;
        }
        
        const count = GameState.activityCount[actId] || 0;
        const nodeIndex = Math.min(count, stories.length - 1);
        const node = stories[nodeIndex];
        
        // 处理随机遇见已认识角色
        if (node.charId === '_random_known') {
            const knownChars = Object.entries(GameState.characters)
                .filter(([_, c]) => c.known)
                .map(([id, _]) => id);
            
            if (knownChars.length > 0) {
                const randomChar = knownChars[Math.floor(Math.random() * knownChars.length)];
                return this.generateRandomEncounter(randomChar, actId);
            } else {
                // 没有认识的角色，返回第一个节点
                return stories[0];
            }
        }
        
        return node;
    },
    
    // 生成随机遇见剧情
    generateRandomEncounter(charId, actId) {
        const char = CHARACTERS[charId];
        const act = ACTIVITIES[actId];
        
        const encounters = {
            cafe: [
                { text: `你正在喝咖啡，抬头看见${char.name}走进来。她也看到了你，微微一笑。`, choices: [
                    { text: '「好巧，一起坐吗？」', affection: 5 },
                    { text: '「（点头示意）」', affection: 2 }
                ]},
                { text: `${char.name}端着咖啡经过你的桌子，停了下来。`, choices: [
                    { text: '「一个人？要不要一起？」', affection: 5 },
                    { text: '「（继续看书）」', affection: 1 }
                ]}
            ],
            park: [
                { text: `公园的长椅上，${char.name}正在休息。`, choices: [
                    { text: '「真巧，你也来散步？」', affection: 5 },
                    { text: '「（在她旁边坐下）」', affection: 3 }
                ]}
            ],
            gym: [
                { text: `${char.name}正在做拉伸，看到你后挥了挥手。`, choices: [
                    { text: '「一起练？」', affection: 5 },
                    { text: '「（点点头，各练各的）」', affection: 2 }
                ]}
            ],
            dinner: [
                { text: `餐厅里，${char.name}独自坐在角落。`, choices: [
                    { text: '「一个人？不介意的话一起？」', affection: 6 },
                    { text: '「（不打搅，自己找位置）」', affection: 1 }
                ]}
            ]
        };
        
        const defaultEncounter = {
            text: `你遇见了${char.name}。`,
            charId: charId,
            firstMeet: false,
            choices: [
                { text: '「好巧」', affection: 3 },
                { text: '「（点头示意）」', affection: 1 }
            ]
        };
        
        const actEncounters = encounters[actId];
        if (actEncounters) {
            const enc = actEncounters[Math.floor(Math.random() * actEncounters.length)];
            return { ...enc, charId, firstMeet: false };
        }
        
        return defaultEncounter;
    },
    
    // ===== 对话系统 =====
    startDialogue(storyNode, actId) {
        this.currentStoryNode = storyNode;
        this.currentActId = actId;
        GameState.tempAffectionChanges = {};
        
        // 显示对话框
        const overlay = document.getElementById('dialogue-overlay');
        overlay.classList.add('active');
        
        // 设置场景
        const act = ACTIVITIES[actId];
        const sceneImage = document.getElementById('scene-image');
        const sceneDesc = document.getElementById('scene-desc');
        
        // 尝试加载场景图，失败则使用渐变背景
        const scenePath = `assets/scenes/${act.scene}.png`;
        sceneImage.innerHTML = `<img src="${scenePath}" alt="${act.name}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(180deg, #1a0a2e 0%, #0d0d1a 100%)'">`;
        
        if (sceneDesc) {
            sceneDesc.textContent = act.desc;
        }
        
        // 显示故事文本
        this.showStoryText(storyNode);
    },
    
    showStoryText(node) {
        const charId = node.charId;
        const char = charId ? CHARACTERS[charId] : null;
        
        // 更新头像和名字
        const avatar = document.getElementById('speaker-avatar');
        const name = document.getElementById('speaker-name');
        
        if (char) {
            avatar.innerHTML = `<img src="${char.portrait}" alt="${char.name}" onerror="this.parentElement.textContent='${char.emoji}'">`;
            avatar.className = `speaker-avatar ${charId}`;
            name.textContent = char.name;
            name.style.color = char.color;
        } else {
            avatar.textContent = '🌸';
            avatar.className = 'speaker-avatar';
            name.textContent = '';
        }
        
        // 打字机效果显示文本
        this.typeText(node.text);
        
        // 显示选项
        this.showChoices(node.choices, charId);
    },
    
    typeText(text) {
        const element = document.getElementById('dialogue-text');
        const cursor = document.getElementById('typing-cursor');
        
        if (!element) return;
        
        // 清除之前的打字
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
        }
        
        this.isTyping = true;
        element.textContent = '';
        cursor.style.display = 'inline';
        
        let i = 0;
        const chars = text.split('');
        
        this.typingInterval = setInterval(() => {
            if (i < chars.length) {
                element.textContent += chars[i];
                i++;
            } else {
                clearInterval(this.typingInterval);
                this.isTyping = false;
                cursor.style.display = 'none';
            }
        }, 50); // 50ms per char
    },
    
    skipTyping() {
        if (this.isTyping && this.typingInterval) {
            clearInterval(this.typingInterval);
            this.isTyping = false;
            
            const element = document.getElementById('dialogue-text');
            const cursor = document.getElementById('typing-cursor');
            
            if (element && this.currentStoryNode) {
                element.textContent = this.currentStoryNode.text;
            }
            if (cursor) {
                cursor.style.display = 'none';
            }
        }
    },
    
    showChoices(choices, charId) {
        const container = document.getElementById('choices-area');
        if (!container || !choices) return;
        
        container.innerHTML = choices.map((choice, idx) => `
            <button class="choice-btn ${charId || ''}" onclick="game.makeChoice(${idx})" style="animation-delay: ${idx * 0.2}s">
                ${choice.text}
            </button>
        `).join('');
    },
    
    makeChoice(choiceIdx) {
        const node = this.currentStoryNode;
        const choice = node.choices[choiceIdx];
        
        if (!choice) return;
        
        // 处理首次相遇
        if (node.firstMeet && node.charId) {
            GameState.characters[node.charId].known = true;
            GameState.characters[node.charId].metDay = GameState.day;
        }
        
        // 记录好感度变化
        if (choice.affection && node.charId) {
            const charId = node.charId;
            GameState.characters[charId].affection += choice.affection;
            
            // 记录今日变化
            if (!GameState.tempAffectionChanges[charId]) {
                GameState.tempAffectionChanges[charId] = 0;
            }
            GameState.tempAffectionChanges[charId] += choice.affection;
            
            // 更新态度值
            this.updateAttitude(charId, choice.affection);
        }
        
        // 处理_nextMeet标记
        if (choice._nextMeet && node.charId) {
            // 立即推进到下一个节点
            GameState.activityCount[this.currentActId]++;
            const nextNode = this.getStoryNode(this.currentActId);
            if (nextNode && nextNode.charId) {
                GameState.characters[nextNode.charId].known = true;
            }
        }
        
        // 关闭对话框
        this.closeDialogue();
        
        // 消耗行动点
        GameState.actionPoints--;
        
        // 标记活动已完成
        const todayKey = `day${GameState.day}`;
        GameState.activitiesUsed[`${todayKey}_${this.currentActId}`] = true;
        
        // 增加活动计数
        GameState.activityCount[this.currentActId]++;
        
        // 更新UI
        this.updateGameUI();
        
        // 检查是否进入每日结算
        if (GameState.actionPoints <= 0) {
            this.showDailyEnd();
        }
    },
    
    // 更新态度值
    updateAttitude(charId, affectionChange) {
        const char = GameState.characters[charId];
        if (!char) return;
        
        // 根据好感度变化调整态度
        if (affectionChange > 0) {
            char.attitude = Math.min(100, char.attitude + affectionChange * 0.5);
            char.temperature = Math.min(100, char.temperature + affectionChange * 0.3);
        } else {
            char.attitude = Math.max(0, char.attitude + affectionChange * 0.5);
            char.temperature = Math.max(0, char.temperature + affectionChange * 0.5);
        }
        
        // 检查温度下降（关系冷却）
        if (char.temperature < 30 && char.affection > 20) {
            // 温度过低，好感度会缓慢下降
            char.affection = Math.max(0, char.affection - 2);
        }
    },
    
    closeDialogue() {
        const overlay = document.getElementById('dialogue-overlay');
        overlay.classList.remove('active');
        
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
            this.isTyping = false;
        }
    },
    
    skipDialogue() {
        this.closeDialogue();
    },
    
    // ===== 每日结算 =====
    sleep() {
        if (GameState.actionPoints > 0) {
            // 还有行动点，确认是否跳过
            if (!confirm('今天还有剩余行动点，确定要结束吗？')) {
                return;
            }
        }
        this.showDailyEnd();
    },
    
    // ===== 设置页面 =====
    openSettings() {
        const page = document.getElementById('settings-page');
        if (page) {
            page.classList.add('active');
            this.updateSettingsUI();
        }
    },
    
    closeSettings() {
        const page = document.getElementById('settings-page');
        if (page) {
            page.classList.remove('active');
        }
    },
    
    updateSettingsUI() {
        // 更新BGM开关
        const bgmToggle = document.getElementById('bgm-toggle');
        if (bgmToggle) {
            bgmToggle.classList.toggle('active', GameState.settings.bgmEnabled);
        }
        
        // 更新音效音量
        const sfxVolume = document.getElementById('sfx-volume');
        if (sfxVolume) {
            sfxVolume.value = GameState.settings.sfxVolume;
        }
        
        // 更新打字音效开关
        const typingToggle = document.getElementById('typing-toggle');
        if (typingToggle) {
            typingToggle.classList.toggle('active', GameState.settings.typingSound);
        }
    },
    
    toggleBGM() {
        GameState.settings.bgmEnabled = !GameState.settings.bgmEnabled;
        this.updateSettingsUI();
        GameState.save();
    },
    
    setSFXVolume(value) {
        GameState.settings.sfxVolume = parseInt(value);
        GameState.save();
    },
    
    toggleTypingSound() {
        GameState.settings.typingSound = !GameState.settings.typingSound;
        this.updateSettingsUI();
        GameState.save();
    },
    
    returnToMain() {
        this.closeSettings();
        GameState.init();
        this.showPage('landing-page');
    },
    
    // ===== 存档管理 =====
    openSavePage() {
        const page = document.getElementById('save-page');
        if (page) {
            page.classList.add('active');
            this.renderSaveSlots();
        }
    },
    
    closeSavePage() {
        const page = document.getElementById('save-page');
        if (page) {
            page.classList.remove('active');
        }
    },
    
    renderSaveSlots() {
        const container = document.getElementById('save-slots-container');
        if (!container) return;
        
        const saves = GameState.getAllSaves();
        
        container.innerHTML = [1, 2, 3].map(slotId => {
            const save = saves[slotId];
            if (save) {
                const date = new Date(save.timestamp);
                const dateStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
                const charName = save.selectedChar ? CHARACTERS[save.selectedChar]?.name : '未选择';
                return `
                    <div class="save-slot">
                        <div class="save-slot-header">
                            <span class="save-slot-title">存档 ${slotId}</span>
                            <span style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">${dateStr}</span>
                        </div>
                        <div class="save-slot-info">
                            <div>Day ${save.day} · ${charName}</div>
                        </div>
                        <div class="save-slot-actions">
                            <button class="slot-btn primary" onclick="game.loadFromSlot(${slotId})">读取</button>
                            <button class="slot-btn secondary" onclick="game.saveToSlot(${slotId})">覆盖</button>
                            <button class="slot-btn danger" onclick="game.deleteSaveSlot(${slotId})">删除</button>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="save-slot empty" onclick="game.saveToSlot(${slotId})">
                        <span style="color: rgba(255,255,255,0.5);">+ 创建新存档</span>
                    </div>
                `;
            }
        }).join('');
    },
    
    saveToSlot(slotId) {
        GameState.saveToSlot(slotId);
        this.renderSaveSlots();
        this.showToast('存档已保存');
    },
    
    loadFromSlot(slotId) {
        if (GameState.loadFromSlot(slotId)) {
            this.closeSavePage();
            this.closeSettings();
            this.showPage('game-main-page');
            this.showToast('存档已读取');
        }
    },
    
    deleteSaveSlot(slotId) {
        if (confirm('确定要删除这个存档吗？')) {
            GameState.deleteSlot(slotId);
            this.renderSaveSlots();
            this.showToast('存档已删除');
        }
    },
    
    autoSave() {
        // 快速存档到第一个空槽位或覆盖第一个槽位
        GameState.saveToSlot(1);
        this.renderSaveSlots();
        this.showToast('快速存档完成');
    },
    
    // ===== 引导弹窗 =====
    showTutorial() {
        const modal = document.getElementById('tutorial-modal');
        if (modal) {
            modal.classList.add('active');
        }
    },
    
    closeTutorial() {
        const modal = document.getElementById('tutorial-modal');
        if (modal) {
            modal.classList.remove('active');
        }
        // 标记已看过引导
        localStorage.setItem('bloom_tutorial_seen', 'true');
    },
    
    // ===== 退出确认 =====
    showExitConfirm(charName, callback) {
        this.exitConfirmCallback = callback;
        const modal = document.getElementById('exit-confirm-modal');
        const text = document.getElementById('exit-confirm-text');
        if (modal && text) {
            text.textContent = charName ? `${charName}可能会失望……` : '对方可能会失望……';
            modal.classList.add('active');
        }
    },
    
    cancelExit() {
        const modal = document.getElementById('exit-confirm-modal');
        if (modal) {
            modal.classList.remove('active');
        }
        this.exitConfirmCallback = null;
    },
    
    confirmExit() {
        const modal = document.getElementById('exit-confirm-modal');
        if (modal) {
            modal.classList.remove('active');
        }
        
        // 应用退出惩罚
        this.applyExitPenalty();
        
        // 执行回调
        if (this.exitConfirmCallback) {
            this.exitConfirmCallback();
        }
        
        this.exitConfirmCallback = null;
    },
    
    showDailyEnd() {
        this.showPage('daily-end-page');
        
        document.getElementById('end-day').textContent = GameState.day;
        
        // 显示好感度变化
        const changeList = document.getElementById('change-list');
        const changes = Object.entries(GameState.tempAffectionChanges);
        
        if (changes.length === 0) {
            changeList.innerHTML = '<p style="color: rgba(255,255,255,0.5)">今天没有遇到任何人</p>';
        } else {
            changeList.innerHTML = changes.map(([charId, change]) => {
                const char = CHARACTERS[charId];
                const totalAffection = GameState.characters[charId].affection;
                return `
                    <div class="change-item">
                        <span class="char-icon">${char.emoji}</span>
                        <span class="char-name">${char.name}</span>
                        <span class="change-value ${change >= 0 ? 'positive' : 'negative'}">${change >= 0 ? '+' : ''}${change}</span>
                    </div>
                `;
            }).join('');
        }
        
        // 检查解锁提示
        const unlockHint = document.getElementById('unlock-hint');
        const unlockText = document.getElementById('unlock-text');
        
        const newUnlocks = Object.entries(GameState.characters)
            .filter(([_, c]) => c.known && c.metDay === GameState.day);
        
        if (newUnlocks.length > 0) {
            unlockHint.style.display = 'block';
            const names = newUnlocks.map(([id, _]) => CHARACTERS[id].name).join('、');
            unlockText.textContent = `认识了新角色：${names}`;
        } else {
            unlockHint.style.display = 'none';
        }
    },
    
    nextDay() {
        GameState.day++;
        GameState.actionPoints = 3;
        GameState.energyPoints = 3;  // 每天恢复精力点
        GameState.tempAffectionChanges = {};
        
        // 温度自然下降（关系需要维护）
        Object.values(GameState.characters).forEach(char => {
            if (char.known) {
                char.temperature = Math.max(0, char.temperature - 5);
            }
        });
        
        // 检查结局
        if (GameState.day > 60) {
            this.showEnding();
            return;
        }
        
        this.showPage('game-main-page');
    },
    
    saveGame() {
        GameState.save();
        this.showToast('游戏已保存');
    },
    
    // ===== 结局 =====
    showEnding() {
        // 计算结局
        const mainChar = GameState.selectedChar;
        const charData = GameState.characters[mainChar];
        
        let ending = '';
        if (charData.affection >= 80) {
            ending = '完美结局：你们在一起了';
        } else if (charData.affection >= 50) {
            ending = '好结局：你们成为了好朋友';
        } else {
            ending = '普通结局：你们只是过客';
        }
        
        alert(`游戏结束！\n\n${ending}\n\n好感度：${charData.affection}`);
        
        // 返回首页
        GameState.init();
        this.showPage('landing-page');
    },
    
    // ===== 工具函数 =====
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    },
    
    showCharDetail(charId) {
        const char = CHARACTERS[charId];
        const charState = GameState.characters[charId];
        
        alert(`${char.name} ${char.mbti}\n好感度：${charState.affection}\n态度：${charState.attitude}\n温度：${charState.temperature}`);
    },
    
    toggleMusic() {
        this.showToast('音乐功能开发中...');
    },
    
    // ===== 心动特效 =====
    showHeartEffect(type) {
        if (typeof HeartEffects !== 'undefined') {
            switch(type) {
                case 'petals':
                    HeartEffects.showPetals();
                    break;
                case 'sparkle':
                    const target = document.getElementById('speaker-avatar');
                    if (target) HeartEffects.showSparkles(target);
                    break;
                case 'heartbeat':
                    HeartEffects.showHeartbeat();
                    break;
                case 'shake':
                    HeartEffects.shakeScreen();
                    break;
                case 'flash':
                    HeartEffects.flashScreen();
                    break;
            }
        }
    }
};

// 初始化游戏
const game = GameEngine;
document.addEventListener('DOMContentLoaded', () => game.init());
