// Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data: {
        charas             : [],
        selectedCharas     : [],
        addedSkillsAndTimes: [],
        timesRowDispIsTime : true,
        charaIconsUrlBase  : CHARA_ICONS_URL_BASE,
    },
    provide() {
        return {
            getCharas          : this.getCharas,
            selectChara        : this.selectChara,
            charaIsSelected    : this.charaIsSelected,
            addedSkillsAndTimes: this.addedSkillsAndTimes,
        }
    },
    created() {
        this.charas = CHARAS.map(c => new Chara(c))
                            .sort((a, b) => a.location - b.location)
    },
    methods: {
        selectChara(chara) {
            if (this.charaIsSelected(chara)) {
                this.deselectChara(chara)
            }
            else if (this.selectedCharas.length == 5) {
                alert("一个队伍最多5个角色")
            }
            else {
                this.selectedCharas.push(chara)
                this.selectedCharas.sort((a, b) => b.location - a.location)
            }
        },
        deselectChara(chara) {
            let index = this.selectedCharas.indexOf(chara)
            this.selectedCharas.splice(index, 1)
        },
        charaIsSelected(chara) {
            return this.selectedCharas.includes(chara)
        },
        clear() {
            this.$confirm('确定清空所有内容?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true,
            }).then(() => 
                clearArrays(this.selectedCharas, this.addedSkillsAndTimes, this.timelines)
            )
        },
        getCharas({ position }) {
            let min = 0
            let max = 999

            position = position || "未设置"

            switch (position) {
                case "前卫": 
                    max = 295
                    break

                case "中卫": 
                    min = 295
                    max = 590
                    break

                case "后卫":
                    min = 590
                    break
            }
            return this.charas.filter(c => min < c.location && c.location <= max )
        },
    },
    watch: {
        selectedCharas() {
            if (this.selectedCharas == 0) {
                clearArrays(this.addedSkillsAndTimes)
            }
        }
    },
    computed: {
        timelines() {
            let skillNames = [...new Set(this.addedSkillsAndTimes.map(item => item.name))]
            
            return skillNames.map(skillName => {
                let t        = this.addedSkillsAndTimes.filter(item => item.name == skillName)

                let chara    = t[0].chara
                let name     = t[0].name
                let time     = t[0].time
                let useTimes = t.map(({ useTime }) => useTime.toTotalSecond(true))

                return new Timeline(chara, name, time, useTimes)
            })
        },
        timesRow() {
            let nums = [...Array(90)].map((v, k) => new UseTime(k + 1))
                                     .reverse()
            
            if (this.timesRowDispIsTime) {
                return nums.map(t => t.toString())
            }
            else {
                return nums.map(t => t.toTotalSecond())
            }
        }
    }
})
