const SELECT_CHARA_MUTATION = "selectChara"
const DESELECT_CHARA_MUTATION = "deselectChara"
const CLEAR_MUTATION = "deselectChara"  

const ADD_CHARA_MUTATION = "ADD_CHARA_MUTATION"
const ADD_SKILL_AND_TIME_MUTATION = "ADD_SKILL_AND_TIME_MUTATION"
const REMOVE_SKILL_AND_TIME_MUTATION = "REMOVE_SKILL_AND_TIME_MUTATION"
const REMOVE_SKILL_AND_TIME_ACTION = "REMOVE_SKILL_AND_TIME_ACTION"

const store = new Vuex.Store({
    strict: ENVIROMENT_IS_DEVELOPMENT,
    state: {
        charas             : CHARAS.map(c => new Chara(c)).sort((a, b) => a.location - b.location),
        selectedCharas     : [],
        addedSkillsAndTimes: [],
    },
    mutations: {
        [ADD_CHARA_MUTATION](state, chara) {
            state.selectedCharas.push(chara)
            state.selectedCharas.sort((a, b) => b.location - a.location)
        },
        [DESELECT_CHARA_MUTATION](state, chara) {
            let index = state.selectedCharas.indexOf(chara)
            state.selectedCharas.splice(index, 1)
            
            if (state.selectedCharas == 0) {
                clearArrays(state.addedSkillsAndTimes)
            }
        },
        [ADD_SKILL_AND_TIME_MUTATION](state, item) {
            state.addedSkillsAndTimes.push(item)
            state.addedSkillsAndTimes.sort((a, b) => b.useTime.toTotalSecond(true) - a.useTime.toTotalSecond(true))
        },
        [REMOVE_SKILL_AND_TIME_MUTATION](state, index) {
            state.addedSkillsAndTimes.splice(index, 1)
        },
        [CLEAR_MUTATION](state) {
            clearArrays(state.selectedCharas, state.addedSkillsAndTimes)
        },
    },
    actions: {
        [SELECT_CHARA_MUTATION]({ state, commit, dispatch }, chara) {
            if (state.selectedCharas.includes(chara)) {
                commit(DESELECT_CHARA_MUTATION, chara)
            }
            else if (state.selectedCharas.length < 5) {
                commit(ADD_CHARA_MUTATION, chara)
            }
        },
        [REMOVE_SKILL_AND_TIME_ACTION]({ commit }, index) {
            commit(REMOVE_SKILL_AND_TIME_MUTATION, index)
        }
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
