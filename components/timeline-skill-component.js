Vue.component('timeline-skill', {
    props: ['item'],
    data: () => ({
        timeArray: []
    }),
    mounted: function() {
        console.log(this.item)

        let a = []
        for (let i = 90; i > 0; i--) {
            a[i] = false
        }
        this.item.timeline.forEach(t => {
            for (let i = t; i > t - this.item.time; i--) {
                if (i > 0) {
                    a[i] = true
                }
            }
        })

        a.shift()

        console.log(this.item.skillName,a)
        
        this.timeArray = a.reverse()
    },
    template: `
        <tr>
            <td>{{ item.charaName }}:{{ item.skillName }}</td>
            <template v-for="item in timeArray">
                <td v-if="item" style="background-color: aqua;"></td>
                <td v-else></td>
            </template>
        </tr>
    `
})