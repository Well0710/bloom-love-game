// ===== 《Bloom》叙事情节数据 V2 =====
// 完整分支叙事系统：突发事件 + 两难选择 + 好感度阈值
// 兼容 game-v3.html 的 STORY_NODES 结构
// ====================================

// ========== 新地点系统 ==========
const EXPLORATION_LOCATIONS = {
    gym: {
        id: 'gym', name: '健身房', icon: '💪',
        desc: '落地窗前，阳光洒在跑步机上。空气中弥漫着汗水和活力。',
        possibleChars: ['xiayang', 'luxiao'],
        sceneClass: 'scene-fitness'
    },
    park: {
        id: 'park', name: '梧桐公园', icon: '🌳',
        desc: '斑驳的树影，古老的梧桐树下。风吹过，带来沙沙的声响。',
        possibleChars: ['sujingyi', 'wenya'],
        sceneClass: 'scene-park'
    },
    cafe: {
        id: 'cafe', name: '街角咖啡店', icon: '☕',
        desc: '咖啡香与爵士乐交织。窗边的位置可以看到街景。',
        possibleChars: ['luxiao', 'sujingyi'],
        sceneClass: 'scene-cafe'
    },
    restaurant: {
        id: 'restaurant', name: '法餐厅', icon: '🍷',
        desc: '烛光摇曳，优雅低调。每一道菜都像一件艺术品。',
        possibleChars: ['luxiao'],
        sceneClass: 'scene-dinner'
    },
    art_gallery: {
        id: 'art_gallery', name: '艺术画廊', icon: '🎨',
        desc: '现代与古典的碰撞。墙上挂满了各种风格的作品。',
        possibleChars: ['wenya'],
        sceneClass: 'scene-gallery'
    },
    hospital: {
        id: 'hospital', name: '医院门口', icon: '🏥',
        desc: '深夜的医院门口，灯光昏暗。疲惫的身影进进出出。',
        possibleChars: ['sujingyi'],
        sceneClass: 'scene-hospital'
    },
    office_lobby: {
        id: 'office_lobby', name: '写字楼大堂', icon: '🏢',
        desc: '忙碌的都市节奏。西装革履的人们来来往往。',
        possibleChars: ['linwanqing'],
        sceneClass: 'scene-office'
    },
    convenience_store: {
        id: 'convenience_store', name: '便利店', icon: '🏪',
        desc: '24小时的温暖灯光。货架上摆满了各种食物。',
        possibleChars: [],
        sceneClass: 'scene-store',
        noChar: true
    },
    morning_run: {
        id: 'morning_run', name: '晨跑路线', icon: '🏃',
        desc: '清晨的街道，空气清新。汗水和晨光交织。',
        possibleChars: ['xiayang'],
        sceneClass: 'scene-morning'
    },
    gallery_cafe: {
        id: 'gallery_cafe', name: '画廊咖啡角', icon: '🖼️',
        desc: '艺术与咖啡的邂逅。空气中弥漫着文艺的气息。',
        possibleChars: ['wenya', 'luxiao'],
        sceneClass: 'scene-gallery'
    }
};

