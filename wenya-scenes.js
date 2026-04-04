// ===== 温雅线完整场景数据（32 场景）=====

const WENYA_SCENES = [
    // === 第一阶段：解锁（场景 1-5）===
    {
        id: 1,
        trigger: 'unlock_wenya',
        text: '晚上 9 点，你点了外卖。\n\n门铃响了，你打开门。\n\n温雅：「你好，你的外卖……」\n\n她愣了一下。\n\n温雅：「你是……新搬来的邻居？」',
        choices: [
            { text: '「嗯。」', affection: 3, energy: 0, next: 2 },
            { text: '「你记得我？」', affection: 5, energy: 0, next: 2 },
            { text: '「这么晚还送外卖？」', affection: 8, energy: 0, next: 2 }
        ]
    },
    {
        id: 2,
        trigger: 'day_3',
        text: '三天后，你收到消息。\n\n温雅：「你好，我是温雅，住你对门。」\n「这周末有空吗？有个艺术展览，要不要一起看？」',
        choices: [
            { text: '「好啊，几点？」', affection: 10, energy: 0, next: 3 },
            { text: '「这周有事，下次吧。」', affection: 3, energy: 0, next: null },
            { text: '「不了，谢谢。」', affection: -5, energy: 0, next: null }
        ]
    },
    {
        id: 3,
        trigger: 'date_accept',
        text: '周六下午 2 点，美术馆门口。\n\n温雅：「你来了！」\n（她穿了条淡粉色的裙子，长发披肩）\n「我还怕你不来……」',
        choices: [
            { text: '「走吧，进去。」', affection: 5, energy: 20, next: 4 },
            { text: '「你今天很漂亮。」', affection: 15, energy: 20, next: 4 },
            { text: '「等很久了吗？」', affection: 10, energy: 20, next: 4 }
        ]
    },
    {
        id: 4,
        trigger: 'scene_4',
        text: '你们站在一幅画前。\n\n温雅：「这幅画……让我想到了你。」',
        choices: [
            { text: '「为什么？」', affection: 8, energy: 0, next: 5 },
            { text: '「我也想到了你。」', affection: 15, energy: 0, next: 5 },
            { text: '「（安静看画）」', affection: 10, energy: 0, next: 5 }
        ]
    },
    {
        id: 5,
        trigger: 'scene_5',
        text: '休息区，你们买了咖啡。\n\n温雅：「其实……我以前想当画家的。」',
        choices: [
            { text: '「为什么没当？」', affection: 8, energy: 0, next: 6 },
            { text: '「现在也可以。」', affection: 15, energy: 0, next: 6 },
            { text: '「老师挺好的。」', affection: 10, energy: 0, next: 6 }
        ]
    },
    
    // === 第二阶段：深入了解（场景 6-15）===
    {
        id: 6,
        trigger: 'scene_6',
        text: '温雅：「我最近……画了一幅画。」\n「但是不太满意……」\n「你能来看看吗？」',
        choices: [
            { text: '「好，现在就去。」', affection: 10, energy: 20, next: 7 },
            { text: '「你一直都很棒。」', affection: 15, energy: 0, next: 7 },
            { text: '「我不懂画，帮不了你。」', affection: -10, energy: 0, next: null }
        ]
    },
    {
        id: 7,
        trigger: 'scene_7',
        text: '你来到温雅家。\n\n她拿出一幅画。\n\n温雅：「就是这幅……」\n（画的是你，在美术馆的样子）\n「我……画得不好吗？」',
        choices: [
            { text: '「很好，很像。」', affection: 10, energy: 0, next: 8 },
            { text: '「你画了我？」', affection: 15, energy: 0, next: 8 },
            { text: '「我不懂画，但我觉得很好。」', affection: 15, energy: 0, next: 8 }
        ]
    },
    {
        id: 8,
        trigger: 'scene_8',
        text: '温雅：「其实……我一直想办个人展。」\n「但是我不敢……」\n「我怕没人来看……」',
        choices: [
            { text: '「我帮你。」', affection: 20, energy: 30, next: 9 },
            { text: '「你可以的。」', affection: 15, energy: 0, next: 9 },
            { text: '「办展很贵的。」', affection: -15, energy: 0, next: null }
        ]
    },
    {
        id: 9,
        trigger: 'scene_9',
        text: '你开始帮温雅筹备画展。\n\n联系画廊、设计海报、邀请嘉宾……\n\n温雅：「谢谢你……没有你我做不到。」',
        choices: [
            { text: '「应该的。」', affection: 10, energy: 20, next: 10 },
            { text: '「你很有才华。」', affection: 15, energy: 20, next: 10 },
            { text: '「别客气。」', affection: 5, energy: 20, next: 10 }
        ]
    },
    {
        id: 10,
        trigger: 'scene_10',
        text: '画展前一天晚上。\n\n温雅突然给你打电话。\n\n温雅：「我……我好紧张。」\n「万一明天没人来怎么办……」',
        choices: [
            { text: '「我会来的。」', affection: 10, energy: 5, next: 11 },
            { text: '「别担心，可以的。」', affection: 15, energy: 5, next: 11 },
            { text: '「早点休息。」', affection: 5, energy: 5, next: 11 }
        ]
    },
    
    // === 第三阶段：感情升温（场景 11-20）===
    {
        id: 11,
        trigger: 'scene_11',
        text: '画展当天。\n\n来了很多人，画也卖出去不少。\n\n温雅：「（眼含泪光）谢谢你……」',
        choices: [
            { text: '「是你自己有才华。」', affection: 10, energy: 0, next: 12 },
            { text: '「我一直相信你。」', affection: 15, energy: 0, next: 12 },
            { text: '「请我吃饭吧。」', affection: 10, energy: 0, next: 12 }
        ]
    },
    {
        id: 12,
        trigger: 'scene_12',
        text: '庆功宴上。\n\n温雅喝了一点酒，脸红红的。\n\n温雅：「你知道吗……」\n「你对我来说，很特别。」',
        choices: [
            { text: '「你也是。」', affection: 15, energy: 0, next: 13 },
            { text: '「（微笑）」', affection: 10, energy: 0, next: 13 },
            { text: '「少喝点。」', affection: 5, energy: 0, next: 13 }
        ]
    },
    {
        id: 13,
        trigger: 'scene_13',
        text: '之后的一周。\n\n温雅每天都给你发消息，分享她的画、她的生活。\n\n你开始期待她的消息。',
        choices: [
            { text: '主动约她吃饭', affection: 10, energy: 20, next: 14 },
            { text: '继续日常聊天', affection: 5, energy: 2, next: 14 },
            { text: '稍微冷淡一点', affection: -5, energy: 0, next: 14 }
        ]
    },
    {
        id: 14,
        trigger: 'scene_14',
        text: '你们一起吃饭。\n\n温雅：「我爸妈……想见见你。」\n「你……愿意吗？」',
        choices: [
            { text: '「好啊。」', affection: 15, energy: 30, next: 15 },
            { text: '「太快了吧。」', affection: -10, energy: 0, next: 15 },
            { text: '「我还没准备好。」', affection: -5, energy: 0, next: 15 }
        ]
    },
    {
        id: 15,
        trigger: 'scene_15',
        text: '你来到温雅家。\n\n温雅妈妈很热情，温雅爸爸比较严肃。\n\n温雅爸爸：「你是做什么工作的？」',
        choices: [
            { text: '如实回答', affection: 5, energy: 0, next: 16 },
            { text: '说得体面一点', affection: 10, energy: 0, next: 16 },
            { text: '紧张得说不出话', affection: -5, energy: 0, next: 16 }
        ]
    },
    
    // === 第四阶段：抉择（场景 16-25）===
    {
        id: 16,
        trigger: 'scene_16',
        text: '饭后。\n\n温雅送你到门口。\n\n温雅：「今天……谢谢你。」\n「我爸妈挺喜欢你的。」',
        choices: [
            { text: '「我也喜欢你爸妈。」', affection: 10, energy: 0, next: 17 },
            { text: '「你爸妈很好。」', affection: 5, energy: 0, next: 17 },
            { text: '「累死了。」', affection: -5, energy: 0, next: 17 }
        ]
    },
    {
        id: 17,
        trigger: 'scene_17',
        text: '一个月后。\n\n温雅接到一个电话，脸色变了。\n\n温雅：「……好，我知道了。」\n「我考虑一下。」',
        choices: [
            { text: '「怎么了？」', affection: 5, energy: 0, next: 18 },
            { text: '「（等她主动说）」', affection: 0, energy: 0, next: 18 },
            { text: '「不想说就算了。」', affection: -5, energy: 0, next: 18 }
        ]
    },
    {
        id: 18,
        trigger: 'scene_18',
        text: '温雅：「有个画廊……想签我。」\n「但是要去北京。」\n“我……不知道该怎么办。”',
        choices: [
            { text: '「去啊，这是机会。」', affection: -10, energy: 0, next: 19 },
            { text: '「那就别去。」', affection: -5, energy: 0, next: 19 },
            { text: '「你自己决定。」', affection: 5, energy: 0, next: 19 }
        ]
    },
    {
        id: 19,
        trigger: 'scene_19',
        text: '温雅沉默了很久。\n\n温雅：「我以为……你会让我留下来。」',
        choices: [
            { text: '「我不想束缚你。」', affection: 10, energy: 0, next: 20 },
            { text: '「留下来吧。」', affection: 15, energy: 0, next: 20 },
            { text: '「随便你。」', affection: -20, energy: 0, next: 20 }
        ]
    },
    {
        id: 20,
        trigger: 'scene_20',
        text: '温雅看着你，眼泪掉了下来。\n\n温雅：「我……不去北京了。」\n「我想留下来。」\n「因为……」',
        choices: [
            { text: '「因为什么？」', affection: 5, energy: 0, next: 21 },
            { text: '（抱住她）', affection: 15, energy: 0, next: 21 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 21 }
        ]
    },
    
    // === 第五阶段：表白与结局（场景 21-32）===
    {
        id: 21,
        trigger: 'scene_21',
        text: '温雅：「因为我喜欢你。」\n「很喜欢很喜欢。」\n「不想离开你。」',
        choices: [
            { text: '「我也喜欢你。」', affection: 20, energy: 0, next: 22 },
            { text: '「我……」', affection: 0, energy: 0, next: 22 },
            { text: '「（吻她）」', affection: 25, energy: 0, next: 22 }
        ]
    },
    {
        id: 22,
        trigger: 'scene_22',
        text: '你们在一起了。\n\n之后的日子，平淡而幸福。\n\n温雅画画，你工作，偶尔一起做饭、看电影。',
        choices: [
            { text: '「这样真好。」', affection: 10, energy: 0, next: 23 },
            { text: '「我们结婚吧。」', affection: 20, energy: 0, next: 24 },
            { text: '「养只猫吧。」', affection: 10, energy: 0, next: 25 }
        ]
    },
    {
        id: 23,
        trigger: 'scene_23',
        text: '一年后。\n\n温雅的个人画展再次举办，这次规模更大。\n\n她在画展上向你求婚。',
        choices: [
            { text: '「我愿意。」', affection: 30, energy: 0, ending: 'he' },
            { text: '「我……」', affection: -10, energy: 0, ending: 'ne' },
            { text: '「再给我点时间。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    },
    {
        id: 24,
        trigger: 'scene_24',
        text: '你们结婚了。\n\n在上海买了一套小房子，养了一只猫。\n\n温雅继续画画，你继续工作。',
        choices: [
            { text: '「这就是幸福吧。」', affection: 20, energy: 0, ending: 'he' },
            { text: '「有点累。」', affection: -5, energy: 0, ending: 'ne' },
            { text: '「挺好的。」', affection: 10, energy: 0, ending: 'he' }
        ]
    },
    {
        id: 25,
        trigger: 'scene_25',
        text: '你们养了一只猫，叫小雅。\n\n猫很可爱，温雅经常画它。\n\n生活平淡而温馨。',
        choices: [
            { text: '「这样真好。」', affection: 15, energy: 0, ending: 'he' },
            { text: '「猫比我受宠。」', affection: 5, energy: 0, ending: 'he' },
            { text: '「有点无聊。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    }
];

// ===== 结局定义 =====
const WENYA_ENDINGS = {
    he: {
        title: '【温雅·执子之手】',
        text: '你们在一起了。\n\n她画了你，画里有光。\n\n外派期结束后，你选择留在上海。\n\n因为她在这里。\n\n—— 执子之手，与子偕老 ——',
        achievement: '【艺术家的缪斯】'
    },
    ne: {
        title: '【温雅·画友】',
        text: '你们还是朋友。\n\n偶尔一起看展，但也仅此而已。\n\n她去了北京，你留在上海。\n\n有些遗憾，但也许是最好的结局。\n\n—— 朋友，是多么遗憾的词 ——',
        achievement: '【艺术知己】'
    },
    alone: {
        title: '【温雅·错过的勇气】',
        text: '她等过你。\n\n但你选择了自由。\n\n后来她去了北京，成了有名的画家。\n\n你偶尔会在画廊看到她的画。\n\n画里，总有你的影子。\n\n—— 她等过你，但你没来 ——',
        achievement: '【她等过你】'
    },
    be: {
        title: '【温雅·错过的画展】',
        text: '你错过了她的画展。\n\n也错过了她。\n\n后来听说她去了北京。\n\n你们再也没见过。\n\n—— 有些错过，就是一辈子 ——',
        achievement: '【迟来的告白】'
    }
};
