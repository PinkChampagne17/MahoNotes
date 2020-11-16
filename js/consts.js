const ENVIROMENT_IS_DEVELOPMENT = window.location.host != "pinkchampagne17.github.io"
const CHARA_ICONS_URL_BASE      = ENVIROMENT_IS_DEVELOPMENT ? './img/charaicons' : 'https://cdn.jsdelivr.net/gh/pinkchampagne17/MahoNotes/img/charaicons'

const CHARAS = [
    {
        "name": "真步",
        "position": 795,
        "skills": [
            {
                "name": "童话庭院",
                "time": 18
            }
        ]
    },
    {
        "name": "璃乃",
        "position": 700,
        "skills": [
            {
                "name": "全神贯注",
                "time": 12
            },
            {
                "name": "箭之雨",
                "time": 1
            }
        ]
    },
    {
        "name": "望",
        "position": 160,
        "skills": [
            {
                "name": "演出开始",
                "time": 18
            }
        ]
    },
    {
        "name": "秋乃",
        "position": 180,
        "skills": [
            {
                "name": "意气风发斩",
                "time": 12
            },
            {
                "name": "高贵突击",
                "time": 1
            }
        ]
    },
    {
        "name": "镜华",
        "position": 810,
        "skills": [
            {
                "name": "魔力增幅",
                "time": 9
            },
            {
                "name": "宇宙蓝色闪光",
                "time": 1
            }
        ]
    },
    {
        "name": "真琴",
        "position": 165,
        "skills": [
            {
                "name": "天狼噬斩",
                "time": 18
            },
            {
                "name": "勇气呐喊",
                "time": 12
            }
        ]
    },
    {
        "name": "纯",
        "position": 135,
        "skills": [
            {
                "name": "护甲破坏",
                "time": 12
            },
            {
                "name": "炼狱火海之盾",
                "time": 1
            }
        ]
    },
    {
        "name": "莫妮卡",
        "position": 410,
        "skills": [
            {
                "name": "紫电一闪",
                "time": 1
            }
        ]
    },
    {
        "name": "亚里莎",
        "position": 625,
        "skills": [
            {
                "name": "箭贯汝身！",
                "time": 1
            }
        ]
    },
    {
        "name": "茜里",
        "position": 570,
        "skills": [
            {
                "name": "甜蜜的恶魔声援",
                "time": 18
            },
            {
                "name": "小恶魔之吻",
                "time": 12
            }
        ]
    },
    {
        "name": "雪",
        "position": 805,
        "skills": [
            {
                "name": "拜倒在我的美貌之下吧",
                "time": 18
            }
        ]
    },
    {
        "name": "美里",
        "position": 735,
        "skills": [
            {
                "name": "神圣之力",
                "time": 12
            },
            {
                "name": "修女的恩惠",
                "time": 18
            }
        ]
    },
    {
        "name": "深月",
        "position": 565,
        "skills": [
            {
                "name": "蔷薇领域",
                "time": 8
            },
            {
                "name": "血色蔷薇",
                "time": 1
            }
        ]
    },
    {
        "name": "香织",
        "position": 145,
        "skills": [
            {
                "name": "琉球犬重拳出击",
                "time": 1
            }
        ]
    },
    {
        "name": "栞",
        "position": 710,
        "skills": [
            {
                "name": "附魔之箭",
                "time": 1
            }
        ]
    },
    {
        "name": "莉玛",
        "position": 105,
        "skills": [
            {
                "name": "毛绒绒挥击",
                "time": 18
            }
        ]
    },
    {
        "name": "宫子",
        "position": 125,
        "skills": [
            {
                "name": "把你变成布丁",
                "time": 1
            }
        ]
    },
    {
        "name": "空花",
        "position": 130,
        "skills": [
            {
                "name": "神魂颠倒",
                "time": 1
            }
        ]
    },
    {
        "name": "佩可莉姆",
        "position": 155,
        "skills": [
            {
                "name": "公主突袭",
                "time": 1
            }
        ]
    },
    {
        "name": "日和莉",
        "position": 200,
        "skills": [
            {
                "name": "猫咪组合拳",
                "time": 12
            },
            {
                "name": "日和突击",
                "time": 1
            }
        ]
    },
    {
        "name": "未奏希",
        "position": 205,
        "skills": [
            {
                "name": "水球",
                "time": 90
            },
            {
                "name": "捣蛋轰炸机",
                "time": 1
            }
        ]
    },
    {
        "name": "绫音",
        "position": 210,
        "skills": [
            {
                "name": "噗吉飓风击",
                "time": 12
            },
            {
                "name": "噗吉全力挥动",
                "time": 1
            }
        ]
    },
    {
        "name": "珠希",
        "position": 215,
        "skills": [
            {
                "name": "猫猫决胜爪",
                "time": 1
            }
        ]
    },
    {
        "name": "惠理子",
        "position": 230,
        "skills": [
            {
                "name": "痴迷执念",
                "time": 12
            },
            {
                "name": "致命惩罚",
                "time": 1
            }
        ]
    },
    {
        "name": "胡桃",
        "position": 240,
        "skills": [
            {
                "name": "惊吓摇铃",
                "time": 5.5
            }
        ]
    },
    {
        "name": "姬塔",
        "position": 245,
        "skills": [
            {
                "name": "疾风剑雨",
                "time": 1
            }
        ]
    },
    {
        "name": "怜",
        "position": 250,
        "skills": [
            {
                "name": "斩刃风暴",
                "time": 1
            }
        ]
    },
    {
        "name": "静流",
        "position": 285,
        "skills": [
            {
                "name": "神圣突刺",
                "time": 1
            }
        ]
    },
    {
        "name": "美美",
        "position": 360,
        "skills": [
            {
                "name": "兔兔应援",
                "time": 12
            },
            {
                "name": "兔兔斩击",
                "time": 1
            }
        ]
    },
    {
        "name": "忍",
        "position": 365,
        "skills": [
            {
                "name": "亡灵叙述者",
                "time": 18
            },
            {
                "name": "亡魂虚弱",
                "time": 12
            }
        ]
    },
    {
        "name": "真阳",
        "position": 395,
        "skills": [
            {
                "name": "肉叉斩击",
                "time": 12
            },
            {
                "name": "伊丽莎白",
                "time": 2
            }
        ]
    },
    {
        "name": "由加莉",
        "position": 405,
        "skills": [
            {
                "name": "七重纱护",
                "time": 1
            }
        ]
    },
    {
        "name": "妮侬",
        "position": 415,
        "skills": [
            {
                "name": "忍术灼热地狱",
                "time": 1
            }
        ]
    },
    {
        "name": "美冬",
        "position": 420,
        "skills": [
            {
                "name": "飞跃枪闪",
                "time": 1.5
            }
        ]
    },
    {
        "name": "咲恋",
        "position": 430,
        "skills": [
            {
                "name": "凤凰之剑",
                "time": 1
            }
        ]
        
    },
    {
        "name": "杏奈",
        "position": 440,
        "skills": [
            {
                "name": "罗刹涅槃・极光终天冥坏破",
                "time": 1
            }
        ]
    },
    {
        "name": "可可萝",
        "position": 500,
        "skills": [
            {
                "name": "极光",
                "time": 18
            },
            {
                "name": "加速",
                "time": 12
            }
        ]
    },
    {
        "name": "铃",
        "position": 550,
        "skills": [
            {
                "name": "尝尝亲手烘焙的红豆包",
                "time": 18
            }
        ]
    },
    {
        "name": "依里",
        "position": 575,
        "skills": [
            {
                "name": "极限充能",
                "time": 12
            },
            {
                "name": "闪电标枪",
                "time": 1
            }
        ]
    },
    {
        "name": "铃奈",
        "position": 705,
        "skills": [
            {
                "name": "威力全开",
                "time": 12
            },
            {
                "name": "一箭穿心",
                "time": 1
            }
        ]
    },
    {
        "name": "伊绪",
        "position": 715,
        "skills": [
            {
                "name": "百魅惑心",
                "time": 4
            }
        ]
    },
    {
        "name": "铃莓",
        "position": 720,
        "skills": [
            {
                "name": "狂风气流卷",
                "time": 18
            },
            {
                "name": "女仆声援",
                "time": 12
            }
        ]
    },
    {
        "name": "凯露",
        "position": 750,
        "skills": [
            {
                "name": "护甲消除",
                "time": 12
            },
            {
                "name": "格林炸裂",
                "time": 1
            }
        ]
    },
    {
        "name": "初音",
        "position": 755,
        "skills": [
            {
                "name": "闪耀☆流星",
                "time": 1
            }
        ]
    },
    {
        "name": "美咲",
        "position": 760,
        "skills": [
            {
                "name": "特洛伊之眼",
                "time": 1
            }
        ]
    },
    {
        "name": "碧",
        "position": 785,
        "skills": [
            {
                "name": "蔓藤旋舞",
                "time": 1
            }
        ]
    },
    {
        "name": "千歌",
        "position": 790,
        "skills": [
            {
                "name": "激励之歌",
                "time": 12
            },
            {
                "name": "精灵庇护",
                "time": 1
            }
        ]
    },
    {
        "name": "优衣",
        "position": 800,
        "skills": [
            {
                "name": "全体治疗",
                "time": 1
            }
        ]
    },
    {
        "name": "伊莉亚",
        "position": 425,
        "skills": [
            {
                "name": "朱色之噬",
                "time": 1
            }
        ]
    },
    {
        "name": "纺希",
        "position": 195,
        "skills": [
            {
                "name": "致死束缚",
                "time": 2.5
            }
        ]
    },
    {
        "name": "佩可莉姆（夏日）",
        "position": 235,
        "skills": [
            {
                "name": "甜点时间",
                "time": 12
            },
            {
                "name": "公主浪花飞溅",
                "time": 1
            }
        ]
    },
    {
        "name": "可可萝（夏日）",
        "position": 535,
        "skills": [
            {
                "name": "海精之矛",
                "time": 12
            },
            {
                "name": "脐橙支援",
                "time": 12
            },
            {
                "name": "海洋治愈",
                "time": 1
            }
        ]
    },
    {
        "name": "铃莓（夏日）",
        "position": 775,
        "skills": [
            {
                "name": "热带假期",
                "time": 1
            }
        ]
    },
    {
        "name": "凯露（夏日）",
        "position": 780,
        "skills": [
            {
                "name": "海浪旋涡",
                "time": 12
            },
            {
                "name": "狂掷泳圈",
                "time": 1
            }
        ]
    },
    {
        "name": "美冬（夏日）",
        "position": 495,
        "skills": [
            {
                "name": "利維坦之槍",
                "time": 18
            }
        ]
    },
    {
        "name": "珠希（夏日）",
        "position": 225,
        "skills": [
            {
                "name": "破冰",
                "time": 12
            },
            {
                "name": "猫猫夏日狂欢",
                "time": 1
            }
        ]
    },
    {
        "name": "智",
        "position": 220,
        "skills": [
            {
                "name": "御久间流奥义·阿修罗",
                "time": 1
            }
        ]
    },
    {
        "name": "茉莉",
        "position": 185,
        "skills": [
            {
                "name": "虎之英雄轰炸",
                "time": 1
            }
        ]
    },
    {
        "name": "环奈",
        "position": 433,
        "skills": [
            {
                "name": "天赐之物",
                "time": 12
            },
            {
                "name": "闪耀之刃",
                "time": 1
            }
        ]
    },
    {
        "name": "美咲（万圣节）",
        "position": 815,
        "skills": [
            {
                "name": "万圣节增幅",
                "time": 12
            },
            {
                "name": "南瓜死亡派对",
                "time": 18
            }
        ]
    },
    {
        "name": "忍（万圣节）",
        "position": 440,
        "skills": [
            {
                "name": "幽魂武器",
                "time": 12
            },
            {
                "name": "万圣夜惊魂",
                "time": 1
            }
        ]
    },
    {
        "name": "宫子（万圣节）",
        "position": 590,
        "skills": [
            {
                "name": "不给布丁就捣蛋的说",
                "time": 12
            }
        ]
    },
    {
        "name": "克里斯提娜",
        "position": 290,
        "skills": [
            {
                "name": "覆盖指令",
                "time": 15
            },
            {
                "name": "代码注入",
                "time": 12
            },
            {
                "name": "乱数圣域",
                "time": 1
            }
        ]
    }
]
