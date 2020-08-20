var app = new Vue({
    el: '#app',
    data: {
        charas             : [],
        selectedCharas     : [],
        addedSkillsAndTimes: [],
        timelines          : [],
        timesRowDispIsTime : true,
        charaIconsUrlBase  : CHARA_ICONS_URL_BASE,
    },
    provide: function () {
        return {
            selectChara        : this.selectChara,
            selectedCharas     : this.selectedCharas,
            getCharas          : this.getCharas,
            addedSkillsAndTimes: this.addedSkillsAndTimes,
        }
    },
    created: function() {
        this.charas = CHARAS.map(c => new Chara(c))
                            .sort((a, b) => a.location - b.location)

        
    },
    methods: {
        selectChara: function(chara) {
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
        deselectChara: function(chara) {
            let index = this.selectedCharas.indexOf(chara)
            this.selectedCharas.splice(index, 1)
        },
        charaIsSelected: function(chara) {
            return this.selectedCharas.includes(chara)
        },
        clear: function() {
            clearArray(this.selectedCharas)
            clearArray(this.addedSkillsAndTimes)
            clearArray(this.timelines)
        },
        getCharas: function({ position }) {
            let min = 0
            let max = 999

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
        addedSkillsAndTimes: function() {
            clearArray(this.timelines)

            let skillNames = [...new Set(this.addedSkillsAndTimes.map(item => item.name))]
            
            skillNames.forEach(skillName => {
                let t        = this.addedSkillsAndTimes.filter(item => item.name == skillName)

                let chara    = t[0].chara
                let name     = t[0].name
                let time     = t[0].time
                let useTimes = t.map(({ useTime }) => useTime.toTotalSecond(true))

                this.timelines.push(new Timeline(chara, name, time, useTimes))
            })
        }
    },
    computed: {
        timesRow: function() {
            let nums = [...Array(90)].map((v, k) => new UseTime(k + 1)).reverse()
            
            if (this.timesRowDispIsTime) {
                return nums.map(t => t.toString())
            }
            else {
                return nums.map(t => t.toTotalSecond())
            }
        }
    }
})
