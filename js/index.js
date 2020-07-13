var app = new Vue({
    el: '#app',
    data: {
        charas: [],
        selectedCharas: [],
        timeline: [],
        result: [],
        timesRowDispIsTime: true,
        charaIconsUrlBase: './static/img/charaicons'
    },
    provide: function () {
        return {
            timeline: this.timeline
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
            this.clearArray(this.timeline)
            this.clearArray(this.result)
        },
        clearArray: function(array) {
            array.splice(0, array.length);
        },
        useTimeToString: function({minute, second}) {
            return `${minute}:${second < 10 ? '0' + second : second}` 
        }
    },
    watch: {
        timeline: function() {
            this.clearArray(this.result)

            let skillNames = [...new Set(this.timeline.map(item => item.name))]
            
            skillNames.forEach(n => {
                let t = this.timeline.filter(item => item.name == n)

                let chara       = t[0].chara
                let skillName   = t[0].name
                let time        = t[0].time
                let timeline    = t.map(({ useTime }) => useTime.minute * 60 + useTime.second)

                this.result.push({ chara, skillName, time, timeline })
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
