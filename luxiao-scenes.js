// ===== 陆潇线完整场景数据（32 场景 + 暗线狗血）=====

const LUXIAO_SCENES = [
    // === 第一阶段：相遇（场景 1-6）===
    {
        id: 1,
        trigger: 'unlock_luxiao',
        text: '你误入一家法餐厅。\n\n装修精致，空气中弥漫着咖啡和烘焙的香气。\n\n吧台后站着一位短发的女子，正在专注地制作咖啡。\n\n陆潇：「几位？」',
        choices: [
            { text: '「一位。」', affection: 5, energy: 0, next: 2 },
            { text: '「这是法餐厅？」', affection: 8, energy: 0, next: 2 },
            { text: '「有什么推荐？」', affection: 10, energy: 0, next: 2 }
        ]
    },
    {
        id: 2,
        trigger: 'scene_2',
        text: '陆潇：「这是法餐厅。」\n「我是陆潇，这家店的主理人。」',
        choices: [
            { text: '「这么厉害。」', affection: 8, energy: 0, next: 3 },
            { text: '「主理人？」', affection: 5, energy: 0, next: 3 },
            { text: '「（点头）」', affection: 3, energy: 0, next: 3 }
        ]
    },
    {
        id: 3,
        trigger: 'scene_3',
        text: '陆潇：「第一次来？」\n「我给你做个套餐。」',
        choices: [
            { text: '「好啊。」', affection: 10, energy: 50, next: 4 },
            { text: '「太贵了吧。」', affection: -5, energy: 0, next: null },
            { text: '「我请客？」', affection: 10, energy: 50, next: 4 }
        ]
    },
    {
        id: 4,
        trigger: 'scene_4',
        text: '陆潇亲自下厨。\n\n菜很精致，味道很好。\n\n陆潇：「怎么样？」',
        choices: [
            { text: '「好吃。」', affection: 10, energy: 0, next: 5 },
            { text: '「还可以。」', affection: 3, energy: 0, next: 5 },
            { text: '「不如我做的。」', affection: -10, energy: 0, next: 5 }
        ]
    },
    {
        id: 5,
        trigger: 'scene_5',
        text: '陆潇：「呵。」\n「口气不小。」\n「下次让你试试。」',
        choices: [
            { text: '「好啊。」', affection: 10, energy: 0, next: 6 },
            { text: '「（微笑）」', affection: 5, energy: 0, next: 6 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 6 }
        ]
    },
    {
        id: 6,
        trigger: 'scene_6',
        text: '结账时，陆潇说。\n\n陆潇：「这顿我请。」\n「欢迎常来。」',
        choices: [
            { text: '「那怎么行。」', affection: 10, energy: 0, next: 7 },
            { text: '「谢谢。」', affection: 8, energy: 0, next: 7 },
            { text: '「（留下小费）」', affection: 15, energy: 0, next: 7 }
        ]
    },
    
    // === 第二阶段：暧昧（场景 7-15）===
    {
        id: 7,
        trigger: 'scene_7',
        text: '之后你经常来这家餐厅。\n\n陆潇：「又來了。」\n「老样子？」',
        choices: [
            { text: '「嗯。」', affection: 5, energy: 50, next: 8 },
            { text: '「有新菜吗？」', affection: 10, energy: 50, next: 8 },
            { text: '「今天你下厨？」', affection: 15, energy: 50, next: 8 }
        ]
    },
    {
        id: 8,
        trigger: 'scene_8',
        text: '陆潇：「新研发了一道菜。」\n「你尝尝。」\n「给我点反馈。」',
        choices: [
            { text: '「荣幸。」', affection: 10, energy: 50, next: 9 },
            { text: '「好啊。」', affection: 8, energy: 50, next: 9 },
            { text: '「（品尝）」', affection: 5, energy: 50, next: 9 }
        ]
    },
    {
        id: 9,
        trigger: 'scene_9',
        text: '你尝了一口。\n\n味道很好。\n\n陆潇：「怎么样？」',
        choices: [
            { text: '「好吃。」', affection: 10, energy: 0, next: 10 },
            { text: '「还可以。」', affection: 3, energy: 0, next: 10 },
            { text: '「不如你。」', affection: 20, energy: 0, next: 10 }
        ]
    },
    {
        id: 10,
        trigger: 'scene_10',
        text: '陆潇脸红了。\n\n陆潇：「油嘴滑舌。」\n「不过……谢谢。」',
        choices: [
            { text: '「我是认真的。」', affection: 15, energy: 0, next: 11 },
            { text: '「（微笑）」', affection: 10, energy: 0, next: 11 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 11 }
        ]
    },
    {
        id: 11,
        trigger: 'scene_11',
        text: '之后的一周。\n\n陆潇偶尔给你发消息。\n\n「新菜研发好了。」\n「来尝尝？」\n「老位置。」',
        choices: [
            { text: '主动约她', affection: 15, energy: 50, next: 12 },
            { text: '正常回复', affection: 5, energy: 50, next: 12 },
            { text: '冷淡回复', affection: -10, energy: 50, next: 12 }
        ]
    },
    {
        id: 12,
        trigger: 'scene_12',
        text: '你来到餐厅。\n\n陆潇：「来了。」\n「坐。」',
        choices: [
            { text: '「（坐下）」', affection: 5, energy: 0, next: 13 },
            { text: '「今天做什么？」', affection: 10, energy: 0, next: 13 },
            { text: '「（微笑）」', affection: 8, energy: 0, next: 13 }
        ]
    },
    {
        id: 13,
        trigger: 'scene_13',
        text: '陆潇端上一道菜。\n\n陆潇：「这是为你做的。」\n「尝尝。」',
        choices: [
            { text: '「（品尝）」', affection: 10, energy: 50, next: 14 },
            { text: '「谢谢。」', affection: 10, energy: 50, next: 14 },
            { text: '「（看着她）」', affection: 15, energy: 50, next: 14 }
        ]
    },
    {
        id: 14,
        trigger: 'scene_14',
        text: '陆潇：「你知道吗。」\n「我很少为人下厨。」\n「你是第一个。」',
        choices: [
            { text: '「荣幸。」', affection: 15, energy: 0, next: 15 },
            { text: '「为什么？」', affection: 10, energy: 0, next: 15 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 15 }
        ]
    },
    {
        id: 15,
        trigger: 'scene_15',
        text: '陆潇：「因为……」\n「我想让你记住我。」\n「记住我的味道。」',
        choices: [
            { text: '「我记住了。」', affection: 20, energy: 0, next: 16 },
            { text: '「（吻她）」', affection: 30, energy: 0, next: 16 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 16 }
        ]
    },
    
    // === 第三阶段：暗线解锁（场景 16-24）===
    {
        id: 16,
        trigger: 'scene_16',
        text: '你们在一起了。\n\n之后的日子，你经常来餐厅。\n\n陆潇：「来了。」\n「坐。」',
        choices: [
            { text: '「（坐下）」', affection: 5, energy: 0, next: 17 },
            { text: '「（抱抱她）」', affection: 15, energy: 0, next: 17 },
            { text: '「（微笑）」', affection: 8, energy: 0, next: 17 }
        ]
    },
    {
        id: 17,
        trigger: 'affection_70',
        text: '一天，一个陌生女人来到餐厅。\n\n她直接走向陆潇。\n\n陌生女人：「好久不见。」',
        choices: [
            { text: '「（看着她们）」', affection: 0, energy: 0, next: 18 },
            { text: '「（皱眉）」', affection: -5, energy: 0, next: 18 },
            { text: '「（离开）」', affection: -10, energy: 0, next: 18 }
        ]
    },
    {
        id: 18,
        trigger: 'scene_18',
        text: '陆潇脸色变了。\n\n陆潇：「……你怎么来了。」\n「这是你该来的地方吗？」',
        choices: [
            { text: '「（看着陆潇）」', affection: 0, energy: 0, next: 19 },
            { text: '「你们认识？」', affection: -5, energy: 0, next: 19 },
            { text: '「（离开）」', affection: -10, energy: 0, next: 19 }
        ]
    },
    {
        id: 19,
        trigger: 'scene_19',
        text: '陌生女人看向你。\n\n陌生女人：「这位是？」\n\n陆潇：「……」',
        choices: [
            { text: '「我是她女朋友。」', affection: 10, energy: 0, next: 20 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 20 },
            { text: '「我是谁不重要。」', affection: -10, energy: 0, next: 20 }
        ]
    },
    {
        id: 20,
        trigger: 'scene_20',
        text: '陌生女人笑了。\n\n陌生女人：「是吗。」\n「那祝你幸福。」\n\n她转身离开。',
        choices: [
            { text: '「她是谁？」', affection: 5, energy: 0, next: 21 },
            { text: '「（看着陆潇）」', affection: 0, energy: 0, next: 21 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 21 }
        ]
    },
    {
        id: 21,
        trigger: 'scene_21',
        text: '陆潇沉默了很久。\n\n陆潇：「我前女友。」\n「她……回来想复合。」',
        choices: [
            { text: '「那你呢？」', affection: 5, energy: 0, next: 22 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 22 },
            { text: '「（离开）」', affection: -20, energy: 0, next: 22 }
        ]
    },
    {
        id: 22,
        trigger: 'scene_22',
        text: '陆潇：「我拒绝了。」\n「因为……」\n「我有你了。」',
        choices: [
            { text: '「（抱住她）」', affection: 20, energy: 0, next: 23 },
            { text: '「（吻她）」', affection: 25, energy: 0, next: 23 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 23 }
        ]
    },
    {
        id: 23,
        trigger: 'scene_23',
        text: '陆潇靠在你怀里。\n\n陆潇：「别离开我。」\n「求你。」',
        choices: [
            { text: '「我不会。」', affection: 20, energy: 0, next: 24 },
            { text: '「（抱住她）」', affection: 15, energy: 0, next: 24 },
            { text: '「（沉默）」', affection: -10, energy: 0, next: 24 }
        ]
    },
    {
        id: 24,
        trigger: 'scene_24',
        text: '之后你们的关系更近了。\n\n陆潇：「这家店……」\n「我想把它盘出去。」',
        choices: [
            { text: '「为什么？」', affection: 5, energy: 0, next: 25 },
            { text: '「（惊讶）」', affection: 5, energy: 0, next: 25 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 25 }
        ]
    },
    {
        id: 25,
        trigger: 'scene_25',
        text: '陆潇：「我想和你一起。」\n「开一家新店。」\n「你愿意吗？」',
        choices: [
            { text: '「我愿意。」', affection: 30, energy: 0, next: 26 },
            { text: '「我……」', affection: -10, energy: 0, next: 26 },
            { text: '「（沉默）」', affection: -20, energy: 0, next: 26 }
        ]
    },
    {
        id: 26,
        trigger: 'scene_26',
        text: '你们一起开了新店。\n\n陆潇是主厨，你是老板。\n\n生活平淡而幸福。',
        choices: [
            { text: '「这样真好。」', affection: 15, energy: 0, next: 27 },
            { text: '「我们结婚吧。」', affection: 25, energy: 0, next: 28 },
            { text: '「（微笑）」', affection: 10, energy: 0, next: 27 }
        ]
    },
    {
        id: 27,
        trigger: 'scene_27',
        text: '一年后。\n\n陆潇在餐厅向你求婚。\n\n陆潇：「你愿意吗？」',
        choices: [
            { text: '「我愿意。」', affection: 30, energy: 0, ending: 'he' },
            { text: '「我……」', affection: -10, energy: 0, ending: 'ne' },
            { text: '「再给我点时间。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    },
    {
        id: 28,
        trigger: 'scene_28',
        text: '你们结婚了。\n\n在上海买了房子，养了一只猫。\n\n陆潇继续当主厨，你继续当老板。',
        choices: [
            { text: '「这就是幸福吧。」', affection: 20, energy: 0, ending: 'he' },
            { text: '「有点累。」', affection: -5, energy: 0, ending: 'ne' },
            { text: '「挺好的。」', affection: 10, energy: 0, ending: 'he' }
        ]
    }
];

// ===== 陆潇线结局定义 =====
const LUXIAO_ENDINGS = {
    he: {
        title: '【陆潇·味蕾之约】',
        text: '你们在一起了。\n\n「新菜好吃吗？」她问。\n\n「好吃，」你说，「但比不过你。」\n\n她笑了，那个酷酷的女人，居然脸红了。\n\n咖啡馆里，香气氤氲。\n\n原来，最动人的爱情，藏在日常的一餐一饭里。\n\n—— 唯爱与美食不可辜负 ——',
        achievement: '【主厨的专属试菜员】'
    },
    ne: {
        title: '【陆潇·老顾客】',
        text: '你们还是朋友。\n\n你偶尔会去她的餐厅。\n\n她还是会为你做新菜。\n\n但也仅此而已。\n\n—— VIP 座位，永远留着 ——',
        achievement: '【VIP 座位】'
    },
    be: {
        title: '【陆潇·打烊的餐厅】',
        text: '你拒绝了她的表白。\n\n后来餐厅转让了。\n\n她去了国外。\n\n你偶尔会路过那家店。\n\n只是，再也吃不到了。\n\n—— 有些人，一旦错过，就是一辈子 ——',
        achievement: '【最后一道菜】'
    }
};