// ========== 温雅线 V2 ==========
const WENYA_STORIES = {
    intro_meet: {
        scene: '搬进新家的第一天，你拆完最后一个纸箱。窗外的梧桐树影投在墙上，风一吹就晃。\n\n走廊里传来轻轻的脚步声——停在了隔壁门口。',
        dialogue: '你好，我是隔壁新搬来的。',
        charReveal: true,
        choices: [
            { text: '你好，我是温雅。以后请多关照。', delta: 5, next: 'first_talk' },
            { text: '……嗯。（点头，没多说）', delta: 0, next: 'cold_start' }
        ]
    },
    first_talk: {
        scene: '温雅微微低头，笑了一下。\n\n「请多关照。那个便利贴是给房东阿姨的……她经常忘记带伞。」\n\n她往后退了一步，把画稿抱紧了一点。',
        dialogue: '你的画很好看。',
        choices: [
            { text: '有机会可以看看你的画吗？', delta: 8, next: 'art_interest' },
            { text: '改天一起吃饭？', delta: 5, next: 'dinner_invite' }
        ]
    },
    cold_start: {
        scene: '温雅愣了一下，似乎没想到你会这么冷淡。\n\n她点点头，没有再说话。门轻轻关上。\n\n……气氛有点尴尬。',
        dialogue: '……打扰了。',
        choices: [
            { text: '等等，我想重新认识一下', delta: 3, next: 'first_talk' },
            { text: '（算了，各过各的）', delta: -5, next: 'ignore_path' }
        ]
    },
    art_interest: {
        scene: '温雅的眼睛亮了一下。\n\n「你……看得出来？」\n\n她下意识地把画稿往怀里收了收。\n\n「只是随便画的……不是专业的。你呢？是做什么工作的？」',
        dialogue: '我是咨询顾问，刚接手这边的项目。',
        choices: [
            { text: '有空的话，可以教我画画吗？', delta: 10, next: 'art_lesson' },
            { text: '那改天一起吃饭？', delta: 5, next: 'dinner_invite' }
        ]
    },
    dinner_invite: {
        scene: '温雅笑了一下——很淡，但很真诚。\n\n「好。不过我不太会聊天……大多数时候都在画画。」\n\n她的声音很轻，像怕惊扰了什么。',
        dialogue: '没关系，我也不是很会说话。',
        choices: [
            { text: '那我以后多来敲门？', delta: 8, next: 'closer' },
            { text: '保持邻居关系就好', delta: 0, next: 'neighbor_path' }
        ]
    },
    art_lesson: {
        scene: '温雅有点惊讶，但很快笑了——那是你第一次看到她笑。\n\n「好……不过我教得不好。你不要嫌弃。」\n\n她的眼睛里有了一点期待的光。\n\n「周末可以吗？」',
        dialogue: '不会的。我很期待。',
        choices: [
            { text: '那就说定了？', delta: 10, next: 'lesson_appointed' },
            { text: '再看看吧，我不确定有没有空', delta: -10, next: 'lesson_decline' }
        ]
    },
    lesson_decline: {
        scene: '温雅的眼神暗了一下。\n\n「……好。那下次吧。」\n\n她转身进门，动作比平时快了一点。门关上的那一刻，你好像听到了轻轻的叹息。',
        dialogue: '……那我先回去了。',
        choices: [
            { text: '等等，我其实很想去的', delta: 8, next: 'lesson_appointed' },
            { text: '（算了，也许我们不合适）', delta: -5, next: 'ignore_path' }
        ]
    },
    closer: {
        scene: '你们偶尔会在走廊里遇到。\n\n每次温雅看到你，都会微微一笑。有时候她会送你她做的曲奇，有时候你会给她带便利店的酸奶。\n\n那种感觉……像是春天慢慢靠近。',
        dialogue: '今天做了什么好吃的？',
        choices: [
            { text: '一起吃吧？', delta: 8, next: 'share_food' },
            { text: '改天吧，今天有点忙', delta: -3, next: 'cold_start' }
        ]
    },
    neighbor_path: {
        scene: '你们保持着礼貌的邻居关系。\n\n偶尔在走廊里遇到，点头微笑，然后各自进门。\n\n隔壁的钢琴声还是会响起，但总是很轻，像是在试探什么。',
        dialogue: '……晚安。',
        choices: [
            { text: '晚安。改天一起吃饭？', delta: 5, next: 'dinner_invite' },
            { text: '（算了，不打扰她了）', delta: 0, next: 'ending_ne' }
        ]
    },
    share_food: {
        scene: '温雅愣了一下，然后慢慢点头。\n\n「……好。」\n\n她从屋里拿出一个小盒子，里面是自制的手工饼干。包装很简单，但摆得很整齐。\n\n「我……不太会做甜食。你尝尝看？」',
        dialogue: '看起来很用心。（拿起一块）',
        choices: [
            { text: '很好吃！可以教我吗？', delta: 10, next: 'art_lesson' },
            { text: '你经常自己做这些吗？', delta: 5, next: 'her_story' }
        ]
    },
    her_story: {
        scene: '温雅低下头，手指无意识地摩挲着盒子边缘。\n\n「嗯……一个人住嘛，总要找点事做。」\n\n她的声音很淡，像是在说一件很遥远的事。\n\n「画画也是。发呆也是。」',
        dialogue: '一个人住很久了吗？',
        requiresAttitude: 30,
        choices: [
            { text: '以后可以多来找我聊天', delta: 8, next: 'trust_build' },
            { text: '那挺自由的', delta: 0, next: 'share_food' }
        ]
    },
    trust_build: {
        scene: '温雅抬起头，看着你。\n\n那双眼睛很安静，但里面有一种你没见过的光。\n\n「……你是第一个这么说的。」\n\n她把头转向窗外，声音很轻。',
        dialogue: '大多数人都觉得一个人很……可怜。',
        choices: [
            { text: '一个人也可以很充实', delta: 10, next: 'heart_open' },
            { text: '习惯了就好', delta: 3, next: 'share_food' }
        ]
    },
    heart_open: {
        scene: '温雅沉默了很久。\n\n窗外的梧桐叶被风吹动，光影在她脸上晃动。\n\n「……谢谢你。」\n\n她终于转过头，对你笑了。那是一个很淡、很轻的笑容。但你知道，这是她真心的笑。',
        dialogue: '你是一个很特别的人。',
        requiresAttitude: 50,
        choices: [
            { text: '我可以继续了解你吗？', delta: 10, next: 'confess_ready' },
            { text: '（微笑，没说话）', delta: 5, next: 'share_food' }
        ]
    },
    lesson_appointed: {
        scene: '周末，你敲开了温雅的门。\n\n她穿着一件简单的白T恤和背带裤，围裙上沾着颜料。手上有淡淡的彩色痕迹。\n\n「你来了……请进。」\n\n画室里弥漫着松节油的味道，阳光从窗户洒进来。',
        dialogue: '你的画室好温馨。',
        choices: [
            { text: '我可以经常来吗？', delta: 10, next: 'regular_visit' },
            { text: '这幅画是你画的吗？', delta: 5, next: 'painting_discuss' }
        ]
    },
    painting_discuss: {
        scene: '温雅带你走到画布前。\n\n那是一幅未完成的画——梧桐树的枝叶，斑驳的光影。\n\n「还没画完……总觉得少了点什么。」\n\n她歪着头看着画，若有所思。',
        dialogue: '也许是因为还没遇到对的人。',
        choices: [
            { text: '……什么意思？', delta: 5, next: 'regular_visit' },
            { text: '那我可以当你模特吗？', delta: 10, next: 'model_request' }
        ]
    },
    model_request: {
        scene: '温雅愣了一下，然后脸微微红了。\n\n「你……认真的？」\n\n她低下头，手指不安地绞着围裙带子。\n\n「我……我没画过人像。可能会画不好。」',
        dialogue: '没关系，我相信你。',
        requiresAttitude: 50,
        choices: [
            { text: '而且我想一直留在这里', delta: 15, next: 'confess_ready' },
            { text: '就试试看吧', delta: 5, next: 'regular_visit' }
        ]
    },
    regular_visit: {
        scene: '从那以后，你经常去温雅的画室。\n\n有时候她会教你调色，有时候你们一起听音乐，有时候只是安静地各做各的事。\n\n那种感觉……像是找到了一个可以停下来的地方。',
        dialogue: '今天想画什么？',
        choices: [
            { text: '画你吧。', delta: 10, next: 'heart_touch' },
            { text: '画我们吧。', delta: 15, next: 'confess_ready' }
        ]
    },
    heart_touch: {
        scene: '温雅的手停了一下。\n\n「……我吗？」\n\n她抬起头，看着你。那双眼睛里有一种你没见过的情绪——不是悲伤，是一种很深的、说不清的东西。',
        dialogue: '你总是画风景，从来不画人。',
        requiresAttitude: 70,
        choices: [
            { text: '因为没遇到想画的人', delta: 10, next: 'confess_ready' },
            { text: '现在遇到了', delta: 15, next: 'ending_he' }
        ]
    },
    ignore_path: {
        scene: '时间一天天过去。\n\n你和温雅几乎没有交集。隔壁的钢琴声还是会响起，但你们再也没有说过话。\n\n有时候你在走廊里闻到曲奇的香味，但那已经是别人家的了。',
        dialogue: '……',
        choices: [
            { text: '（主动去敲门）', delta: 5, next: 'first_talk' },
            { text: '（就这样吧）', delta: 0, next: 'ending_be' }
        ]
    },
    rainy_night: {
        scene: '深夜，你被雨声惊醒。\n\n窗外下着大雨，闪电划过天空。你想起温雅——她出门了吗？带伞了吗？\n\n你走到门口，发现她的门缝下透出微弱的光。',
        event: true,
        choices: [
            { text: '去敲她的门', delta: 5, next: 'rainy_rescue' },
            { text: '算了，太晚了', delta: -5, next: 'rainy_ignore' }
        ]
    },
    rainy_rescue: {
        scene: '门开了。\n\n温雅站在门口，穿着一件单薄的睡裙。头发有点乱，眼睛下面有淡淡的青黑。\n\n「……怎么了？」\n\n她看到是你，有点惊讶。',
        dialogue: '下雨了，你还好吗？',
        choices: [
            { text: '我这里有伞，要吗？', delta: 8, next: 'trust_build' },
            { text: '睡不着，想找人聊聊', delta: 10, next: 'heart_open' }
        ]
    },
    rainy_ignore: {
        scene: '你躺回床上，雨声渐渐变得模糊。\n\n第二天早上，你看到温雅门口放着一把湿漉漉的伞。\n\n她没有看你。你们擦肩而过，像两个陌生人。',
        dialogue: '……',
        choices: [
            { text: '昨天……还好吗？', delta: 3, next: 'cold_start' },
            { text: '（算了）', delta: -5, next: 'ending_be' }
        ]
    },
    confession_scene: {
        scene: '深夜，你们坐在阳台上。风很轻，吹过来的时候带着梧桐叶的沙沙声。温雅抱着膝盖，看着远处的灯火。\n\n你知道，现在就是那个时刻。',
        dialogue: '温雅，其实我……',
        requiresAttitude: 80,
        choices: [
            { text: '我喜欢你。', delta: 15, next: 'ending_he', isConfession: true },
            { text: '……没什么。晚安。', delta: -10, next: 'ending_ne' }
        ]
    },
    ending_he: {
        scene: '温雅伸出手，握住了你的手。\n\n她的手有点凉，但握得很紧。\n\n「那……我们试试看。」\n\n她的眼眶红了，但嘴角是弯的。\n\n窗外，梧桐叶在风里沙沙响。',
        dialogue: '💕 温雅线 HE结局 - 一起开花',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_ne: {
        scene: '你们偶尔会在走廊里遇到。\n\n温雅还是会给你送曲奇，还是会在深夜弹琴。只是你们的关系停在了"最好的朋友"这个位置。\n\n有些话，也许永远都不会说出口。',
        dialogue: '💔 温雅线 NE结局 - 最好的朋友',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_be: {
        scene: '你一个人站在走廊里。\n\n隔壁的灯灭了。钢琴声也消失了。梧桐叶还在落，但再也没有人为你弹那首夜曲了。\n\n有些机会，错过了就再也没有了。',
        dialogue: '💔 温雅线 BE结局 - 错过',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    }
};

// ========== 夏阳线 V2 ==========
const XIAYANG_STORIES = {
    intro_meet: {
        scene: '你办了一张附近健身房的月卡。第一天到了。\n\n角落里，一个扎着高马尾的女生正在做引体向上——是的，引体向上。她的运动背心已经被汗浸透了，但表情很专注。\n\n她注意到你，跳下单杠，走过来。',
        dialogue: '新来的？一起练！',
        charReveal: true,
        choices: [
            { text: '好！我是新手，多关照！', delta: 5, next: 'friendly_start' },
            { text: '你力气好大！是怎么练的？', delta: 8, next: 'interested_start' },
            { text: '不用了，我自己练就行', delta: 0, next: 'cold_start' }
        ]
    },
    friendly_start: {
        scene: '夏阳从单杠上跳下来，走到你面前。近距离看，她比想象中更高。\n\n「新 手好啊！我最喜欢带新人了！走，我带你认识一下器械！」\n\n她拉着你往器械区走，马尾辫在身后甩来甩去。',
        dialogue: '你每天都这么练？不觉累吗？',
        choices: [
            { text: '清华学霸也会自卑啊？', delta: 5, next: 'smile_moment' },
            { text: '那你以后带我一起练？', delta: 8, next: 'running_together' }
        ]
    },
    interested_start: {
        scene: '夏阳的眼睛亮了。她用手背擦了擦额头的汗，笑得很爽朗。\n\n「你眼光不错啊！我是练体育的，现在在清华读研究生。运动人体科学方向。」\n\n她挠了挠头，有点不好意思。',
        dialogue: '四肢发达怎么了？厉害啊！',
        choices: [
            { text: '能加个微信吗？以后一起练', delta: 10, next: 'wechat_exchange' },
            { text: '有空的话一起跑步？', delta: 8, next: 'running_together' }
        ]
    },
    cold_start: {
        scene: '夏阳愣了一下，但很快又笑了。那种笑容像阳光一样灿烂。\n\n「行！有性格！那你自己练，有问题随时找我啊！」\n\n她转身回到器械区，继续她的训练。',
        dialogue: '……谢谢。',
        choices: [
            { text: '（默默观察她的训练姿势）', delta: 2, next: 'observe' },
            { text: '（其实也想一起练）', delta: 5, next: 'friendly_start' }
        ]
    },
    smile_moment: {
        scene: '夏阳笑了，笑得很爽朗。\n\n「哈哈哈，你还挺会说话的。」\n\n她用手背擦了擦额头的汗。「其实也不是自卑啦，就是……有时候会觉得自己不够好。大家都觉得练体育的人头脑简单嘛。」',
        dialogue: '你已经很不错了。',
        choices: [
            { text: '那改天一起跑步？', delta: 8, next: 'running_together' },
            { text: '有空一起吃饭？', delta: 5, next: 'dinner_date' }
        ]
    },
    running_together: {
        scene: '夏阳的眼睛亮了。\n\n「真的？那明天早上六点，老地方见！」\n\n她笑得像阳光一样灿烂。那种活力，像是会传染的。\n\n「说好的不见不散啊！」',
        dialogue: '好，不见不散！',
        choices: [
            { text: '其实我……挺喜欢和你在一起的', delta: 10, next: 'confess_ready' },
            { text: '明天见！', delta: 5, next: 'morning_run' }
        ]
    },
    wechat_exchange: {
        scene: '夏阳爽快地拿出手机。\n\n「好嘞！我叫夏阳，你呢？」\n\n她扫描了你的二维码，头像是她在跑道上冲刺的照片。\n\n「记得备注啊，不然我会忘记的！」',
        dialogue: '我叫……，以后多联系。',
        choices: [
            { text: '晚上一起吃饭？', delta: 8, next: 'dinner_date' },
            { text: '有空一起跑步？', delta: 5, next: 'running_together' }
        ]
    },
    observe: {
        scene: '你注意到夏阳训练很有规律。\n\n每做完一组，她会停下来看计时器，然后深吸一口气，再继续下一组。做完最后一组，她躺在地上大笑起来。\n\n那种笑容……真的很耀眼。',
        dialogue: '笑什么呢？',
        choices: [
            { text: '（递过毛巾和水）', delta: 8, next: 'kind_moment' },
            { text: '练得真认真。', delta: 5, next: 'running_together' }
        ]
    },
    kind_moment: {
        scene: '夏阳愣了一下，然后接过毛巾，笑了。\n\n「你这人……还挺细心的。」\n\n她看着你，眼睛里有一点不一样的东西。\n\n「……谢谢你啊。」',
        dialogue: '应该的。',
        choices: [
            { text: '下次一起吃饭？', delta: 8, next: 'dinner_date' },
            { text: '那明天继续？', delta: 5, next: 'morning_run' }
        ]
    },
    dinner_date: {
        scene: '你们在附近的咖啡店坐下。夏阳脱掉了运动外套，穿着简单的白T恤，笑容还是很灿烂。\n\n「谢谢你今天请我喝咖啡！」\n\n她喝了一大口水，用手背擦了擦嘴。',
        dialogue: '下次我请你吃饭。',
        choices: [
            { text: '其实……我挺喜欢你的。', delta: 10, next: 'confess_ready' },
            { text: '下次见！', delta: 5, next: 'morning_run' }
        ]
    },
    morning_run: {
        scene: '第二天早上，你们又见面了。\n\n夏阳跑过来，马尾辫在身后甩来甩去。\n\n「早！你真的来了！」\n\n清晨的阳光照在她脸上，她的笑容比太阳还灿烂。',
        dialogue: '说好的不见不散嘛。',
        choices: [
            { text: '（握住她的手）', delta: 10, next: 'confess_ready' },
            { text: '一起跑？', delta: 5, next: 'morning_run_2' }
        ]
    },
    morning_run_2: {
        scene: '你们一起跑了五公里。\n\n夏阳跑在前面，马尾辫随风飘动。你跟在后面，看着她的背影。\n\n她跑完了，回头看你，笑得很灿烂。\n\n「你……不行啊！」',
        dialogue: '下次我一定跑过你！',
        choices: [
            { text: '（追上她）', delta: 10, next: 'confess_ready' },
            { text: '等我练练', delta: 5, next: 'training_day' }
        ]
    },
    training_day: {
        scene: '从那以后，你每天早上都来健身房。\n\n夏阳有时候会教你，有时候会和一起跑。\n\n那种感觉……像是回到了学生时代，和喜欢的人一起上学。',
        dialogue: '今天感觉怎么样？',
        requiresAttitude: 40,
        choices: [
            { text: '有你在就有动力', delta: 10, next: 'heart_open' },
            { text: '累但开心', delta: 5, next: 'running_together' }
        ]
    },
    heart_open: {
        scene: '夏阳停下脚步，转过身看着你。\n\n清晨的阳光照在她脸上，她的眼睛很亮。\n\n「……你知道吗，你是第一个这么说的人。」\n\n她的声音变轻了。',
        dialogue: '大多数人都觉得我只会动，不会想。',
        requiresAttitude: 60,
        choices: [
            { text: '你不是这样的', delta: 10, next: 'confess_ready' },
            { text: '那我们就一起变强吧', delta: 8, next: 'confess_ready' }
        ]
    },
    confess_ready: {
        scene: '夏阳站在你面前，阳光照在她脸上。\n\n她的眼睛很亮，像是有星星在里面。\n\n你知道自己要说什么了。',
        dialogue: '夏阳，其实我……',
        requiresAttitude: 70,
        choices: [
            { text: '我喜欢你。', delta: 15, next: 'ending_he', isConfession: true },
            { text: '……没什么。', delta: -10, next: 'ending_ne' }
        ]
    },
    ending_he: {
        scene: '夏阳握住你的手。\n\n「那我们……在一起？」\n\n阳光照在她脸上，她的笑容比太阳还灿烂。\n\n「你……你终于说了！」',
        dialogue: '💕 夏阳线 HE结局 - 一起跑下去',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_ne: {
        scene: '你们成为了很好的朋友。\n\n夏阳还是会约你一起跑步，一起吃饭，一起大笑。只是你们的关系停在了"最好的朋友"这个位置。\n\n有时候你会想，如果当初勇敢一点……',
        dialogue: '💔 夏阳线 NE结局 - 最好的朋友',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_be: {
        scene: '你很久没去健身房了。\n\n有时候早上经过那里，会看到夏阳在跑步。她还是那么有活力，笑得那么灿烂。\n\n但你们只是远远地看着彼此，然后各自走开。',
        dialogue: '💔 夏阳线 BE结局 - 错过',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    }
};

// ========== 苏静怡线 V2 ==========
const SUJINGYI_STORIES = {
    intro_meet: {
        scene: '你在公园的长椅上坐下，晒着太阳。\n\n远处，一个穿白大褂的女生也在长椅上。她看起来很疲惫，眼睛下面有淡淡的青黑。\n\n她注意到你，勉强笑了笑，然后继续看向远方。',
        dialogue: '……你好，你也来晒太阳？',
        charReveal: true,
        choices: [
            { text: '嗯，刚下班。你也是？', delta: 5, next: 'first_talk' },
            { text: '你看起来很累，还好吗？', delta: 8, next: 'care_moment' }
        ]
    },
    first_talk: {
        scene: '苏静怡苦笑了一下。\n\n「刚下夜班。急诊科……你懂的。」\n\n她靠在长椅上，闭上眼睛。阳光照在她脸上，她看起来终于放松了一点。',
        dialogue: '急诊科很辛苦吧？',
        choices: [
            { text: '下次我请你喝咖啡？', delta: 8, next: 'coffee_invite' },
            { text: '注意休息，身体最重要。', delta: 5, next: 'kind_words' }
        ]
    },
    care_moment: {
        scene: '苏静怡愣了一下，然后笑了——那是你第一次看到她笑。\n\n「很久没人问我这个问题了。」\n\n她的声音有点哑，像是很久没有好好休息过。',
        dialogue: '医生也要照顾好自己。',
        choices: [
            { text: '下次我给你带早餐？', delta: 10, next: 'breakfast_promise' },
            { text: '有空一起吃饭？', delta: 5, next: 'coffee_invite' }
        ]
    },
    coffee_invite: {
        scene: '苏静怡点了点头。\n\n「好……我休息的时候一般在这里。」\n\n她站起来，整理了一下白大褂。\n\n「我叫苏静怡。你呢？」',
        dialogue: '我叫……，以后多关照。',
        choices: [
            { text: '能加个微信吗？', delta: 8, next: 'wechat_exchange' },
            { text: '下次见。', delta: 5, next: 'later_meet' }
        ]
    },
    kind_words: {
        scene: '苏静怡看着你，眼神柔和了一点。\n\n「谢谢……大多数人都觉得医生不需要休息。」\n\n她站起来，伸了个懒腰。\n\n「……你的咖啡店在哪？」',
        dialogue: '就在公园旁边，很近。',
        choices: [
            { text: '一起去？', delta: 8, next: 'coffee_invite' },
            { text: '下次吧。', delta: 3, next: 'later_meet' }
        ]
    },
    breakfast_promise: {
        scene: '第二天早上，你带着早餐来到公园。\n\n苏静怡已经在长椅上了。看到你的时候，她的眼睛亮了一下。\n\n「你真的来了……」\n\n她的声音里有一种你没听过的柔软。',
        dialogue: '说了要带早餐的。',
        choices: [
            { text: '以后每天都给你带？', delta: 10, next: 'everyday_care' },
            { text: '趁热吃。', delta: 5, next: 'later_meet' }
        ]
    },
    everyday_care: {
        scene: '苏静怡愣住了。\n\n她低下头，手指无意识地摩挲着早餐的袋子。\n\n「……你知道吗，我很久没有被人这样对待过了。」\n\n她的声音很轻。',
        dialogue: '以后有我呢。',
        requiresAttitude: 40,
        choices: [
            { text: '你可以随时联系我', delta: 10, next: 'heart_open' },
            { text: '医生也需要被照顾', delta: 5, next: 'later_meet' }
        ]
    },
    heart_open: {
        scene: '苏静怡沉默了很久。\n\n阳光照在她脸上，她的眼睛下面还是有淡淡的青黑，但眼神里多了一些别的东西。\n\n「……你知道吗，有时候我真的很累。」',
        dialogue: '急诊室的故事',
        requiresAttitude: 50,
        choices: [
            { text: '想听你说说', delta: 10, next: 'her_story' },
            { text: '那你更要好好休息', delta: 5, next: 'later_meet' }
        ]
    },
    her_story: {
        scene: '苏静怡靠在长椅上，看着远方。\n\n「昨天晚上送来一个小孩，才七岁。抢救了三个小时，没救回来。」\n\n她的声音很平静，但你能感觉到那种压抑。\n\n「我什么也做不了。只能看着他……」',
        dialogue: '……',
        choices: [
            { text: '（握住她的手）', delta: 10, next: 'comfort_moment' },
            { text: '你做得很好', delta: 5, next: 'kind_words' }
        ]
    },
    comfort_moment: {
        scene: '苏静怡没有说话。\n\n她的手有点凉，但没有抽回去。\n\n过了很久，她轻轻叹了口气。\n\n「……谢谢你。」',
        dialogue: '我应该谢谢你才对。',
        requiresAttitude: 60,
        choices: [
            { text: '以后难过的时候可以找我', delta: 10, next: 'confess_ready' },
            { text: '吃点东西吧', delta: 5, next: 'later_meet' }
        ]
    },
    wechat_exchange: {
        scene: '苏静怡拿出手机，扫了你的二维码。\n\n「好……有休息的时候会回你。」\n\n她的声音很轻，但眼睛里有了一点期待。',
        dialogue: '那说好了。',
        choices: [
            { text: '其实……我挺喜欢你的。', delta: 10, next: 'confess_ready' },
            { text: '下次见。', delta: 5, next: 'later_meet' }
        ]
    },
    later_meet: {
        scene: '几天后，你们又见面了。\n\n苏静怡看起来比上次精神了一点，但还是带着那种淡淡的疲惫。\n\n她看到你，微微笑了一下。',
        dialogue: '今天怎么样？',
        choices: [
            { text: '想我了吗？', delta: 8, next: 'confess_ready' },
            { text: '一起走走？', delta: 5, next: 'later_meet_2' }
        ]
    },
    later_meet_2: {
        scene: '你们沿着公园的小路慢慢走着。\n\n苏静怡没有穿白大褂，穿着一件简单的米色开衫。她看起来比在医院的时候柔和了很多。\n\n「……好久没有这样散步了。」',
        dialogue: '以后可以常来。',
        choices: [
            { text: '我陪你', delta: 10, next: 'heart_open' },
            { text: '你平时都这么忙吗？', delta: 5, next: 'her_story' }
        ]
    },
    confess_ready: {
        scene: '苏静怡站在你面前，夜风吹过她的发丝。\n\n她今晚没有穿白大褂，只是一件简单的衬衫。眼睛下面的青黑淡了一些，但眼神里有一种你没见过的情绪。\n\n「……你想说什么？」',
        dialogue: '静怡，我……',
        requiresAttitude: 70,
        choices: [
            { text: '我喜欢你。', delta: 15, next: 'ending_he', isConfession: true },
            { text: '……没什么。', delta: -10, next: 'ending_ne' }
        ]
    },
    ending_he: {
        scene: '苏静怡握住了你的手。\n\n「那……我们试试看。」\n\n她的眼睛里有了一点湿润，但嘴角是弯的。\n\n阳光照在你们身上，很温暖。',
        dialogue: '💕 苏静怡线 HE结局 - 陪伴',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_ne: {
        scene: '你们偶尔会一起喝咖啡。\n\n苏静怡还是很忙，但她会抽时间回你的消息。你们的关系停在了"最好的朋友"这个位置。\n\n有些话，也许永远都不会说出口。',
        dialogue: '💔 苏静怡线 NE结局 - 平行线',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_be: {
        scene: '你很久没有苏静怡的消息了。\n\n偶尔在公园里看到穿白大褂的身影，但你们只是远远地点点头，然后各自走开。\n\n她还是那么忙，那么疲惫。只是，没有人陪在她身边了。',
        dialogue: '💔 苏静怡线 BE结局 - 错过',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    }
};

// ========== 陆潇线 V2 ==========
const LUXIAO_STORIES = {
    intro_meet: {
        scene: '你走进一家法餐厅。装修很精致，灯光昏暗。\n\n一个穿着黑色连衣裙的女人站在吧台后面，正在品酒。她抬起头看了你一眼，眼神很锐利。\n\n那种感觉，像是被人看透了一样。',
        dialogue: '一位？',
        charReveal: true,
        choices: [
            { text: '对，一位。有什么推荐？', delta: 5, next: 'recommend' },
            { text: '你看起来很专业。', delta: 8, next: 'professional_interest' }
        ]
    },
    recommend: {
        scene: '陆潇挑了挑眉。\n\n「看你是第一次来。」\n\n她倒了一杯红酒推过来。「记我账上。」\n\n「……算我请的。」',
        dialogue: '谢谢。怎么称呼？',
        choices: [
            { text: '我叫……你呢？', delta: 5, next: 'name_reveal' },
            { text: '这酒真不错。', delta: 8, next: 'wine_interest' }
        ]
    },
    professional_interest: {
        scene: '陆潇笑了一下。那种笑容很淡，但很优雅。\n\n「眼光不错。我是这家餐厅的主理人，也是主厨。」\n\n她看着你，眼神里有一种试探。\n\n「你呢？做什么的？」',
        dialogue: '咨询顾问。在附近上班。',
        choices: [
            { text: '有空常来？', delta: 8, next: 'return_visit' },
            { text: '能加个微信吗？', delta: 10, next: 'wechat_exchange' }
        ]
    },
    name_reveal: {
        scene: '陆潇放下酒杯。\n\n「陆潇。这家餐厅是我开的。」\n\n她看着你，嘴角微微上扬。\n\n「你呢？看着不像经常吃法餐的人。」',
        dialogue: '被发现了。今天第一次。',
        choices: [
            { text: '那你教我？', delta: 8, next: 'teach_moment' },
            { text: '以后会常来的。', delta: 5, next: 'return_visit' }
        ]
    },
    wine_interest: {
        scene: '陆潇的眼睛亮了一点。那是一种你没见过的光——是专业的骄傲。\n\n「你也懂酒？」\n\n她倒了一点给你。「这是勃艮第的黑皮诺。要慢慢品。」',
        dialogue: '有道理。和你一样，要慢慢了解。',
        choices: [
            { text: '（微笑）', delta: 10, next: 'teach_moment' },
            { text: '下次请我喝？', delta: 5, next: 'return_visit' }
        ]
    },
    teach_moment: {
        scene: '陆潇笑了。\n\n「有意思。」\n\n她在你对面坐下，开始讲葡萄酒的故事。你发现她讲这些的时候，整个人都在发光。\n\n「……你听得很认真。」',
        dialogue: '你讲得很好。',
        choices: [
            { text: '以后可以常来请教你吗？', delta: 10, next: 'return_visit' },
            { text: '有空一起吃饭？', delta: 5, next: 'dinner_date' }
        ]
    },
    return_visit: {
        scene: '陆潇看着你，嘴角微微上扬。\n\n「好……那我等你。」\n\n她转身回到吧台，动作很优雅。烛光照在她脸上，那种感觉很神秘。',
        dialogue: '一定。',
        choices: [
            { text: '其实……我对你很有兴趣。', delta: 10, next: 'heart_interest' },
            { text: '下次见。', delta: 5, next: 'later_visit' }
        ]
    },
    wechat_exchange: {
        scene: '陆潇拿出手机，扫了你的二维码。\n\n「好……有新品的时候会通知你。」\n\n她的语气很淡，但你看到了她眼里的一点期待。',
        dialogue: '那我等着。',
        choices: [
            { text: '不只是为了酒。', delta: 10, next: 'heart_interest' },
            { text: '下次见。', delta: 5, next: 'later_visit' }
        ]
    },
    dinner_date: {
        scene: '几天后，你又来到餐厅。\n\n陆潇看到你，挑了挑眉。「又来了？」\n\n她走过来，在你对面坐下。今晚她穿的是一件深蓝色的裙子，锁骨上有一点淡淡的香水味。',
        dialogue: '想来学习。',
        choices: [
            { text: '想你啊。', delta: 10, next: 'heart_interest' },
            { text: '来学习的。', delta: 5, next: 'later_visit' }
        ]
    },
    heart_interest: {
        scene: '陆潇的眼神变了一下。\n\n那种锐利消失了，取而代之的是一种你没见过的柔软。\n\n「……你知道吗，你和大多数人不一样。」',
        dialogue: '怎么不一样？',
        requiresAttitude: 40,
        choices: [
            { text: '我只对你感兴趣', delta: 10, next: 'heart_open' },
            { text: '怎么说？', delta: 5, next: 'her_secret' }
        ]
    },
    her_secret: {
        scene: '陆潇沉默了一会儿。\n\n「大多数人看到我，都只看到这家餐厅。或者我的身份。」\n\n她拿起酒杯，轻轻晃了晃。\n\n「你……是第一个想了解我的人。」',
        dialogue: '因为你值得被了解。',
        requiresAttitude: 50,
        choices: [
            { text: '我想知道你更多', delta: 10, next: 'heart_open' },
            { text: '你很特别', delta: 5, next: 'heart_open' }
        ]
    },
    heart_open: {
        scene: '陆潇放下酒杯，看着你。\n\n烛光照在她脸上，那双眼睛里有一点你没见过的情绪。\n\n「……你知道吗，一个人经营这家餐厅，有时候真的很累。」',
        dialogue: '我可以陪你吗？',
        requiresAttitude: 60,
        choices: [
            { text: '我可以听你说', delta: 10, next: 'confess_ready' },
            { text: '你不用一个人扛', delta: 8, next: 'confess_ready' }
        ]
    },
    later_visit: {
        scene: '几天后，你又来到餐厅。\n\n陆潇看到你，挑了挑眉。「又来了？」\n\n她的语气里有一种你没听过的情绪——是期待？',
        dialogue: '说好要常来的。',
        choices: [
            { text: '想你啊。', delta: 10, next: 'heart_interest' },
            { text: '来学习的。', delta: 5, next: 'later_visit_2' }
        ]
    },
    later_visit_2: {
        scene: '陆潇在你对面坐下。\n\n「……你每次来都很准时。」\n\n她的语气很淡，但嘴角有一点弧度。',
        dialogue: '因为你在等我。',
        requiresAttitude: 40,
        choices: [
            { text: '……我说得对吗？', delta: 8, next: 'heart_open' },
            { text: '（微笑）', delta: 5, next: 'heart_interest' }
        ]
    },
    confess_ready: {
        scene: '陆潇站在你面前。\n\n烛光摇曳，她穿着那件黑色连衣裙，锁骨上有一点淡淡的香水味。\n\n她的眼睛很亮，但也很复杂。',
        dialogue: '陆潇，其实我……',
        requiresAttitude: 70,
        choices: [
            { text: '我喜欢你。', delta: 15, next: 'ending_he', isConfession: true },
            { text: '……没什么。', delta: -10, next: 'ending_ne' }
        ]
    },
    ending_he: {
        scene: '陆潇握住你的手。\n\n「那……共进晚餐？」\n\n她的嘴角是弯的，眼神很温柔。烛光照在她脸上，很美。\n\n「这是我们第一次正式的约会。」',
        dialogue: '💕 陆潇线 HE结局 - 共进晚餐',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_ne: {
        scene: '你们偶尔会一起品酒。\n\n陆潇还是会给你推荐好酒，但你们的关系停在了"好吃的老板娘"这个位置。\n\n她还是会优雅地微笑，但你感觉，那里面少了一些什么。',
        dialogue: '💔 陆潇线 NE结局 - 好吃的老板娘',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_be: {
        scene: '你很久没去那家餐厅了。\n\n偶尔经过的时候，会看到陆潇站在吧台后面。她还是那么优雅，那么精致。\n\n但你们只是远远地点点头，然后各自走开。',
        dialogue: '💔 陆潇线 BE结局 - 错过',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    }
};

// ========== 林婉清线 V2（修正版 - 客户非上司）==========
const LINWANQING_STORIES = {
    intro_meet: {
        scene: '你第一次来这个客户公司开会。\n\n在会议室等待的时候，一个穿职业套装的女人走了进来。她的短发很干练，眼神里带着一种让人难以接近的锐利。\n\n「你好，我是林婉清，这个项目的对接人。」',
        dialogue: '林女士好，我是负责这个项目的顾问。',
        charReveal: true,
        choices: [
            { text: '林女士好。我叫……', delta: 5, next: 'professional_start' },
            { text: '早就听说您了，很荣幸。', delta: 8, next: 'professional_interest' }
        ]
    },
    professional_start: {
        scene: '林婉清点点头，表情很平静。\n\n「嗯。坐吧。」\n\n她翻开文件夹，开始讲解项目需求。她的声音很稳，逻辑很清晰，但眼睛下面有淡淡的青黑。',
        dialogue: '林女士看起来很忙。',
        choices: [
            { text: '要注意休息啊', delta: 5, next: 'care_moment' },
            { text: '您的思路很清晰', delta: 8, next: 'professional_recognition' }
        ]
    },
    professional_interest: {
        scene: '林婉清挑了挑眉，嘴角有一点弧度。\n\n「哦？你听说过我？」\n\n她看着你，眼神里有一种你没见过的情绪——是好奇？还是试探？',
        dialogue: '贵公司很有名。',
        choices: [
            { text: '您看起来很专业', delta: 8, next: 'professional_recognition' },
            { text: '能跟您合作是我的荣幸', delta: 5, next: 'care_moment' }
        ]
    },
    professional_recognition: {
        scene: '林婉清的眼神变了一下。\n\n「……谢谢。」\n\n她的声音还是那么平稳，但你看到她的嘴角弯了一点。\n\n「大多数人都只看到我的职位。」',
        dialogue: '我只看到你这个人。',
        choices: [
            { text: '您看起来很疲惫', delta: 5, next: 'care_moment' },
            { text: '期待这次合作', delta: 3, next: 'later_meeting' }
        ]
    },
    care_moment: {
        scene: '林婉清的手停了一下。\n\n她抬起头，看着你。那双眼睛很复杂——有一点惊讶，有一点警惕，还有一点你没见过的柔软。\n\n「……你是第一个这么说的人。」',
        dialogue: '大多数人都只关心项目。',
        requiresAttitude: 20,
        choices: [
            { text: '人比项目重要', delta: 10, next: 'heart_interest' },
            { text: '只是顺便提醒', delta: 0, next: 'later_meeting' }
        ]
    },
    heart_interest: {
        scene: '林婉清沉默了一会儿。\n\n她把文件夹合上，看着你。\n\n「……你知道吗，有时候我真的很累。」\n\n她的声音很轻，像是在自言自语。',
        dialogue: '为什么？',
        requiresAttitude: 30,
        choices: [
            { text: '可以跟我说说吗', delta: 10, next: 'her_story' },
            { text: '工作压力很大吗', delta: 5, next: 'her_story' }
        ]
    },
    her_story: {
        scene: '林婉清靠在椅背上，看向窗外。\n\n「这个公司是我父亲留下的。我接手的时候，差一点就破产了。」\n\n她的声音很平静，但你能感觉到那背后的重量。\n\n「我用了五年，才把它救回来。」',
        dialogue: '……你很厉害。',
        requiresAttitude: 40,
        choices: [
            { text: '一个人扛着很累吧', delta: 10, next: 'heart_open' },
            { text: '难怪您这么拼', delta: 5, next: 'later_meeting' }
        ]
    },
    heart_open: {
        scene: '林婉清转过头，看着你。\n\n那双眼睛里有一种你没见过的脆弱——那是一种只有在深夜、独自一人的时候才会流露出来的脆弱。\n\n「……你是第一个这样说的人。」',
        dialogue: '我可以陪着你。',
        requiresAttitude: 50,
        choices: [
            { text: '以后难过的时候可以找我', delta: 10, next: 'confess_ready' },
            { text: '你不用一个人扛', delta: 8, next: 'confess_ready' }
        ]
    },
    later_meeting: {
        scene: '项目会议结束后，林婉清站起来。\n\n「今天的讨论很顺利。下周再见。」\n\n她走到门口，忽然停下脚步。\n\n「……对了，你叫什么名字？」',
        dialogue: '我叫……，林女士。',
        choices: [
            { text: '您叫我……就好', delta: 8, next: 'heart_interest' },
            { text: '这是我的名片', delta: 5, next: 'later_meeting_2' }
        ]
    },
    later_meeting_2: {
        scene: '几天后，你又来林婉清的公司开会。\n\n会后，她忽然走过来。\n\n「……那天的问题，我想了想。」\n\n她的声音还是那么平稳，但眼神里多了一点什么。',
        dialogue: '什么问题？',
        requiresAttitude: 30,
        choices: [
            { text: '（等她继续说）', delta: 5, next: 'heart_interest' },
            { text: '您指的是？', delta: 3, next: 'later_meeting' }
        ]
    },
    confess_ready: {
        scene: '林婉清站在你面前。\n\n落地窗外是上海的夜景，灯火璀璨。她今晚没有穿职业装，而是一件简单的黑色毛衣。\n\n她的眼睛很亮，也很复杂。',
        dialogue: '婉清，我……',
        requiresAttitude: 70,
        choices: [
            { text: '我喜欢你。', delta: 15, next: 'ending_he', isConfession: true },
            { text: '……没什么。', delta: -10, next: 'ending_ne' }
        ]
    },
    ending_he: {
        scene: '林婉清握住了你的手。\n\n「那……我们试试。」\n\n她的眼睛里有了你没见过的东西——是柔软。落地窗外的夜景很美，但她的眼睛更美。\n\n「你知道吗，你是第一个让我觉得……可以不用一个人扛的人。」',
        dialogue: '💕 林婉清线 HE结局 - 选择你',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_ne: {
        scene: '项目还在继续。\n\n林婉清还是会给你发消息，但你们的关系停在了"甲方乙方"这个位置。\n\n她还是会干练地处理一切，但你感觉，那里面少了一些什么。',
        dialogue: '💔 林婉清线 NE结局 - 甲乙方',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    },
    ending_be: {
        scene: '项目结束了。\n\n你和林婉清的合作很成功，但她再也没有联系过你。\n\n偶尔在写字楼里遇到，她只是点点头，然后各自走开。',
        dialogue: '💔 林婉清线 BE结局 - 错过',
        choices: [
            { text: '（重新开始）', delta: 0, next: 'restart' }
        ],
        isEnding: true
    }
};

// ========== 导出所有故事数据 ==========
const STORY_NODES_V2 = {
    wenya: WENYA_STORIES,
    xiayang: XIAYANG_STORIES,
    sujingyi: SUJINGYI_STORIES,
    luxiao: LUXIAO_STORIES,
    linwanqing: LINWANQING_STORIES
};

// ========== 退出反应数据 ==========
const EXIT_REACTIONS = {
    wenya: {
        message: '……没关系，我知道你需要空间。',
        attitude_delta: -10,
        follow_up: {
            2: { message: '你最近很忙吗……？', attitude_delta: -5 },
            3: { message: '也许我们不太合适。', attitude_delta: -15, trigger_event: '疏远' }
        }
    },
    xiayang: {
        message: '啊？要走了？好吧……下次见！',
        attitude_delta: -10,
        follow_up: {
            2: { message: '你最近怎么不来了？', attitude_delta: -5 },
            3: { message: '算了，也许你很忙吧。', attitude_delta: -15, trigger_event: '疏远' }
        }
    },
    sujingyi: {
        message: '……好。注意休息。',
        attitude_delta: -10,
        follow_up: {
            2: { message: '你……还好吗？', attitude_delta: -5 },
            3: { message: '（消息回复变慢）', attitude_delta: -15, trigger_event: '疏远' }
        }
    },
    luxiao: {
        message: '哦？那下次见。',
        attitude_delta: -10,
        follow_up: {
            2: { message: '你最近没来餐厅？', attitude_delta: -5 },
            3: { message: '看来你很忙。', attitude_delta: -15, trigger_event: '疏远' }
        }
    },
    linwanqing: {
        message: '看来你很忙。',
        attitude_delta: -10,
        follow_up: {
            2: { message: '项目还顺利吗？', attitude_delta: -5 },
            3: { message: '看来我们需要保持距离。', attitude_delta: -15, trigger_event: '疏远' }
        }
    }
};
