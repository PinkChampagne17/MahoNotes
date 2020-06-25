Vue.component('added-chara', {
    props: ['chara'],
    template:`
        <div>
            <template v-if="chara.skills">
                <b>{{ chara.name }}</b>
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