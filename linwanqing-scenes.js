// ===== 林婉清线完整场景数据（32 场景）=====

const LINWANQING_SCENES = [
    // === 第一阶段：相遇（场景 1-6）===
    {
        id: 1,
        trigger: 'unlock_linwanqing',
        text: '你去客户公司开会。\n\n林氏集团，豪华的办公室。\n\n一个女人坐在办公桌后，穿着职业装，气场强大。\n\n林婉清：「你就是咨询公司派来的？」',
        choices: [
            { text: '「是。」', affection: 5, energy: 0, next: 2 },
            { text: '「我是 XXX，负责这个项目。」', affection: 8, energy: 0, next: 2 },
            { text: '「林总你好。」', affection: 10, energy: 0, next: 2 }
        ]
    },
    {
        id: 2,
        trigger: 'scene_2',
        text: '林婉清：「坐。」\n「说说你的方案。」',
        choices: [
            { text: '（展示方案）', affection: 10, energy: 0, next: 3 },
            { text: '「好的。」', affection: 5, energy: 0, next: 3 },
            { text: '（紧张）', affection: -5, energy: 0, next: 3 }
        ]
    },
    {
        id: 3,
        trigger: 'scene_3',
        text: '林婉清听完后。\n\n林婉清：「太保守了。」\n「我要的是增长 50%，不是 20%。」',
        choices: [
            { text: '「那您有什么建议？」', affection: 8, energy: 0, next: 4 },
            { text: '「保守更稳妥。」', affection: -5, energy: 0, next: 4 },
            { text: '「我可以改。」', affection: 10, energy: 0, next: 4 }
        ]
    },
    {
        id: 4,
        trigger: 'scene_4',
        text: '林婉清：「我要的是结果。」\n「不是过程。」\n「能做到吗？」',
        choices: [
            { text: '「能。」', affection: 15, energy: 0, next: 5 },
            { text: '「我试试。」', affection: 5, energy: 0, next: 5 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 5 }
        ]
    },
    {
        id: 5,
        trigger: 'scene_5',
        text: '林婉清：「好。」\n「我给你一个月。」\n「做不到，你知道后果。」',
        choices: [
            { text: '「明白。」', affection: 10, energy: 0, next: 6 },
            { text: '「（点头）」', affection: 5, energy: 0, next: 6 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 6 }
        ]
    },
    {
        id: 6,
        trigger: 'scene_6',
        text: '之后你经常来林氏集团。\n\n林婉清：「进度怎么样？」\n「别让我失望。」',
        choices: [
            { text: '「放心。」', affection: 10, energy: 0, next: 7 },
            { text: '「在进行中。」', affection: 5, energy: 0, next: 7 },
            { text: '「（汇报进度）」', affection: 8, energy: 0, next: 7 }
        ]
    },
    
    // === 第二阶段：暧昧（场景 7-15）===
    {
        id: 7,
        trigger: 'scene_7',
        text: '一个月后，项目成功了。\n\n林婉清：「干得不错。」\n「有奖励。」',
        choices: [
            { text: '「什么奖励？」', affection: 10, energy: 0, next: 8 },
            { text: '「谢谢林总。」', affection: 5, energy: 0, next: 8 },
            { text: '「（微笑）」', affection: 8, energy: 0, next: 8 }
        ]
    },
    {
        id: 8,
        trigger: 'scene_8',
        text: '林婉清：「今晚一起吃饭。」\n「我请。」',
        choices: [
            { text: '「好啊。」', affection: 15, energy: 50, next: 9 },
            { text: '「我请吧。」', affection: 15, energy: 50, next: 9 },
            { text: '「下次吧。」', affection: -5, energy: 0, next: null }
        ]
    },
    {
        id: 9,
        trigger: 'scene_9',
        text: '高级餐厅里。\n\n林婉清：「你和其他顾问不一样。」\n「你很……特别。」',
        choices: [
            { text: '「哪里特别？」', affection: 10, energy: 0, next: 10 },
            { text: '「谢谢。」', affection: 8, energy: 0, next: 10 },
            { text: '「（微笑）」', affection: 5, energy: 0, next: 10 }
        ]
    },
    {
        id: 10,
        trigger: 'scene_10',
        text: '林婉清：「你很专业。」\n「而且……不卑不亢。」\n「我喜欢。」',
        choices: [
            { text: '「谢谢。」', affection: 10, energy: 0, next: 11 },
            { text: '「（看着她）」', affection: 15, energy: 0, next: 11 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 11 }
        ]
    },
    {
        id: 11,
        trigger: 'scene_11',
        text: '之后的一周。\n\n林婉清偶尔给你发消息。\n\n「项目有新进展吗？」\n「有空一起吃饭。」\n「别太累了。」',
        choices: [
            { text: '主动约她', affection: 15, energy: 50, next: 12 },
            { text: '正常回复', affection: 5, energy: 0, next: 12 },
            { text: '冷淡回复', affection: -10, energy: 0, next: 12 }
        ]
    },
    {
        id: 12,
        trigger: 'scene_12',
        text: '你们约好一起吃饭。\n\n林婉清：「今天不聊工作。」\n「只聊天。」',
        choices: [
            { text: '「好啊。」', affection: 10, energy: 50, next: 13 },
            { text: '「聊什么？」', affection: 8, energy: 50, next: 13 },
            { text: '「（微笑）」', affection: 5, energy: 50, next: 13 }
        ]
    },
    {
        id: 13,
        trigger: 'scene_13',
        text: '林婉清：「其实……」\n「我很少和人聊天。」\n「但和你……不一样。」',
        choices: [
            { text: '「为什么？」', affection: 10, energy: 0, next: 14 },
            { text: '「荣幸。」', affection: 15, energy: 0, next: 14 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 14 }
        ]
    },
    {
        id: 14,
        trigger: 'scene_14',
        text: '林婉清：「因为……」\n「你不怕我。」\n「所有人都怕我，除了你。」',
        choices: [
            { text: '「我为什么要怕？」', affection: 15, energy: 0, next: 15 },
            { text: '「（看着她）」', affection: 10, energy: 0, next: 15 },
            { text: '「（沉默）」', affection: 0, energy: 0, next: 15 }
        ]
    },
    {
        id: 15,
        trigger: 'scene_15',
        text: '林婉清：「你知道吗。」\n「我喜欢你。」\n「不是上下级那种喜欢。」\n「是……想和你在一起的那种喜欢。」',
        choices: [
            { text: '「我也喜欢你。」', affection: 30, energy: 0, next: 16 },
            { text: '「我……」', affection: 0, energy: 0, next: 16 },
            { text: '「（吻她）」', affection: 35, energy: 0, next: 16 }
        ]
    },
    
    // === 第三阶段：抉择（场景 16-24）===
    {
        id: 16,
        trigger: 'scene_16',
        text: '林婉清看着你，等待你的回答。\n\n她的表情很认真，也很紧张。',
        choices: [
            { text: '「我们在一起吧。」', affection: 30, energy: 0, next: 17 },
            { text: '「给我点时间。」', affection: -10, energy: 0, next: 17 },
            { text: '「我们还是朋友吧。」', affection: -30, energy: 0, next: 17 }
        ]
    },
    {
        id: 17,
        trigger: 'scene_17',
        text: '林婉清：「我……」\n「我可以抱抱你吗？」',
        choices: [
            { text: '（抱住她）', affection: 20, energy: 0, next: 18 },
            { text: '「（后退）」', affection: -20, energy: 0, next: 18 },
            { text: '「（沉默）」', affection: -10, energy: 0, next: 18 }
        ]
    },
    {
        id: 18,
        trigger: 'scene_18',
        text: '林婉清靠在你怀里。\n\n林婉清：「我等这句话很久了。」',
        choices: [
            { text: '「我也是。」', affection: 15, energy: 0, next: 19 },
            { text: '「（摸摸她的头）」', affection: 15, energy: 0, next: 19 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 19 }
        ]
    },
    {
        id: 19,
        trigger: 'scene_19',
        text: '你们在一起了。\n\n之后的日子，你经常去林氏集团。\n\n林婉清：「来了。」\n「坐。」',
        choices: [
            { text: '「（坐下）」', affection: 5, energy: 0, next: 20 },
            { text: '「（抱抱她）」', affection: 15, energy: 0, next: 20 },
            { text: '「（微笑）」', affection: 8, energy: 0, next: 20 }
        ]
    },
    {
        id: 20,
        trigger: 'scene_20',
        text: '林婉清：「我爸妈……想见见你。」\n「你……愿意吗？」',
        choices: [
            { text: '「好啊。」', affection: 15, energy: 30, next: 21 },
            { text: '「太快了吧。」', affection: -10, energy: 0, next: 21 },
            { text: '「我还没准备好。」', affection: -5, energy: 0, next: 21 }
        ]
    },
    {
        id: 21,
        trigger: 'scene_21',
        text: '你来到林家。\n\n豪华的别墅。\n\n林婉清爸爸：「你是做什么工作的？」',
        choices: [
            { text: '如实回答', affection: 5, energy: 0, next: 22 },
            { text: '说得体面一点', affection: 10, energy: 0, next: 22 },
            { text: '紧张得说不出话', affection: -5, energy: 0, next: 22 }
        ]
    },
    {
        id: 22,
        trigger: 'scene_22',
        text: '饭后。\n\n林婉清送你到门口。\n\n林婉清：「今天……谢谢你。」\n「我爸妈挺喜欢你的。」',
        choices: [
            { text: '「我也喜欢你爸妈。」', affection: 10, energy: 0, next: 23 },
            { text: '「你爸妈很好。」', affection: 5, energy: 0, next: 23 },
            { text: '「累死了。」', affection: -5, energy: 0, next: 23 }
        ]
    },
    {
        id: 23,
        trigger: 'scene_23',
        text: '一个月后。\n\n林婉清接到一个电话，脸色变了。\n\n林婉清：「……好，我知道了。」\n「我考虑一下。」',
        choices: [
            { text: '「怎么了？」', affection: 5, energy: 0, next: 24 },
            { text: '「（等她主动说）」', affection: 0, energy: 0, next: 24 },
            { text: '「不想说就算了。」', affection: -5, energy: 0, next: 24 }
        ]
    },
    {
        id: 24,
        trigger: 'scene_24',
        text: '林婉清：「有个公司……想收购我们。」\n「但是……」\n「我……不知道该怎么办。」',
        choices: [
            { text: '「卖啊，这是机会。」', affection: -10, energy: 0, next: 25 },
            { text: '「那就别卖。」', affection: -5, energy: 0, next: 25 },
            { text: '「你自己决定。」', affection: 5, energy: 0, next: 25 }
        ]
    },
    {
        id: 25,
        trigger: 'scene_25',
        text: '林婉清沉默了很久。\n\n林婉清：「我以为……你会让我留下来。」',
        choices: [
            { text: '「我不想束缚你。」', affection: 10, energy: 0, next: 26 },
            { text: '「留下来吧。」', affection: 15, energy: 0, next: 26 },
            { text: '「随便你。」', affection: -20, energy: 0, next: 26 }
        ]
    },
    {
        id: 26,
        trigger: 'scene_26',
        text: '林婉清看着你，眼泪掉了下来。\n\n林婉清：「我……不卖了。」\n「我想留下来。」\n「因为……」',
        choices: [
            { text: '「因为什么？」', affection: 5, energy: 0, next: 27 },
            { text: '（抱住她）', affection: 15, energy: 0, next: 27 },
            { text: '「（沉默）」', affection: -5, energy: 0, next: 27 }
        ]
    },
    {
        id: 27,
        trigger: 'scene_27',
        text: '林婉清：「因为我喜欢你。」\n「很喜欢很喜欢。」\n「不想离开你。」',
        choices: [
            { text: '「我也喜欢你。」', affection: 20, energy: 0, next: 28 },
            { text: '「我……」', affection: 0, energy: 0, next: 28 },
            { text: '「（吻她）」', affection: 25, energy: 0, next: 28 }
        ]
    },
    {
        id: 28,
        trigger: 'scene_28',
        text: '你们在一起了。\n\n之后的日子，平淡而幸福。\n\n林婉清继续当总裁，你继续工作。',
        choices: [
            { text: '「这样真好。」', affection: 10, energy: 0, next: 29 },
            { text: '「我们结婚吧。」', affection: 20, energy: 0, next: 30 },
            { text: '「养只猫吧。」', affection: 10, energy: 0, next: 31 }
        ]
    },
    {
        id: 29,
        trigger: 'scene_29',
        text: '一年后。\n\n林婉清在公司向你求婚。\n\n林婉清：「你愿意吗？」',
        choices: [
            { text: '「我愿意。」', affection: 30, energy: 0, ending: 'he' },
            { text: '「我……」', affection: -10, energy: 0, ending: 'ne' },
            { text: '「再给我点时间。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    },
    {
        id: 30,
        trigger: 'scene_30',
        text: '你们结婚了。\n\n在上海买了房子，养了一只猫。\n\n林婉清继续当总裁，你继续工作。',
        choices: [
            { text: '「这就是幸福吧。」', affection: 20, energy: 0, ending: 'he' },
            { text: '「有点累。」', affection: -5, energy: 0, ending: 'ne' },
            { text: '「挺好的。」', affection: 10, energy: 0, ending: 'he' }
        ]
    },
    {
        id: 31,
        trigger: 'scene_31',
        text: '你们养了一只猫，叫小清。\n\n猫很可爱，林婉清经常抱着它。\n\n生活平淡而温馨。',
        choices: [
            { text: '「这样真好。」', affection: 15, energy: 0, ending: 'he' },
            { text: '「猫比我受宠。」', affection: 5, energy: 0, ending: 'he' },
            { text: '「有点无聊。」', affection: -5, energy: 0, ending: 'ne' }
        ]
    }
];

// ===== 林婉清线结局定义 =====
const LINWANQING_ENDINGS = {
    he: {
        title: '【林婉清·势均力敌】',
        text: '你们在一起了。\n\n她依然是那个强势的总裁。\n\n但在你面前，她会卸下所有防备。\n\n外派期结束后，你选择留在上海。\n\n因为她在这里。\n\n—— 势均力敌，才是最好的爱情 ——',
        achievement: '【总裁的软肋】'
    },
    ne: {
        title: '【林婉清·合作伙伴】',
        text: '你们还是朋友。\n\n工作关系很好，但私下无交集。\n\n她继续当总裁，你继续工作。\n\n有些遗憾，但也许是最好的结局。\n\n—— 最佳拍档 ——',
        achievement: '【最佳拍档】'
    },
    be: {
        title: '【林婉清·会议结束】',
        text: '你拒绝了她的表白。\n\n项目结束了。\n\n你们再也没见过。\n\n后来听说她结婚了。\n\n对方是个和她一样强势的人。\n\n—— 项目结束，你也结束了 ——',
        achievement: '【你拒绝了最好的 offer】'
    }
};
