var app = new Vue({
    el: '#app',
    data: {
        charas             : CHARAS,
        selectedCharas     : [],
        addedSkillsAndTimes: [],
        timelines          : [],
        timesRowDispIsTime : true,
        charaIconsUrlBase  : './static/img/charaicons',
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
        this.charas.sort((a, b) => a.location - b.location)
        this.charas.forEach(c => c.imgSrc = `${this.charaIconsUrlBase}/${c.name}.webp`)
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
        useTimeToString: function({ minute, second }) {
            if (second < 10) {
                second = `0${second}`
            }
            return `${minute}:${second}`
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
            
            skillNames.forEach(n => {
                let t = this.addedSkillsAndTimes.filter(item => item.name == n)

                this.timelines.push({
                    chara    : t[0].chara,
                    skillName: t[0].name,
                    time     : t[0].time,
                    timeline : t.map(({ useTime }) => useTime.minute * 60 + useTime.second)
                })
            })
        }
    },
    computed: {
        timesRow: function() {
            let nums = [...Array(90)].map((v, k) => k + 1).reverse()
            
            if (this.timesRowDispIsTime) {
                return nums.map(v => this.useTimeToString({
                    minute: parseInt(v / 60),
                    second: v % 60
                }))
            }
            else {
                return nums.map(v => v < 10 ? `0${v}` : v)
            }
        }
    }
})

function clearArray(array) {
    array.splice(0, array.length)
}