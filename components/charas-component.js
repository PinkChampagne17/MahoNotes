Vue.component('charas', {
    inject: ['getCharasByPosition', 'selectedCharas', 'selectChara'],
    props: ['position'],
    template:`
        <div style="margin-top: 5px;">
            <template v-for="(chara, index) in getCharasByPosition(position)">
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