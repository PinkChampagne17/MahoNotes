Vue.component('timeline-row', {
    props: ['item'],
    data: () => ({
        timeArray: []
    }),
    mounted: function() {
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
        
        this.timeArray = a.reverse()
    },
    template: `
        <tr>
            <td>
            <img :src="item.chara.imgSrc" :alt="item.chara.name" width="30" height="30" loading="lazy">
                {{ item.chara.name }}：{{ item.skillName }}
            </td>
            <template v-for="item in timeArray">
                <td v-if="item" style="background-color: #03a9f4;"></td>
                <td v-else></td>
            </template>
        </tr>
    `
})