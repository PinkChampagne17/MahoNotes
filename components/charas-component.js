Vue.component('chara-list', {
    inject: ['selectedCharas', 'selectChara'],
    props: ['charas'],
    template:`
        <div style="margin-top: 5px;">
            <template v-for="(chara, index) in charas">
                <img 
                    :key="index"
                    :src="chara.imgSrc"
                    :title="chara.name"
                    class="chara-icon"
                    :class="{ 'selected-chara-icon': selectedCharas.includes(chara) }"
                    @click="selectChara(chara)"
                >
            </template>
        </div>
    `
})