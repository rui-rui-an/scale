<template>
  <div class="home">
    
    <div class="left">
      <div class="change_box_color">
        <div>改变盒子颜色：</div>
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
      <div class="change_box_color changbg">
        <div>改变背景颜色：</div>
        <div
          class="choose_color"
          :style="{ backgroundColor: colors }"
          @click.stop="showChooseColor"
        >
          <div v-if="showChoose" class="color_picker_box">
            <photoshop-picker
              :value="OldColor"
              @input="updateValue"
              @ok="onOk"
              @cancel="onCancel"
            ></photoshop-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="mybox" :style="{ '--bgc': bgColor }">我盒子</div>
      <div class="others" :style="{ backgroundColor: colors }"></div>
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
      OldColor: "#0094ff",
      bgColor: "#97a5b1",
      showChoose: false,
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
      this.bgColor = val
    },
    showChooseColor(e) {
      const clickDiv = document.querySelector(".choose_color")
      if (e.target === clickDiv) {
        this.showChoose = !this.showChoose
      }
    },
    updateValue(c) {
      this.colors = c.hex
    },
    onOk() {
      this.OldColor = this.colors
      this.showChoose = false
    },
    onCancel() {
      this.colors = this.OldColor
      this.showChoose = false
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  .left {
    width: 350px;
    
  }
  .right {
      flex: 1;
  }
  .mybox {
    width: 100%;
    height: 50px;
    background-color: var(--bgc);
  }
  .change_box_color {
    display: flex;
    align-items: center;
    .choose_color {
      width: 40px;
      height: 40px;
      position: relative;
      cursor: pointer;
      .color_picker_box {
        position: absolute;
        top: 40px;
        left: 0;
      }
    }
  }
  .changbg {
    margin-top: 20px;
  }
  .others {
    height: 76vh;
    margin-top: 20px;
  }
}
</style>
