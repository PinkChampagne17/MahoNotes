Vue.component('chara-list', {
    props: ['charas'],
    methods: {
        selectChara(chara) {
            this.$store.commit(SELECT_CHARA_MUTATION, chara)
        },
        charaIsSelected(chara) {
            return this.$store.getters.charaIsSelected(chara)
        },
    },
    template:`
        <div style="margin-top: 5px;" v-if="$store.getters.length != 0">
            <template v-for="(chara, index) in charas">
                <img 
                    :key="index"
                    :src="chara.imgSrc"
                    :title="chara.name"
                    class="chara-icon"
                    :class="{ 'selected-chara-icon': charaIsSelected(chara) }"
                    @click="selectChara(chara)"
                >
            </template>
        </div>
    `
})