Vue.component('add-skill-and-time', {
    props : ['skill', 'chara'],
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
            this.$store.commit(ADD_SKILL_AND_TIME_MUTATION, new AddedSkillAndTime(this.chara, this.skill, this.minute, this.second))
            // this.addedSkillsAndTimes.push()
            
            // this.addedSkillsAndTimes.sort((a, b) => b.useTime.toTotalSecond(true) - a.useTime.toTotalSecond(true))
        }
    },
    template: `
        <div>
            <div style="text-align: center; display: inline-block; min-width: 160px;">
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