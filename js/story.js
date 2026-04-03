// 剧情数据

const STORIES = {
    // ========== 开场 ==========
    'start': {
        id: 'start',
        chapter: 1,
        title: '新的开始',
        bg: 'linear-gradient(135deg, #74b9ff 0%, #a29bfe 100%)',
        speaker: '',
        text: '这是一个全新的开始。\n\n你拖着行李箱，站在陌生的城市街头，深吸了一口气。\n\n为了追求更好的职业发展，你决定离开熟悉的地方，来到这座充满机遇的城市。\n\n新的环境，新的人，新的故事……即将展开。',
        sprite: null,
        choices: [
            { text: '鼓起勇气，向前走去', next: 'apartment_intro' }
        ]
    },

    // ========== 公寓场景 ==========
    'apartment_intro': {
        id: 'apartment_intro',
        chapter: 1,
        title: '新居',
        bg: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
        speaker: '',
        text: '你来到了租住的公寓楼下。这是一栋有些年头的建筑，但外墙爬满了绿植，看起来很有生活气息。\n\n房东说这栋楼里住着各行各业的人，都很友善。',
        sprite: null,
        choices: [
            { text: '进入大楼', next: 'meet_wenya' }
        ]
    },

    // ========== 遇见温雅 ==========
    'meet_wenya': {
        id: 'meet_wenya',
        chapter: 1,
        title: '邻居姐姐',
        bg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
        speaker: '？？？',
        text: '「哎呀，你是新搬来的邻居吗？」\n\n一个温柔的声音从身后传来。你转身，看到一位长发披肩的女子，手里拿着画板和颜料。',
        sprite: 'wenya',
        choices: [
            { text: '「是的，请多关照！」微笑着打招呼', next: 'wenya_intro_friendly', affection: { wenya: 5 } },
            { text: '「嗯。」点点头，有些拘谨', next: 'wenya_intro_shy', affection: { wenya: 2 } },
            { text: '「对，刚搬来。你是？」好奇地问', next: 'wenya_intro_curious', affection: { wenya: 3 } }
        ]
    },

    'wenya_intro_friendly': {
        id: 'wenya_intro_friendly',
        chapter: 1,
        bg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
        speaker: '温雅',
        text: '「我叫温雅，住在你对门。」她温柔地笑着，「是附近中学的美术老师。」\n\n「欢迎搬来这里！有什么需要帮忙的，随时敲我的门哦。」',
        sprite: 'wenya',
        choices: [
            { text: '「太好了，谢谢温雅姐！」', next: 'explore_city', affection: { wenya: 3 } }
        ]
    },

    'wenya_intro_shy': {
        id: 'wenya_intro_shy',
        chapter: 1,
        bg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
        speaker: '温雅',
        text: '「我叫温雅，住在你对门。」她温和地笑着，似乎看出了你的拘谨。\n\n「不用紧张，这栋楼的大家都很好相处的。我是中学美术老师，平时都在家画画。」',
        sprite: 'wenya',
        choices: [
            { text: '「谢谢……我会记住的。」', next: 'explore_city', affection: { wenya: 2 } }
        ]
    },

    'wenya_intro_curious': {
        id: 'wenya_intro_curious',
        chapter: 1,
        bg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
        speaker: '温雅',
        text: '「我叫温雅，住在你对门。」她的笑容很温暖，「是附近中学的美术老师。」\n\n「看你对这里很好奇的样子，要我带你熟悉一下周边环境吗？」',
        sprite: 'wenya',
        choices: [
            { text: '「真的可以吗？那太感谢了！」', next: 'explore_city', affection: { wenya: 5 } }
        ]
    },

    // ========== 探索城市 ==========
    'explore_city': {
        id: 'explore_city',
        chapter: 1,
        title: '城市初探',
        bg: 'linear-gradient(135deg, #55efc4 0%, #81ecec 100%)',
        speaker: '',
        text: '安顿好之后，你决定出去探索一下这座新城市。\n\n阳光明媚，街道两旁是各式各样的小店。你漫无目的地走着，期待着会有什么有趣的相遇。',
        sprite: null,
        choices: [
            { text: '去咖啡馆坐坐', next: 'meet_luxiao' },
            { text: '去公园散步', next: 'meet_xiayang' },
            { text: '随便逛逛', next: 'meet_sujingyi' }
        ]
    },

    // ========== 遇见陆潇（咖啡馆线）==========
    'meet_luxiao': {
        id: 'meet_luxiao',
        chapter: 1,
        title: '咖啡馆的邂逅',
        bg: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
        speaker: '',
        text: '你走进一家装修精致的咖啡馆，空气中弥漫着咖啡和烘焙的香气。\n\n吧台后站着一位短发的女子，正在专注地制作咖啡。她的动作优雅流畅，像是在进行一场表演。',
        sprite: 'luxiao',
        choices: [
            { text: '「请给我一杯拿铁。」', next: 'luxiao_intro_normal', affection: { luxiao: 2 } },
            { text: '「这里的咖啡很香，是你做的吗？」', next: 'luxiao_intro_curious', affection: { luxiao: 5 } },
            { text: '安静地点单，观察周围', next: 'luxiao_intro_quiet', affection: { luxiao: 3 } }
        ]
    },

    'luxiao_intro_normal': {
        id: 'luxiao_intro_normal',
        chapter: 1,
        bg: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
        speaker: '陆潇',
        text: '「好的，请稍等。」\n\n她的声音低沉而有磁性。很快，一杯拉花精美的拿铁放在你面前。\n\n「我是陆潇，这家店的主理人。欢迎常来。」她淡淡地笑了笑。',
        sprite: 'luxiao',
        choices: [
            { text: '「谢谢，咖啡很好喝。」', next: 'chapter1_end', affection: { luxiao: 2 } }
        ]
    },

    'luxiao_intro_curious': {
        id: 'luxiao_intro_curious',
        chapter: 1,
        bg: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
        speaker: '陆潇',
        text: '她的眼睛亮了一下：「是的，这家店是我开的。」\n\n「之前在欧洲学过法餐和咖啡，回国后就想做一家自己理想中的咖啡馆。」\n\n她递给你一杯咖啡：「这杯请你尝尝，给我点反馈？」',
        sprite: 'luxiao',
        choices: [
            { text: '「太荣幸了！我会认真品尝的。」', next: 'chapter1_end', affection: { luxiao: 5 } }
        ]
    },

    'luxiao_intro_quiet': {
        id: 'luxiao_intro_quiet',
        chapter: 1,
        bg: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
        speaker: '陆潇',
        text: '你安静地等着，她似乎注意到了你的观察。\n\n「喜欢这里的氛围吗？」她一边制作咖啡一边问，声音温和。\n\n「我是陆潇，这家店的主理人。看你的样子，应该是新搬来这附近的吧？」',
        sprite: 'luxiao',
        choices: [
            { text: '「嗯，刚搬来。这里很舒服。」', next: 'chapter1_end', affection: { luxiao: 3 } }
        ]
    },

    // ========== 遇见夏阳（公园线）==========
    'meet_xiayang': {
        id: 'meet_xiayang',
        chapter: 1,
        title: '公园的偶遇',
        bg: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
        speaker: '',
        text: '公园里，一个穿着运动装的女生正在跑步。她看到你，停下脚步，露出灿烂的笑容。',
        sprite: 'xiayang',
        choices: [
            { text: '「你好！」挥手打招呼', next: 'xiayang_intro_friendly', affection: { xiayang: 5 } },
            { text: '微笑点头，继续走', next: 'xiayang_intro_polite', affection: { xiayang: 2 } },
            { text: '「你也经常来这里运动吗？」', next: 'xiayang_intro_sport', affection: { xiayang: 4 } }
        ]
    },

    'xiayang_intro_friendly': {
        id: 'xiayang_intro_friendly',
        chapter: 1,
        bg: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
        speaker: '夏阳',
        text: '「你好呀！我是夏阳，在清华读研二。」她擦擦汗，「你是新面孔诶，刚搬来这附近吗？」\n\n她的笑容像阳光一样灿烂，让人忍不住也想笑起来。',
        sprite: 'xiayang',
        choices: [
            { text: '「对，刚搬来。请多关照！」', next: 'chapter1_end', affection: { xiayang: 3 } }
        ]
    },

    'xiayang_intro_polite': {
        id: 'xiayang_intro_polite',
        chapter: 1,
        bg: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
        speaker: '夏阳',
        text: '她主动跑过来：「你好！我是夏阳，经常在这个公园跑步。」\n\n「你是新搬来的吧？这附近我熟，有什么想知道的可以问我！」',
        sprite: 'xiayang',
        choices: [
            { text: '「谢谢，有需要一定问你。」', next: 'chapter1_end', affection: { xiayang: 2 } }
        ]
    },

    'xiayang_intro_sport': {
        id: 'xiayang_intro_sport',
        chapter: 1,
        bg: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
        speaker: '夏阳',
        text: '「对啊！我每天都要跑几圈。」她眼睛一亮，「你也喜欢运动吗？」\n\n「我是夏阳，在清华读研。学累了就来跑步，特别解压！」',
        sprite: 'xiayang',
        choices: [
            { text: '「我也喜欢运动，有机会一起？」', next: 'chapter1_end', affection: { xiayang: 5 } },
            { text: '「我运动细胞不太好……」', next: 'chapter1_end', affection: { xiayang: 1 } }
        ]
    },

    // ========== 遇见苏静怡（医院线）==========
    'meet_sujingyi': {
        id: 'meet_sujingyi',
        chapter: 1,
        title: '意外的相遇',
        bg: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
        speaker: '',
        text: '走着走着，你不小心撞到了一个人。文件散落一地。\n\n「抱歉抱歉！」你连忙蹲下帮忙捡。',
        sprite: 'sujingyi',
        choices: [
            { text: '「真的对不起，我没注意看路。」', next: 'sujingyi_intro_apologetic', affection: { sujingyi: 5 } },
            { text: '「你没事吧？有没有受伤？」', next: 'sujingyi_intro_concerned', affection: { sujingyi: 4 } },
            { text: '默默帮忙捡文件', next: 'sujingyi_intro_quiet', affection: { sujingyi: 3 } }
        ]
    },

    'sujingyi_intro_apologetic': {
        id: 'sujingyi_intro_apologetic',
        chapter: 1,
        bg: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
        speaker: '苏静怡',
        text: '「没关系，是我走得太急了。」她的声音温柔而有礼貌。\n\n她接过文件：「我是苏静怡，在市医院工作。刚下班，想着买点东西回家。」\n\n「你没事吧？刚才撞得挺重的。」她关切地看着你。',
        sprite: 'sujingyi',
        choices: [
            { text: '「我没事，谢谢你关心。」', next: 'chapter1_end', affection: { sujingyi: 3 } }
        ]
    },

    'sujingyi_intro_concerned': {
        id: 'sujingyi_intro_concerned',
        chapter: 1,
        bg: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
        speaker: '苏静怡',
        text: '她愣了一下，随即露出温和的笑容：「我没事，倒是你，没受伤吧？」\n\n「我是医生，让我看看。」她仔细检查了一下你的手，「还好，没有擦伤。」\n\n「我叫苏静怡，在市医院工作。」',
        sprite: 'sujingyi',
        choices: [
            { text: '「你是医生啊，好厉害！」', next: 'chapter1_end', affection: { sujingyi: 4 } }
        ]
    },

    'sujingyi_intro_quiet': {
        id: 'sujingyi_intro_quiet',
        chapter: 1,
        bg: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
        speaker: '苏静怡',
        text: '你们一起把文件捡起来。她整理好后，温和地说：「谢谢你的帮忙。」\n\n「我是苏静怡，在市医院工作。刚才在想事情，没注意看路。」\n\n「你是这附近的新住户吗？之前没见过你。」',
        sprite: 'sujingyi',
        choices: [
            { text: '「嗯，刚搬来。请多关照。」', next: 'chapter1_end', affection: { sujingyi: 2 } }
        ]
    },

    // ========== 第一章结束 ==========
    'chapter1_end': {
        id: 'chapter1_end',
        chapter: 1,
        title: '第一章 完',
        bg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
        speaker: '',
        text: '第一天就这样过去了。\n\n你遇到了几位有趣的邻居和朋友。这座城市，似乎没有想象中那么陌生。\n\n新的故事，才刚刚开始……',
        sprite: null,
        choices: [
            { text: '【进入第二章】', next: 'chapter2_start' }
        ]
    },

    // ========== 第二章开始（待扩展）==========
    'chapter2_start': {
        id: 'chapter2_start',
        chapter: 2,
        title: '第二章 加深了解',
        bg: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
        speaker: '',
        text: '【第二章 开发中……】\n\n感谢试玩！目前剧情正在持续创作中。\n\n你可以：\n- 读取之前的存档继续探索\n- 重新开始，体验不同的选择\n- 期待后续更新！',
        sprite: null,
        choices: [
            { text: '【返回标题】', next: 'title' }
        ]
    },

    // 返回标题
    'title': {
        id: 'title',
        chapter: 0,
        title: '',
        bg: '',
        speaker: '',
        text: '',
        sprite: null,
        choices: []
    }
};

// 结局数据（待实现）
const ENDINGS = {
    // 林婉清线
    'linwanqing_he': {
        title: '【林婉清】Happy Ending - 携手同行',
        text: '在经历了种种波折后，你们终于走到了一起。她依然是那个强势的总裁，但在你面前，她会卸下所有防备，展现最柔软的一面。'
    },
    'linwanqing_be': {
        title: '【林婉清】Bad Ending - 错过的缘分',
        text: '或许时机不对，或许彼此还不够成熟。你们最终擦肩而过，但那段时光，依然值得铭记。'
    },
    // 其他角色结局类似结构……
};

// 获取剧情
function getStory(storyId) {
    return STORIES[storyId] || null;
}

// 检查剧情是否存在
function hasStory(storyId) {
    return STORIES.hasOwnProperty(storyId);
}
