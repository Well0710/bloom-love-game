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
