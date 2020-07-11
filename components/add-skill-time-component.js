Vue.component('add-skill-time', {
    props: ['skill', 'chara'],
    inject: ['timeline'],
    data: () => ({
        minute: 1,
        second: 30
    }),
    watch: {
        minute: function(val, oldVal) {
            if (val < 0) {
                this.minute = 0
            }
            if (val > 1) {
                this.minute = 1
            }
        },
        second: function(val, oldVal) {
            if (val < 0) {
                this.second = 0
            }
            if (val >= 60) {
                this.second = 59
            }
        }
    },
    methods: {
        add: function() {
            if ((this.minute == 0 && this.second <= 0) || (this.minute == 1 && this.second > 30)) {
                alert('添加的时间必须在0:01至1:30之间')
                return
            }

            this.timeline.push({
                ...this.skill,
                chara: this.chara,
                useTime: {
                    minute: parseFloat(this.minute),
                    second: parseFloat(this.second)
                }
            })
            
            this.timeline.sort((a, b)=> {
                let x = a.useTime
                let y = b.useTime
                return (y.minute * 60 + y.second) - (x.minute * 60 + x.second)
            })
        }
    },
    template: `
        <div>
            <div style="text-align: center; display: inline-block; min-width: 160px;"
                >
                {{ skill.name }}
            </div>
            <input 
                class="input-number"
                type="number"
                min="0"
                max="1"
                v-model="minute"
                >
            :
            <input
                class="input-number"
                type="number"
                min="0"
                max="59"
                v-model="second"
                >
            <input
                type="button"
                value="添加"
                @click="add()"
                >
        </div>
    `
})