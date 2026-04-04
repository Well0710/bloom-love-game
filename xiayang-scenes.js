// ===== 夏阳线完整场景数据（32 场景）=====

const XIAYANG_SCENES = [
    // === 第一阶段：相遇（场景 1-6）===
    {
        id: 1,
        trigger: 'unlock_xiayang',
        text: '健身房里，一个女生正在跑步机上飞奔。\n\n汗水顺着她的脸颊流下，马尾辫高高扎起。\n\n她看到你，露出灿烂的笑容。\n\n夏阳：「嗨！你是新来的吗？」',
        choices: [
            { text: '「嗯，第一次来。」', affection: 5, energy: 0, next: 2 },
            { text: '「你跑好快啊。」', affection: 8, energy: 0, next: 2 },
            { text: '「（点头）」', affection: 3, energy: 0, next: 2 }
        ]
    },
    {
        id: 2,
        trigger: 'scene_2',
        text: '夏阳从跑步机上下来，擦了擦汗。\n\n夏阳：「我叫夏阳，清华研二的。」\n「来上海实习，这边健身房便宜。」',
        choices: [
            { text: '「这么厉害。」', affection: 8, energy: 0, next: 3 },
            { text: '「清华的？」', affection: 5, energy: 0, next: 3 },
            { text: '「我是 XXX。」', affection: 5, energy: 0, next: 3 }
        ]
    },
    {
        id: 3,
        trigger: 'scene_3',
        text: '三天后，你又来健身。\n\n夏阳主动走过来。\n\n夏阳：「好巧！你也经常来啊？」\n「要不要一起练？」',
        choices: [
            { text: '「好啊。」', affection: 10, energy: 0, next: 4 },
            { text: '「我不太会。」', affection: 5, energy: 0, next: 4 },
            { text: '「今天累了。」', affection: -3, energy: 0, next: null }
        ]
    },
    {
        id: 4,
        trigger: 'scene_4',
        text: '夏阳教你做深蹲。\n\n夏阳：「膝盖不要超过脚尖。」\n「对，就是这样！」\n「你学得挺快嘛。」',
        choices: [
            { text: '「你教得好。」', affection: 10, energy: 0, next: 5 },
            { text: '「我天赋异禀。」', affection: 8, energy: 0, next: 5 },
            { text: '「累死了。」', affection: 3, energy: 0, next: 5 }
        ]
    },
    {
        id: 5,
        trigger: 'scene_5',
        text: '练完后，夏阳问你。\n\n夏阳：「这周六学校有运动会。」\n「你要不要来看我跑步？」',
        choices: [
            { text: '「好啊，几点？」', affection: 15, energy: 0, next: 6 },
            { text: '「我不太懂运动。」', affection: -5, energy: 0, next: null },
            { text: '「我考虑一下。」', affection: 0, energy: 0, next: null }
        ]
    },
    {
        id: 6,
        trigger: 'scene_6',
        text: '周六上午，清华操场。\n\n夏阳穿着运动服，在热身。\n\n看到你，她眼睛亮了。\n\n夏阳：「你真的来了！」',
        choices: [
            { text: '「答应你的嘛。」', affection: 10, energy: 20, next: 7 },
            { text: '「来给你加油。」', affection: 15, energy: 20, next: 7 },
            { text: '「嗯。」', affection: 5, energy: 20, next: 7 }
        ]
    },
    
    // === 第二阶段：暧昧（场景 7-15）===
    {
        id: 7,
        trigger: 'scene_7',
        text: '夏阳的比赛开始了。\n\n她像一阵风，遥遥领先。\n\n冲过终点线时，她回头找你。',
        choices: [
            { text: '跑过去迎接她', affection: 15, energy: 0, next: 8 },
            { text: '在原地鼓掌', affection: 5, energy: 0, next: 8 },
            { text: '挥手', affection: 8, energy: 0, next: 8 }
        ]
    },
    {
        id: 8,
        trigger: 'scene_8',
        text: '夏阳冲过来，一身汗。\n\n夏阳：「我赢了！」\n「你看到了吗！」',
        choices: [
            { text: '「看到了，好厉害。」', affection: 10, energy: 0, next: 9 },
            { text: '「（递水）」', affection: 10, energy: 0, next: 9 },
            { text: '「一身汗。」', affection: -5, energy: 0, next: 9 }
        ]
    },
    {
        id: 9,
        trigger: 'scene_9',
        text: '夏阳喝了口水。\n\n夏阳：「我请你吃饭吧。」\n「学校附近有家火锅超好吃。」',
        choices: [
            { text: '「好啊。」', affection: 10, energy: 30, next: 10 },
            { text: '「我请吧。」', affection: 15, energy: 30, next: 10 },
            { text: '「下次吧。」', affection: -5, energy: 0, next: null }
        ]
    },
    {
        id: 10,
        trigger: 'scene_10',
        text: '火锅店里。\n\n夏阳：「你知道吗。」\n「你是第一个来看我比赛的人。」\n「所以……我很开心。」',
        choices: [
            { text: '「以后我都会来。」', affection: 20, energy: 0, next: 11 },
            { text: '「这么容易满足？」', affection: 10, energy: 0, next: 11 },
            { text: '「（微笑）」', affection: 8, energy: 0, next: 11 }
        ]
    },
    {
        id: 11,
        trigger: 'scene_11',
        text: '之后的一周。\n\n夏阳每天都给你发消息。\n\n「今天跑步了吗？」\n「健身房见！」\n「一起吃饭吗？」',
        choices: [
            { text: '主动约她', affection: 15, energy: 20, next: 12 },
            { text: '正常回复', affection: 5, energy: 2, next: 12 },
            { text: '冷淡一点', affection: -10, energy: 0, next: 12 }
        ]
    },
    {
        id: 12,
        trigger: 'scene_12',
        text: '你们约好一起跑步。\n\n夏阳：「你配速多少？」\n「我带你跑。」',
        choices: [
            { text: '「跟你跑。」', affection: 10, energy: 30, next: 13 },
            { text: '「我慢慢跑。」', affection: 5, energy: 30, next: 13 },
            { text: '「今天好累。」', affection: -5, energy: 0, next: null }
        ]
    },
    {
        id: 13,
        trigger: 'scene_13',
        text: '跑完后，夏阳脸红红的。\n\n夏阳：「你知道吗。」\n「和你一起跑步很开心。」',
        choices: [
            { text: '「我也是。」', affection: 15, energy: 0, next: 14 },
            { text: '「（微笑）」', affection: 10, energy: 0, next: 14 },
            { text: '「累死了。」', affection: -5, energy: 0, next: 14 }
        ]
    },
    {
        id: 14,
        trigger: 'scene_14',
        text: '夏阳突然说。\n\n夏阳：「我有个秘密。」\n「其实……我注意你很久了。」',
        choices: [
            { text: '「什么时候？」', affection: 10, energy: 0, next: 15 },
            { text: '「（惊讶）」', affection: 10, energy: 0, next: 15 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 15 }
        ]
    },
    {
        id: 15,
        trigger: 'scene_15',
        text: '夏阳：「从第一次在健身房看到你。」\n「你认真健身的样子……」\n「很帅。」',
        choices: [
            { text: '「你也是。」', affection: 20, energy: 0, next: 16 },
            { text: '「（脸红）」', affection: 15, energy: 0, next: 16 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 16 }
        ]
    },
    
    // === 第三阶段：抉择（场景 16-24）===
    {
        id: 16,
        trigger: 'scene_16',
        text: '之后你们的关系更近了。\n\n夏阳：「这周末有空吗？」\n「我带你去个地方。」',
        choices: [
            { text: '「好啊。」', affection: 10, energy: 0, next: 17 },
            { text: '「去哪？」', affection: 5, energy: 0, next: 17 },
            { text: '「这周忙。」', affection: -10, energy: 0, next: null }
        ]
    },
    {
        id: 17,
        trigger: 'scene_17',
        text: '夏阳带你来到一个公园。\n\n夏阳：「这里是我常来的地方。」\n「很安静，适合跑步。」',
        choices: [
            { text: '「环境不错。」', affection: 8, energy: 0, next: 18 },
            { text: '「你经常一个人来？」', affection: 10, energy: 0, next: 18 },
            { text: '「（四处看看）」', affection: 5, energy: 0, next: 18 }
        ]
    },
    {
        id: 18,
        trigger: 'scene_18',
        text: '夏阳突然停下。\n\n夏阳：「其实……我有话想对你说。」',
        choices: [
            { text: '「（看着她）」', affection: 10, energy: 0, next: 19 },
            { text: '「什么话？」', affection: 5, energy: 0, next: 19 },
            { text: '「（紧张）」', affection: 8, energy: 0, next: 19 }
        ]
    },
    {
        id: 19,
        trigger: 'scene_19',
        text: '夏阳深吸一口气。\n\n夏阳：「我喜欢你。」\n「不是朋友那种喜欢。」\n「是……想和你在一起的那种喜欢。」',
        choices: [
            { text: '「我也喜欢你。」', affection: 30, energy: 0, next: 20 },
            { text: '「我……」', affection: 0, energy: 0, next: 20 },
            { text: '「（吻她）」', affection: 35, energy: 0, next: 20 }
        ]
    },
    {
        id: 20,
        trigger: 'scene_20',
        text: '夏阳看着你，等待你的回答。\n\n她的眼睛里有期待，也有紧张。',
        choices: [
            { text: '「我们在一起吧。」', affection: 30, energy: 0, next: 21 },
            { text: '「给我点时间。」', affection: -10, energy: 0, next: 21 },
            { text: '「我们还是朋友吧。」', affection: -30, energy: 0, next: 21 }
        ]
    },
    {
        id: 21,
        trigger: 'scene_21',
        text: '夏阳：「我……」\n「我可以抱抱你吗？」',
        choices: [
            { text: '（抱住她）', affection: 20, energy: 0, next: 22 },
            { text: '「（后退）」', affection: -20, energy: 0, next: 22 },
            { text: '「（沉默）」', affection: -10, energy: 0, next: 22 }
        ]
    },
    {
        id: 22,
        trigger: 'scene_22',
        text: '夏阳靠在你怀里。\n\n夏阳：「你知道吗。」\n「我等这句话很久了。」',
        choices: [
            { text: '「我也是。」', affection: 15, energy: 0, next: 23 },
            { text: '「（摸摸她的头）」', affection: 15, energy: 0, next: 23 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 23 }
        ]
    },
    {
        id: 23,
        trigger: 'scene_23',
        text: '你们在一起了。\n\n之后的日子，你们一起跑步，一起健身，一起吃饭。\n\n夏阳：「这就是幸福吧。」',
        choices: [
            { text: '「嗯，很幸福。」', affection: 15, energy: 0, next: 24 },
            { text: '「还要一起跑马拉松。」', affection: 10, energy: 0, next: 24 },
            { text: '「（微笑）」', affection: 10, energy: 0, next: 24 }
        ]
    },
    {
        id: 24,
        trigger: 'scene_24',
        text: '一年后。\n\n夏阳的实习结束了，要回北京。\n\n夏阳：「你……愿意和我一起去北京吗？」',
        choices: [
            { text: '「我愿意。」', affection: 30, energy: 0, ending: 'he' },
            { text: '「我……」', affection: -10, energy: 0, ending: 'ne' },
            { text: '「我不想离开上海。」', affection: -30, energy: 0, ending: 'be' }
        ]
    },
    
    // === 第四阶段：结局（场景 25-32）===
    {
        id: 25,
        trigger: 'scene_25',
        text: '你们一起去了北京。\n\n夏阳继续读书，你找了新工作。\n\n生活平淡而幸福。',
        choices: [
            { text: '「这样真好。」', affection: 20, energy: 0, ending: 'he' },
            { text: '「有点累。」', affection: -5, energy: 0, ending: 'ne' },
            { text: '「（微笑）」', affection: 10, energy: 0, ending: 'he' }
        ]
    }
];

// ===== 夏阳线结局定义 =====
const XIAYANG_ENDINGS = {
    he: {
        title: '【夏阳·并肩奔跑】',
        text: '你们在一起了。\n\n她跑完马拉松后向你求婚。\n\n你在终点线答应了她。\n\n外派期结束后，你选择和她一起回北京。\n\n因为她在哪里，家就在哪里。\n\n—— 并肩奔跑，一生相伴 ——',
        achievement: '【最佳运动伴侣】'
    },
    ne: {
        title: '【夏阳·跑友】',
        text: '你们还是朋友。\n\n偶尔一起跑步，但也仅此而已。\n\n她回了北京，你留在上海。\n\n有些遗憾，但也许是最好的结局。\n\n—— 朋友，是多么遗憾的词 ——',
        achievement: '【健身搭子】'
    },
    be: {
        title: '【夏阳·终点线的背影】',
        text: '你拒绝了她的表白。\n\n她回北京了。\n\n后来听说她成了职业运动员。\n\n你偶尔会在电视上看到她。\n\n她冲过终点线时，还是会回头。\n\n只是，不再看你了。\n\n—— 没能说出口的加油 ——',
        achievement: '【你配不上她的热情】'
    }
};
