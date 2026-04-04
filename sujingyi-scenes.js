// ===== 苏静怡线完整场景数据（32 场景）=====

const SUJINGYI_SCENES = [
    // === 第一阶段：相遇（场景 1-6）===
    {
        id: 1,
        trigger: 'unlock_sujingyi',
        text: '加班到深夜，你突然头晕目眩。\n\n眼前一黑，你倒下了。\n\n醒来时，你在医院。\n\n苏静怡：「你醒了。」\n「过度劳累，营养不良。」\n「你是想把自己累死吗？」',
        choices: [
            { text: '「……（沉默）」', affection: 5, energy: 0, next: 2 },
            { text: '「工作重要。」', affection: -10, energy: 0, next: 2 },
            { text: '「谢谢关心。」', affection: 10, energy: 0, next: 2 }
        ]
    },
    {
        id: 2,
        trigger: 'scene_2',
        text: '苏静怡拿着病历，表情专业。\n\n苏静怡：「住院观察一晚。」\n「明天早上可以出院。」',
        choices: [
            { text: '「好的。」', affection: 5, energy: 0, next: 3 },
            { text: '「不用吧。」', affection: -5, energy: 0, next: 3 },
            { text: '「麻烦你了。」', affection: 8, energy: 0, next: 3 }
        ]
    },
    {
        id: 3,
        trigger: 'scene_3',
        text: '第二天早上。\n\n苏静怡来查房。\n\n苏静怡：「各项指标正常。」\n「可以出院了。」\n「记得按时吃饭。」',
        choices: [
            { text: '「知道了。」', affection: 5, energy: 0, next: 4 },
            { text: '「谢谢医生。」', affection: 8, energy: 0, next: 4 },
            { text: '「你也注意休息。」', affection: 15, energy: 0, next: 4 }
        ]
    },
    {
        id: 4,
        trigger: 'scene_4',
        text: '一周后，你来复查。\n\n苏静怡：「恢复得不错。」\n「但还是要注意休息。」',
        choices: [
            { text: '「好。」', affection: 5, energy: 0, next: 5 },
            { text: '「工作忙。」', affection: -5, energy: 0, next: 5 },
            { text: '「你最近怎么样？」', affection: 10, energy: 0, next: 5 }
        ]
    },
    {
        id: 5,
        trigger: 'scene_5',
        text: '苏静怡愣了一下。\n\n苏静怡：「……还行。」\n「就是经常加班。」',
        choices: [
            { text: '「医生也加班？」', affection: 10, energy: 0, next: 6 },
            { text: '「辛苦了。」', affection: 8, energy: 0, next: 6 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 6 }
        ]
    },
    {
        id: 6,
        trigger: 'scene_6',
        text: '苏静怡：「有空一起吃饭吗？」\n「医院附近有家粥店不错。」',
        choices: [
            { text: '「好啊。」', affection: 15, energy: 0, next: 7 },
            { text: '「我请吧。」', affection: 15, energy: 0, next: 7 },
            { text: '「下次吧。」', affection: -5, energy: 0, next: null }
        ]
    },
    
    // === 第二阶段：了解（场景 7-15）===
    {
        id: 7,
        trigger: 'scene_7',
        text: '粥店里。\n\n苏静怡：「我很少在外面吃饭。」\n「今天……是例外。」',
        choices: [
            { text: '「为什么？」', affection: 8, energy: 30, next: 8 },
            { text: '「荣幸。」', affection: 10, energy: 30, next: 8 },
            { text: '「（微笑）」', affection: 5, energy: 30, next: 8 }
        ]
    },
    {
        id: 8,
        trigger: 'scene_8',
        text: '苏静怡：「因为……」\n「我想多了解你一些。」',
        choices: [
            { text: '「（惊讶）」', affection: 10, energy: 0, next: 9 },
            { text: '「为什么？」', affection: 8, energy: 0, next: 9 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 9 }
        ]
    },
    {
        id: 9,
        trigger: 'scene_9',
        text: '苏静怡：「你晕倒的时候……」\n「我很担心。」\n「虽然我是医生，但也会担心。」',
        choices: [
            { text: '「对不起。」', affection: 10, energy: 0, next: 10 },
            { text: '「让你担心了。」', affection: 15, energy: 0, next: 10 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 10 }
        ]
    },
    {
        id: 10,
        trigger: 'scene_10',
        text: '之后的一周。\n\n苏静怡偶尔给你发消息。\n\n「记得吃饭。」\n「别加班太晚。」\n「注意休息。」',
        choices: [
            { text: '主动约她', affection: 15, energy: 20, next: 11 },
            { text: '正常回复', affection: 5, energy: 2, next: 11 },
            { text: '冷淡回复', affection: -10, energy: 0, next: 11 }
        ]
    },
    {
        id: 11,
        trigger: 'scene_11',
        text: '你们约好一起吃饭。\n\n苏静怡：「今天不加班。」\n「难得。」',
        choices: [
            { text: '「医生辛苦。」', affection: 10, energy: 30, next: 12 },
            { text: '「我请你。」', affection: 10, energy: 30, next: 12 },
            { text: '「（微笑）」', affection: 5, energy: 30, next: 12 }
        ]
    },
    {
        id: 12,
        trigger: 'scene_12',
        text: '吃饭时，苏静怡说。\n\n苏静怡：「我其实……不太会表达。」\n「但我想让你知道。」',
        choices: [
            { text: '「（看着她）」', affection: 10, energy: 0, next: 13 },
            { text: '「我知道。」', affection: 15, energy: 0, next: 13 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 13 }
        ]
    },
    {
        id: 13,
        trigger: 'scene_13',
        text: '苏静怡：「我喜欢你。」\n「虽然我不太会说甜言蜜语。」\n「但……我想和你在一起。」',
        choices: [
            { text: '「我也喜欢你。」', affection: 30, energy: 0, next: 14 },
            { text: '「我……」', affection: 0, energy: 0, next: 14 },
            { text: '「（吻她）」', affection: 35, energy: 0, next: 14 }
        ]
    },
    {
        id: 14,
        trigger: 'scene_14',
        text: '苏静怡看着你，等待你的回答。\n\n她的表情很认真，也很紧张。',
        choices: [
            { text: '「我们在一起吧。」', affection: 30, energy: 0, next: 15 },
            { text: '「给我点时间。」', affection: -10, energy: 0, next: 15 },
            { text: '「我们还是朋友吧。」', affection: -30, energy: 0, next: 15 }
        ]
    },
    {
        id: 15,
        trigger: 'scene_15',
        text: '苏静怡：「我……」\n「我可以抱抱你吗？」',
        choices: [
            { text: '（抱住她）', affection: 20, energy: 0, next: 16 },
            { text: '「（后退）」', affection: -20, energy: 0, next: 16 },
            { text: '「（沉默）」', affection: -10, energy: 0, next: 16 }
        ]
    },
    
    // === 第三阶段：抉择（场景 16-24）===
    {
        id: 16,
        trigger: 'scene_16',
        text: '苏静怡靠在你怀里。\n\n苏静怡：「我等这句话很久了。」',
        choices: [
            { text: '「我也是。」', affection: 15, energy: 0, next: 17 },
            { text: '「（摸摸她的头）」', affection: 15, energy: 0, next: 17 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 17 }
        ]
    },
    {
        id: 17,
        trigger: 'scene_17',
        text: '你们在一起了。\n\n之后的日子，平淡而温馨。\n\n苏静怡：「记得按时吃饭。」',
        choices: [
            { text: '「知道了。」', affection: 10, energy: 0, next: 18 },
            { text: '「你也是。」', affection: 10, energy: 0, next: 18 },
            { text: '「（微笑）」', affection: 5, energy: 0, next: 18 }
        ]
    },
    {
        id: 18,
        trigger: 'scene_18',
        text: '苏静怡：「我爸妈……想见见你。」\n「你……愿意吗？」',
        choices: [
            { text: '「好啊。」', affection: 15, energy: 30, next: 19 },
            { text: '「太快了吧。」', affection: -10, energy: 0, next: 19 },
            { text: '「我还没准备好。」', affection: -5, energy: 0, next: 19 }
        ]
    },
    {
        id: 19,
        trigger: 'scene_19',
        text: '你来到苏静怡家。\n\n她爸妈很热情。\n\n苏静怡爸爸：「你是做什么工作的？」',
        choices: [
            { text: '如实回答', affection: 5, energy: 0, next: 20 },
            { text: '说得体面一点', affection: 10, energy: 0, next: 20 },
            { text: '紧张得说不出话', affection: -5, energy: 0, next: 20 }
        ]
    },
    {
        id: 20,
        trigger: 'scene_20',
        text: '饭后。\n\n苏静怡送你到门口。\n\n苏静怡：「今天……谢谢你。」\n「我爸妈挺喜欢你的。」',
        choices: [
            { text: '「我也喜欢你爸妈。」', affection: 10, energy: 0, next: 21 },
            { text: '「你爸妈很好。」', affection: 5, energy: 0, next: 21 },
            { text: '「累死了。」', affection: -5, energy: 0, next: 21 }
        ]
    },
    {
        id: 21,
        trigger: 'scene_21',
        text: '一个月后。\n\n苏静怡接到一个电话，脸色变了。\n\n苏静怡：「……好，我知道了。」\n「我考虑一下。」',
        choices: [
            { text: '「怎么了？」', affection: 5, energy: 0, next: 22 },
            { text: '「（等她主动说）」', affection: 0, energy: 0, next: 22 },
            { text: '「不想说就算了。」', affection: -5, energy: 0, next: 22 }
        ]
    },
    {
        id: 22,
        trigger: 'scene_22',
        text: '苏静怡：「有个医院……想挖我。」\n「但是要去国外。」\n「我……不知道该怎么办。」',
        choices: [
            { text: '「去啊，这是机会。」', affection: -10, energy: 0, next: 23 },
            { text: '「那就别去。」', affection: -5, energy: 0, next: 23 },
            { text: '「你自己决定。」', affection: 5, energy: 0, next: 23 }
        ]
    },
    {
        id: 23,
        trigger: 'scene_23',
        text: '苏静怡沉默了很久。\n\n苏静怡：「我以为……你会让我留下来。」',
        choices: [
            { text: '「我不想束缚你。」', affection: 10, energy: 0, next: 24 },
            { text: '「留下来吧。」', affection: 15, energy: 0, next: 24 },
            { text: '「随便你。」', affection: -20, energy: 0, next: 24 }
        ]
    },
    {
        id: 24,
        trigger: 'scene_24',
        text: '苏静怡看着你，眼泪掉了下来。\n\n苏静怡：「我……不去了。」\n「我想留下来。」\n「因为……」',
        choices: [
            { text: '「因为什么？」', affection: 5, energy: 0, next: 25 },
            { text: '（抱住她）', affection: 15, energy: 0, next: 25 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 25 }
        ]
    },
    
    // === 第四阶段：结局（场景 25-32）===
    {
        id: 25,
        trigger: 'scene_25',
        text: '苏静怡：「因为我喜欢你。」\n「很喜欢很喜欢。」\n「不想离开你。」',
        choices: [
            { text: '「我也喜欢你。」', affection: 20, energy: 0, next: 26 },
            { text: '「我……」', affection: 0, energy: 0, next: 26 },
            { text: '「（吻她）」', affection: 25, energy: 0, next: 26 }
        ]
    },
    {
        id: 26,
        trigger: 'scene_26',
        text: '你们在一起了。\n\n之后的日子，平淡而幸福。\n\n苏静怡继续在医院工作，你继续工作。',
        choices: [
            { text: '「这样真好。」', affection: 10, energy: 0, next: 27 },
            { text: '「我们结婚吧。」', affection: 20, energy: 0, next: 28 },
            { text: '「养只猫吧。」', affection: 10, energy: 0, next: 29 }
        ]
    },
    {
        id: 27,
        trigger: 'scene_27',
        text: '一年后。\n\n苏静怡在医院向你求婚。\n\n苏静怡：「你愿意吗？」',
        choices: [
            { text: '「我愿意。」', affection: 30, energy: 0, ending: 'he' },
            { text: '「我……」', affection: -10, energy: 0, ending: 'ne' },
            { text: '「再给我点时间。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    },
    {
        id: 28,
        trigger: 'scene_28',
        text: '你们结婚了。\n\n在上海买了一套小房子。\n\n苏静怡继续当医生，你继续工作。',
        choices: [
            { text: '「这就是幸福吧。」', affection: 20, energy: 0, ending: 'he' },
            { text: '「有点累。」', affection: -5, energy: 0, ending: 'ne' },
            { text: '「挺好的。」', affection: 10, energy: 0, ending: 'he' }
        ]
    },
    {
        id: 29,
        trigger: 'scene_29',
        text: '你们养了一只猫，叫小怡。\n\n猫很可爱，苏静怡经常给它检查身体。\n\n生活平淡而温馨。',
        choices: [
            { text: '「这样真好。」', affection: 15, energy: 0, ending: 'he' },
            { text: '「猫比我受宠。」', affection: 5, energy: 0, ending: 'he' },
            { text: '「有点无聊。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    }
];

// ===== 苏静怡线结局定义 =====
const SUJINGYI_ENDINGS = {
    he: {
        title: '【苏静怡·白衣誓言】',
        text: '你们在一起了。\n\n她为你转科研，不再值夜班。\n\n你说：「以后我照顾你。」\n\n外派期结束后，你选择留在上海。\n\n因为她在这里。\n\n—— 白衣天使，为你守候 ——',
        achievement: '【医生的后盾】'
    },
    ne: {
        title: '【苏静怡·医嘱】',
        text: '你们还是朋友。\n\n她还是会关心你，只是以医生身份。\n\n「记得按时吃饭。」\n\n她去了国外，你留在上海。\n\n有些遗憾，但也许是最好的结局。\n\n—— 医生也会心冷 ——',
        achievement: '【记得按时吃饭】'
    },
    be: {
        title: '【苏静怡·未接来电】',
        text: '你拒绝了她的表白。\n\n她去了国外。\n\n后来听说她成了知名专家。\n\n你偶尔会接到她的电话。\n\n「记得按时吃饭。」\n\n然后，再也没有然后了。\n\n—— 医生不动心 ——',
        achievement: '【医生也会心冷】'
    }
};
