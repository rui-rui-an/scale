<template>
  <div class="home">
    <div class="mybox" :style="{'--bgc':bgColor}">我盒子</div>
    <el-button @click="changeColor">改变背景颜色</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bgColor:'red'
    }
  },
  methods: {
    changeColor () {
      this.bgColor = 'blue'
      console.log(111);
    },
  }
}
</script>

<style lang="less" scoped>
.home {
  .mybox {
    width: 50px;
    height: 50px;
    background-color: var(--bgc);
  }
}
</style>