// MBTI 测试模块

const MBTI_QUESTIONS = [
    {
        text: "在社交聚会上，你通常会？",
        options: [
            { text: "主动认识很多人，享受热闹", type: 'E' },
            { text: "和熟悉的人聊天，或在一旁观察", type: 'I' }
        ]
    },
    {
        text: "做决定时，你更倾向于？",
        options: [
            { text: "相信直觉和灵感", type: 'N' },
            { text: "依据事实和经验", type: 'S' }
        ]
    },
    {
        text: "面对问题时，你习惯？",
        options: [
            { text: "先分析逻辑，再下结论", type: 'T' },
            { text: "先考虑感受，再决定", type: 'F' }
        ]
    },
    {
        text: "你的生活方式更接近？",
        options: [
            { text: "有计划有条理，喜欢确定性", type: 'J' },
            { text: "灵活随性，保持开放性", type: 'P' }
        ]
    },
    {
        text: "周末你更愿意？",
        options: [
            { text: "和朋友出去玩或参加活动", type: 'E' },
            { text: "宅在家里做自己喜欢的事", type: 'I' }
        ]
    },
    {
        text: "学习新东西时，你更关注？",
        options: [
            { text: "整体概念和可能性", type: 'N' },
            { text: "具体细节和实际应用", type: 'S' }
        ]
    },
    {
        text: "朋友向你倾诉烦恼，你会？",
        options: [
            { text: "帮 ta 分析问题，给出建议", type: 'T' },
            { text: "先安慰 ta，理解 ta 的感受", type: 'F' }
        ]
    },
    {
        text: "旅行前你会？",
        options: [
            { text: "做好详细攻略和计划", type: 'J' },
            { text: "只定大致方向，随遇而安", type: 'P' }
        ]
    },
    {
        text: "工作中你更喜欢？",
        options: [
            { text: "团队合作，集思广益", type: 'E' },
            { text: "独立工作，深度专注", type: 'I' }
        ]
    },
    {
        text: "你更欣赏哪种人？",
        options: [
            { text: "有创意、想法独特的人", type: 'N' },
            { text: "踏实可靠、执行力强的人", type: 'S' }
        ]
    }
];

const MBTI_TYPES = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

class MBTITest {
    constructor() {
        this.currentQuestion = 0;
        this.scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
        this.onComplete = null;
    }

    start(onComplete) {
        this.currentQuestion = 0;
        this.scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
        this.onComplete = onComplete;
        this.showQuestion();
    }

    showQuestion() {
        const q = MBTI_QUESTIONS[this.currentQuestion];
        const questionEl = document.getElementById('test-question');
        const optionsEl = document.getElementById('test-options');
        const progressEl = document.getElementById('current-q');

        progressEl.textContent = this.currentQuestion + 1;
        questionEl.textContent = q.text;
        optionsEl.innerHTML = '';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.text;
            btn.onclick = () => this.answer(opt.type);
            optionsEl.appendChild(btn);
        });
    }

    answer(type) {
        this.scores[type]++;
        this.currentQuestion++;

        if (this.currentQuestion >= MBTI_QUESTIONS.length) {
            this.calculateResult();
        } else {
            this.showQuestion();
        }
    }

    calculateResult() {
        // 计算每个维度的结果
        const result = [
            this.scores.E >= this.scores.I ? 'E' : 'I',
            this.scores.N >= this.scores.S ? 'N' : 'S',
            this.scores.T >= this.scores.F ? 'T' : 'F',
            this.scores.J >= this.scores.P ? 'J' : 'P'
        ].join('');

        if (this.onComplete) {
            this.onComplete(result);
        }

        return result;
    }

    // 直接设置 MBTI
    setDirect(type) {
        if (MBTI_TYPES.includes(type)) {
            if (this.onComplete) {
                this.onComplete(type);
            }
            return type;
        }
        return null;
    }
}

// MBTI 类型描述
const MBTI_DESCRIPTIONS = {
    'INTJ': '建筑师 - 富有想象力和战略性的思想家',
    'INTP': '逻辑学家 - 具有创造力的发明家',
    'ENTJ': '指挥官 - 大胆、富有想象力的强大领导者',
    'ENTP': '辩论家 - 聪明好奇的思想者',
    'INFJ': '提倡者 - 安静而神秘的理想主义者',
    'INFP': '调停者 - 诗意、善良的利他主义者',
    'ENFJ': '主人公 - 富有魅力、鼓舞人心的领导者',
    'ENFP': '竞选者 - 热情、有创造力的社交者',
    'ISTJ': '物流师 - 实用、注重事实的可靠者',
    'ISFJ': '守卫者 - 非常专注而温暖的守护者',
    'ESTJ': '总经理 - 出色的管理者',
    'ESFJ': '执政官 - 极有同情心、受欢迎的人',
    'ISTP': '鉴赏家 - 大胆而实际的实验家',
    'ISFP': '探险家 - 灵活有魅力的艺术家',
    'ESTP': '企业家 - 聪明、精力充沛的人',
    'ESFP': '表演者 - 自发的、充满活力的表演者'
};

function getMBTIDescription(type) {
    return MBTI_DESCRIPTIONS[type] || '';
}
