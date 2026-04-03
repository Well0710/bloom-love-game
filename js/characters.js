// 角色数据定义

const CHARACTERS = {
    // 玩家角色（会在创建时填充）
    player: {
        name: '',
        age: 0,
        job: '',
        mbti: ''
    },

    // 五位可攻略角色
    linwanqing: {
        id: 'linwanqing',
        name: '林婉清',
        age: 32,
        height: 178,
        mbti: 'ENTJ',
        job: '林氏集团总裁',
        description: '多金长发御姐，斯文败类气质',
        keywords: ['强势', '掌控欲', '外冷内热'],
        color: '#8e44ad',
        affection: 0,
        maxAffection: 100,
        sprite: 'assets/characters/linwanqing.png'
    },

    xiayang: {
        id: 'xiayang',
        name: '夏阳',
        age: 24,
        height: 175,
        mbti: 'ENTP',
        job: '清华大学研二学生',
        description: '阳光爱运动的校园学霸妹',
        keywords: ['活泼', '聪明', '直球'],
        color: '#e67e22',
        affection: 0,
        maxAffection: 100,
        sprite: 'assets/characters/xiayang.png'
    },

    sujingyi: {
        id: 'sujingyi',
        name: '苏静怡',
        age: 28,
        height: 168,
        mbti: 'ISTJ',
        job: '医院主治医师',
        description: '哈佛医学博士，气质美女医生',
        keywords: ['温柔', '专业', '慢热'],
        color: '#3498db',
        affection: 0,
        maxAffection: 100,
        sprite: 'assets/characters/sujingyi.png'
    },

    wenya: {
        id: 'wenya',
        name: '温雅',
        age: 26,
        height: 172,
        mbti: 'INFP',
        job: '中学美术老师',
        description: '温柔长卷发邻居姐姐',
        keywords: ['文艺', '敏感', '治愈'],
        color: '#fd79a8',
        affection: 0,
        maxAffection: 100,
        sprite: 'assets/characters/wenya.png'
    },

    luxiao: {
        id: 'luxiao',
        name: '陆潇',
        age: 29,
        height: 177,
        mbti: 'ENFJ',
        job: '法餐主理人',
        description: '短发盐系，雌雄莫辨',
        keywords: ['成熟', '体贴', '神秘'],
        color: '#2d3436',
        affection: 0,
        maxAffection: 100,
        sprite: 'assets/characters/luxiao.png'
    }
};

// MBTI 兼容性（简化版，用于影响对话选项）
const MBTI_COMPATIBILITY = {
    'ENTJ': { best: ['INTP', 'ENFP'], worst: ['ESFJ', 'ISFP'] },
    'ENTP': { best: ['INFJ', 'INTJ'], worst: ['ESFJ', 'ISTJ'] },
    'ISTJ': { best: ['ESFP', 'ESTP'], worst: ['ENTP', 'ENFP'] },
    'INFP': { best: ['ENFJ', 'ENTJ'], worst: ['ESTJ', 'ISTJ'] },
    'ENFJ': { best: ['INFP', 'ISFP'], worst: ['ISTP', 'ESTP'] }
};

// 初始化角色好感度
function resetCharacterAffection() {
    Object.keys(CHARACTERS).forEach(key => {
        if (key !== 'player') {
            CHARACTERS[key].affection = 0;
        }
    });
}

// 获取角色对象
function getCharacter(id) {
    return CHARACTERS[id];
}

// 获取所有可攻略角色
function getAllCharacters() {
    return Object.keys(CHARACTERS).filter(key => key !== 'player').map(key => CHARACTERS[key]);
}

// 修改好感度
function changeAffection(characterId, amount) {
    if (CHARACTERS[characterId]) {
        CHARACTERS[characterId].affection += amount;
        // 限制在 0-100 之间
        CHARACTERS[characterId].affection = Math.max(0, Math.min(100, CHARACTERS[characterId].affection));
        return CHARACTERS[characterId].affection;
    }
    return 0;
}

// 获取角色好感度
function getAffection(characterId) {
    return CHARACTERS[characterId] ? CHARACTERS[characterId].affection : 0;
}

// 检查好感度等级
function getAffectionLevel(affection) {
    if (affection >= 80) return 'love';      // 恋人
    if (affection >= 60) return 'like';      // 喜欢
    if (affection >= 40) return 'friend';    // 朋友
    if (affection >= 20) return 'acquaint';  // 认识
    return 'stranger';                        // 陌生人
}
