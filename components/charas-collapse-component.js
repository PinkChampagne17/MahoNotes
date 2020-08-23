Vue.component("charas-collapse", {
  data: () => ({
      activeNames : ["1", "2", "3"],
      frontCharas : [],
      middleCharas: [],
      backCharas  : [],
  }),
  created() {
    this.frontCharas  = this.$store.state.charas.filter(c => c.locationName == CHARA_LOCATION_FRONT)
    this.middleCharas = this.$store.state.charas.filter(c => c.locationName == CHARA_LOCATION_MIDDLE)
    this.backCharas   = this.$store.state.charas.filter(c => c.locationName == CHARA_LOCATION_BACK)
  },
  template: `
      <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
              <template slot="title">
                  前卫&nbsp;<img class="position-icon" src="./static/img/position/position_front.png">
              </template>
              <chara-list :charas="frontCharas"></chara-list>
          </el-collapse-item>
          <el-collapse-item name="2">
              <template slot="title">
                  中卫&nbsp;<img class="position-icon" src="./static/img/position/position_middle.png">
              </template>
              <chara-list :charas="middleCharas"></chara-list>
          </el-collapse-item>
          <el-collapse-item name="3">
              <template slot="title">
                  后卫&nbsp;<img class="position-icon" src="./static/img/position/position_back.png">
              </template>
              <chara-list :charas="backCharas"></chara-list>
          </el-collapse-item>
      </el-collapse>
    `,
});
