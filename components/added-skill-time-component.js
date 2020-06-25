Vue.component('added-skill-time', {
    props: ['skill', 'charaName'],
    data: function () {
        return {
            minute: 0,
            second: 0
        }
    },
    watch: {
        minute: function(val, oldVal) {
            if (this.isUnavailableTime()) {
                this.second = 30
            }
        },
        second: function(val, oldVal) {
            if (this.isUnavailableTime()) {
                this.minute = 0
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
        isUnavailableTime: function() {
            return this.minute >= 1 && this.second > 30
        }
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
                max="60"
                v-model="second"
                >
            <input
                type="button"
                value="+"
                @click="add()"
                >
        </div>
    `
})