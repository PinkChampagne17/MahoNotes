const          SELECT_CHARA_MUTATION = "SELECT_CHARA_MUTATION"
const    ADD_SKILL_AND_TIME_MUTATION = "ADD_SKILL_AND_TIME_MUTATION"
const REMOVE_SKILL_AND_TIME_MUTATION = "REMOVE_SKILL_AND_TIME_MUTATION"
const                 CLEAR_MUTATION = "CLEAR_MUTATION"
const           INIT_CHARAS_MUTATION = "INIT_CHARAS_MUTATION"

const store = new Vuex.Store({
    strict: ENVIROMENT_IS_DEVELOPMENT,
    state: {
        charas             : [],
        selectedCharas     : [],
        addedSkillsAndTimes: [],
    },
    mutations: {
        [INIT_CHARAS_MUTATION](state, charas) {
            state.charas = charas
        },
        [SELECT_CHARA_MUTATION](state, chara) {
            if (state.selectedCharas.includes(chara)) {
                let index = state.selectedCharas.indexOf(chara)
                state.selectedCharas.splice(index, 1)
                
                if (state.selectedCharas == 0) {
                    clearArrays(state.addedSkillsAndTimes)
                }
            }
            else if (state.selectedCharas.length < 5) {
                state.selectedCharas.push(chara)
                state.selectedCharas.sort((a, b) => b.location - a.location)
            }
        },
        [ADD_SKILL_AND_TIME_MUTATION](state, item) {
            state.addedSkillsAndTimes.push(item)
            state.addedSkillsAndTimes.sort((a, b) => b.useTime.toTotalSecond(true) - a.useTime.toTotalSecond(true))
        },
        [REMOVE_SKILL_AND_TIME_MUTATION](state, item) {
            let index = state.addedSkillsAndTimes.indexOf(item)
            state.addedSkillsAndTimes.splice(index, 1)
        },
        [CLEAR_MUTATION](state) {
            clearArrays(state.selectedCharas, state.addedSkillsAndTimes)
        },
    },
    getters: {
        charaIsSelected(state) {
            return chara => state.selectedCharas.includes(chara)
        },
        timelines(state) {
            let skillNames = [...new Set(state.addedSkillsAndTimes.map(item => item.name))]
            
            return skillNames.map(skillName => {
                let t        = state.addedSkillsAndTimes.filter(item => item.name == skillName)

                let chara    = t[0].chara
                let name     = t[0].name
                let time     = t[0].time
                let useTimes = t.map(({ useTime }) => useTime.toTotalSecond(true))

                return new Timeline(chara, name, time, useTimes)
            })
        },
    },
})
