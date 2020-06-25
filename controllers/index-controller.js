const TIMELINE_AUTOSAVE_LOCALSTORAGE_KEY = 'pc17-clan-battle-timeline-autosave'
// const TIMELINE_RESULT_LOCALSTORAGE_KEY = 'pc17-clan-battle-timeline-Result'

var app = new Vue({
    el: '#app',
    data: {
        charas: [],
        selectedCharas: [],
        timeline: [],
        th: [],
        result: []
    },
    mounted: function() {
        let autosave = JSON.parse(localStorage.getItem(TIMELINE_AUTOSAVE_LOCALSTORAGE_KEY))
        this.selectedCharas = autosave.selectedCharas
        this.timeline = autosave.timeline

        
        for (let i = 90; i > 0; i--) {
            this.th.push(i < 10 ? '0' + i : i)
        }
    },
    watch: {
        timeline: function() {
            localStorage.setItem(TIMELINE_AUTOSAVE_LOCALSTORAGE_KEY, JSON.stringify({
                selectedCharas: this.selectedCharas,
                timeline: this.timeline
            }))
        }
    },
    methods: {
        getCharaIconSrc: function(chara) {
            return './static/charaicons/' + chara.name + '.webp'
        },
        selectChara: function(chara) {
            if (this.selectedCharas.length == 5) {
                alert("一个队伍最多5个角色")
            }
            else if (this.selectedCharas.some(item => item.name == chara.name)) {
                alert("该角色已添加")
            }
            else {
                this.selectedCharas.push(chara)
            }
        },
        save: function() {
            let data = this.timeline

            let skillNames = []
            let result = []

            data.forEach(item => {
                if (!skillNames.some(n => n == item.name)) {
                    skillNames.push(item.name)
                }
            })

            skillNames.forEach(n => {
                let t = data.filter(item => item.name == n)
                let timeline = t.map(({ useTime }) => useTime.minute * 60 + useTime.second)
                result.push({
                    charaName: t[0].charaName,
                    skillName: t[0].name,
                    time: t[0].time,
                    timeline,
                })
            })

            this.result = result
            // localStorage.setItem(TIMELINE_RESULT_LOCALSTORAGE_KEY ,JSON.stringify(result))
        }
    },
    filters: {
        useTimeToString: function(value) {
            let minute = value.minute < 10 ? '0' + value.minute : value.minute
            let second = value.second < 10 ? '0' + value.second : value.second
            return minute + ':' + second
        }
    }
})

axios.get('./static/data/charas.json').then(res => {
    app.charas = res.data
})