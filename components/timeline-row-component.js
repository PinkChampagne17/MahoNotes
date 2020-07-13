Vue.component('timeline-row', {
    props: ['item'],
    data: () => ({
        timeArray: [...Array(90)].map(value => false)
    }),
    mounted: function() {
        this.item.timeline.forEach(t => {
            for (let i = t - 1; i >= t - this.item.time; i--) {
                if (i >= 0) {
                    this.timeArray[i] = true
                }
            }
        })
        this.timeArray.reverse()
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