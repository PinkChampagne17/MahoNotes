Vue.component('added-chara', {
    props: ['chara'],
    template:`
        <div>
            <template v-if="chara.skills">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img
                            :src="'/static/charaicons/' + chara.name + '.webp'" width="30" height="30"
                            alt="" loading="lazy"
                        >
                        {{ chara.name }}
                    </a>
                </nav>
                <added-skill-time
                    v-for="(skill, index) in chara.skills"
                    :key="index"
                    :skill="skill"
                    :charaName="chara.name"
                ></added-skill-time>
            </template>
        </div>
    `
})