Vue.component("charas-collapse", {
  data: () => {
    return {
      activeNames: ["1", "2", "3"],
    }
  },
  methods: {
    handleChange: function (val) {
      console.log(val)
    }
  },
  template: `
      <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1">
              <template slot="title">
                  前卫&nbsp;<img class="position-icon" src="./static/img/position/position_front.png">
              </template>
              <charas :position="'前卫'"></charas>
          </el-collapse-item>
          <el-collapse-item name="2">
              <template slot="title">
                  中卫&nbsp;<img class="position-icon" src="./static/img/position/position_middle.png">
              </template>
              <charas :position="'中卫'"></charas>
          </el-collapse-item>
          <el-collapse-item name="3">
              <template slot="title">
                  后卫&nbsp;<img class="position-icon" src="./static/img/position/position_back.png">
              </template>
              <charas :position="'后卫'"></charas>
          </el-collapse-item>
      </el-collapse>
    `,
});
