Vue.component('chara-list', {
    inject: ['selectChara', 'charaIsSelected'],
    props: ['charas'],
    template:`
        <div style="margin-top: 5px;">
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