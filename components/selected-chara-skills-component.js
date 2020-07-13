Vue.component('selected-chara-skills', {
    props: ['chara'],
    template:`
        <div>
            <template v-if="chara.skills">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img
                            :src="chara.imgSrc" width="30" height="30"
                            loading="lazy"
                        >
                        {{ chara.name }}
                    </a>
                </nav>
                <add-skill-and-time
                    v-for="(skill, index) in chara.skills"
                    :key="index"
                    :skill="skill"
                    :chara="chara"
                ></add-skill-and-time>
            </template>
        </div>
    `
})