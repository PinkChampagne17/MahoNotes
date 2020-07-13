var app = new Vue({
    el: '#app',
    data: {
        charas: [],
        selectedCharas: [],
        addedSkillsAndTimes: [],
        timelines: [],
        timesRowDispIsTime: true,
        charaIconsUrlBase: './static/img/charaicons'
    },
    provide: function () {
        return {
            addedSkillsAndTimes: this.addedSkillsAndTimes
        }
    },
    mounted: function() {
        this.charas = CHARAS
        this.charas.forEach(c => c.imgSrc = `${this.charaIconsUrlBase}/${c.name}.webp`)
        this.charas.sort((a, b) => a.location - b.location)
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
            this.clearArray(this.selectedCharas)
            this.clearArray(this.addedSkillsAndTimes)
            this.clearArray(this.timelines)
        },
        clearArray: function(array) {
            array.splice(0, array.length);
        },
        useTimeToString: function({minute, second}) {
            return `${minute}:${second < 10 ? '0' + second : second}` 
        }
    },
    watch: {
        addedSkillsAndTimes: function() {
            this.clearArray(this.timelines)

            let skillNames = [...new Set(this.addedSkillsAndTimes.map(item => item.name))]
            
            skillNames.forEach(n => {
                let t = this.addedSkillsAndTimes.filter(item => item.name == n)

                let chara       = t[0].chara
                let skillName   = t[0].name
                let time        = t[0].time
                let timeline    = t.map(({ useTime }) => useTime.minute * 60 + useTime.second)

                this.timelines.push({ chara, skillName, time, timeline })
            })
        }
    },
    computed: {
        timesRow: function() {
            let times = [...Array(90)].map((v, k) => k + 1).reverse();
            
            if (this.timesRowDispIsTime) {
                return times.map(v => this.useTimeToString({ minute: parseInt(v / 60), second: v % 60 }))
            }
            else {
                return times.map(v => v < 10 ? '0' + v : v)
            }
        }
    }
})
