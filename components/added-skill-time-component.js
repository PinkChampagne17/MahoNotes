Vue.component('added-skill-time', {
    props: ['skill', 'charaName'],
    data: () => ({
        minute: 0,
        second: 0
    }),
    watch: {
        minute: function(val, oldVal) {
            if (val < 0) {
                this.minute = 0
            }
            if (val > 1) {
                this.minute = 1
            }
            if (this.minute == 1 && this.second > 30) {
                this.second = 30
            }
        },
        second: function(val, oldVal) {
            if (val < 0) {
                this.second = 0
            }
            if (val >= 60) {
                this.second = 59
            }
            if (this.minute == 1 && this.second > 31) {
                this.second = 30
            }
        }
    },
    methods: {
        add: function() {
            app.timeline.push({
                charaName: this.charaName,
                ...this.skill,
                useTime: {
                    minute: parseFloat(this.minute),
                    second: parseFloat(this.second)
                }
            })
        },
    },
    template: `
        <div>
            <span>{{ skill.name }}</span>
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