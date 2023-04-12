<template>
  <div class="layout">
    <!-- <div class="header">
      <div class="to_view" @click="toBigSreen">大屏页面</div>
      <div class="to_view" @click="toSearch">搜索页面</div>
    </div> -->
    <div class="main">
      <!-- <div class="left">
          <div class="route_single" @click="toSearch"> 搜索页面</div>
          <div class="route_single" @click="toOther"> 其他页面</div>
      </div> -->
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toBigSreen() {
      this.$router.push("/charts")
    },
    toSearch() {
      this.$router.push("/search")
    },
    toOther() {
      this.$router.push("/other")
    },
  },
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  .header {
    height: 68px;
    // line-height: 68px;
    background-color: #ccc;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    .to_view {
      width: 90px;
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: aquamarine;
      }
    }
  }
  .main {
    height: calc(100vh - 68px);
    width: 100%;
    // background-color: rgb(99, 92, 92);
    display: flex;
    .left {
      width: 280px;
      height: 100%;
      // background-color: #ccc;
      display: flex;
      // justify-content: center;
      flex-direction: column;
      align-items: center;
      .route_single {
        margin-top: 50px;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border: 1px solid #0094ff;
        cursor: pointer;
        &:hover {
          color: aquamarine;
        }
      }
    }
    .right {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
