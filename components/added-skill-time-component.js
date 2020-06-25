Vue.component('added-skill-time', {
    props: ['skill', 'charaName'],
    data: function () {
        return {
            minute: 0,
            second: 0
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
        }
    },
    template: `
        <div>
            <span>{{ skill.name }}</span>
            <input type="number" v-model="minute">:<input type="number" v-model="second">
            <input type="button" value="+" @click="add()">
        </div>
    `
})