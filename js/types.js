const CHARA_POSITION_FRONT  = 1
const CHARA_POSITION_MIDDLE = 2
const CHARA_POSITION_BACK   = 3

class Chara {
    constructor({ name, position, skills }) {
        this.name     = name
        this.skills   = skills
        this.position = position
        this.imgSrc   = `${CHARA_ICONS_URL_BASE}/${name}.webp`
    }

    get positionName() {
        if (this.position <= 295) {
            return CHARA_POSITION_FRONT
        }
        else if (this.position <= 590) {
            return CHARA_POSITION_MIDDLE
        }
        else {
            return CHARA_POSITION_BACK
        }
    }
}

class UseTime {
    constructor(time) {
        if (typeof time == "object") {
            this.minute = parseFloat(time.minute) 
            this.second = parseFloat(time.second)
        }
        if (typeof time == "number") {
            this.minute = parseInt(time / 60)
            this.second = parseInt(time % 60)
        }
    }
    
    toString() {
        let second = this.second < 10 ? `0${this.second}` : this.second
        return `${this.minute}:${second}`
    }

    toTotalSecond(targetTypeIsNumber) {
        let totalSecond = this.minute * 60 + this.second

        if (targetTypeIsNumber) {
            return totalSecond
        }
        else if (totalSecond < 10) {
            return  '0' + totalSecond
        }
        else {
            return `${totalSecond}`
        }
    }
}

class AddedSkillAndTime {
    constructor(chara, skill, minute, second) {
        this.name    = skill.name
        this.time    = skill.time
        this.chara   = chara
        this.useTime = new UseTime({ minute, second })
    }
}

class Timeline {
    constructor(chara, skillName, time, useTimes) {
        this.chara     = chara
        this.skillName = skillName
        this.time      = time
        this.useTimes  = useTimes
    }
}