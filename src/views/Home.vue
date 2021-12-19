<template>
  <div class="home">
    <div class="mybox" :style="{ '--bgc': bgColor }">我盒子</div>
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
</template>

<script>
export default {
  data () {
    return {
      bgColor: 'red',
      options: [
        {
          value: '#0094ff',
          label: '蓝色'
        },
        {
          value: '#f9d20f',
          label: '金色'
        },
        {
          value: 'black',
          label: '黑色'
        },
        {
          value: 'green',
          label: '绿色'
        },
        {
          value: 'red',
          label: '红色'
        }
      ],
      value: ''
    }
  },
  methods: {
    changeColor (val) {
      // console.log(val)
      this.bgColor = val
    }
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
