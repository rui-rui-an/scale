<template>
  <div class="home">
    <div class="mybox" :style="{ '--bgc': bgColor }">我盒子</div>
    <div class="change_box_color">
      <div>改变盒子颜色</div>
      <el-select v-model="value" @change="changeColor" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="change_box_color">
      <div>改变背景颜色</div>
      <div
        class="choose_color"
        :style="{'backgroundColor':colors}"
      ></div>
      <!-- <photoshop-picker v-model="colors"></photoshop-picker> -->
    </div>
  </div>
</template>

<script>
import { Photoshop } from "vue-color"
export default {
  components: {
    "photoshop-picker": Photoshop,
  },
  data() {
    return {
      colors: "#0094ff",
      bgColor: "red",
      options: [
        {
          value: "#0094ff",
          label: "蓝色",
        },
        {
          value: "#f9d20f",
          label: "金色",
        },
        {
          value: "black",
          label: "黑色",
        },
        {
          value: "green",
          label: "绿色",
        },
        {
          value: "red",
          label: "红色",
        },
      ],
      value: "",
    }
  },
  methods: {
    changeColor(val) {
      // console.log(val)
      this.bgColor = val
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  // background-color: #0094ff;
  height: 80vh;
  .mybox {
    width: 50px;
    height: 50px;
    background-color: var(--bgc);
  }
  .change_box_color {
    display: flex;
    align-items: center;
    justify-content: center;
    .choose_color {
      width: 40px;
      height: 40px;
      // background-color: red;
      cursor: pointer;
    }
  }
}
</style>
