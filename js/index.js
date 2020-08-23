Vue.config.devtools = ENVIROMENT_IS_DEVELOPMENT

var app = new Vue({
    el: '#app',
    store,
    data: {
        charas             : [],
        selectedCharas     : [],
        addedSkillsAndTimes: [],
        timesRowDispIsTime : true,
        charaIconsUrlBase  : CHARA_ICONS_URL_BASE,
    },
    provide() {
        return {
            getCharas          : this.getCharas,
            selectChara        : chara => this.$store.dispatch(SELECT_CHARA_MUTATION, chara),
            charaIsSelected    : chara => this.$store.getters.charaIsSelected(chara),
            addedSkillsAndTimes: this.addedSkillsAndTimes,
        }
    },
    created() {
        // this.$store.state.charas = CHARAS.map(c => new Chara(c))
        //                     .sort((a, b) => a.location - b.location)
    },
    methods: {
        selectChara(chara) {
            this.$store.dispatch(SELECT_CHARA_MUTATION, chara)
            // if (this.charaIsSelected(chara)) {
            //     this.deselectChara(chara)
            // }
            // else if (this.selectedCharas.length == 5) {
            //     this.$message({
            //         center   : true,
            //         showClose: true,
            //         message  : '一个队伍最多放置5名角色',
            //         type     : 'error',
            //     })
            // }
            // else {
            //     this.selectedCharas.push(chara)
            //     this.selectedCharas.sort((a, b) => b.location - a.location)
            // }
        },
        deselectChara(chara) {
            let index = this.selectedCharas.indexOf(chara)
            this.selectedCharas.splice(index, 1)
        },
        charaIsSelected(chara) {
            return this.$store.getters.charaIsSelected(chara)
        },
        removeSkillAndTime(index) {
            this.$store.dispatch(REMOVE_SKILL_AND_TIME_ACTION, index)
        },
        clear() {
            this.$confirm('确定清空所有内容?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText : '取消',
                type             : 'warning',
                center           : true,
            }).then(() => 
                this.$store.commit(CLEAR_MUTATION)
            )
        },
    },
    watch: {
        selectedCharas() {
            if (this.selectedCharas == 0) {
                clearArrays(this.addedSkillsAndTimes)
            }
        }
    },
    computed: {
        timelines() {
            let skillNames = [...new Set(this.addedSkillsAndTimes.map(item => item.name))]
            
            return skillNames.map(skillName => {
                let t        = this.addedSkillsAndTimes.filter(item => item.name == skillName)

                let chara    = t[0].chara
                let name     = t[0].name
                let time     = t[0].time
                let useTimes = t.map(({ useTime }) => useTime.toTotalSecond(true))

                return new Timeline(chara, name, time, useTimes)
            })
        },
        timesRow() {
            let nums = [...Array(90)].map((v, k) => new UseTime(k + 1))
                                     .reverse()
            
            if (this.timesRowDispIsTime) {
                return nums.map(t => t.toString())
            }
            else {
                return nums.map(t => t.toTotalSecond())
            }
        }
    }
})
