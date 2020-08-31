Vue.config.devtools = ENVIROMENT_IS_DEVELOPMENT

var app = new Vue({
    el: '#app',
    store,
    data: {
        timesRowDispIsTime : true,
        charaIconsUrlBase  : CHARA_ICONS_URL_BASE,
        envIsDev           : ENVIROMENT_IS_DEVELOPMENT,
    },
    created() {
        this.$store.commit(INIT_CHARAS_MUTATION, getCharas())
    },
    methods: {
        selectChara(chara, isDeselect) {
            if (this.$store.state.selectedCharas.length == 5 && !isDeselect) {
                this.$message({
                    center   : true,
                    showClose: true,
                    message  : '一个队伍最多放置5名角色',
                    type     : 'error',
                })
                return
            }
            this.$store.commit(SELECT_CHARA_MUTATION, chara)
        },
        charaIsSelected(chara) {
            return this.$store.getters.charaIsSelected(chara)
        },
        removeSkillAndTime(item) {
            this.$store.commit(REMOVE_SKILL_AND_TIME_MUTATION, item)
        },
        clear() {
            this.$confirm('确定清空所有内容?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText : '取消',
                type             : 'warning',
                center           : true,
            }).then(() => {
                this.$store.commit(CLEAR_MUTATION)
            })
        },
    },
    computed: {
        timesRow() {
            let times = [...Array(90)].map((v, k) => new UseTime(k + 1)).reverse()

            if (this.timesRowDispIsTime) {
                return times.map(t => t.toString())
            }
            else {
                return times.map(t => t.toTotalSecond())
            }
        }
    }
})
