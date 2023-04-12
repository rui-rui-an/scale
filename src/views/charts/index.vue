<template>
  <div class="charts screen" id="screen">
    <div class="container">
      <div class="left">
        <div class="top" id="linecharts"></div>
        <div class="bottom" ref="mapcharts" id="mapcharts"></div>
      </div>
      <div class="center" ref="bigmapcharts" id="bigmapcharts"></div>
      <div class="right">
        <div class="top" ref="piecharts" id="piecharts"></div>
        <div class="bottom" ref="barcharts" id="barcharts"></div>
      </div>
    </div>
  </div>
</template>

<script>
// <!-- 引入中国地图文件 -->
import "./china"
import * as echarts from "echarts"
import mapdata from "./nanning"

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
}
const option2 = {
  tooltip: {
    //                    show: false //不显示提示标签
    formatter: "{b}", //提示标签格式
    backgroundColor: "#ff7f50", //提示标签背景颜色
    textStyle: { color: "#fff" }, //提示标签字体颜色
  },
  series: [
    {
      type: "map",
      mapType: "nanning",
      label: {
        normal: {
          show: true, //显示省份标签
          textStyle: { color: "#c71585" }, //省份标签字体颜色
        },
        emphasis: {
          //对应的鼠标悬浮效果
          show: true,
          textStyle: { color: "#800080" },
        },
      },
      itemStyle: {
        normal: {
          borderWidth: 0.5, //区域边框宽度
          borderColor: "#009fe8", //区域边框颜色
          areaColor: "#ffefd5", //区域颜色
        },
        emphasis: {
          borderWidth: 0.5,
          borderColor: "#4b0082",
          areaColor: "#f47920",
        },
      },
      data: [
        { name: "青秀区", selected: true }, //广西为选中状态
        { name: "江南区", selected: true }, //贵州为选中状态
        { name: "西乡塘区", selected: true }, //云南为选中状态
        { name: "良庆区", selected: true }, //云南为选中状态
        { name: "兴宁区", selected: true }, //云南为选中状态
        { name: "邕宁区", selected: true }, //云南为选中状态
      ],
    },
  ],
}
// 指定图表的配置项和数据
var geoCoordMap = {
  新疆玛纳斯基地: [86.22, 44.3],
  九江: [116.0, 29.7],
  新乡: [116.402217, 35.311657],
  " ": [79.92, 37.12],
  "  ": [86.85, 47.7],
  若羌县: [88.17, 39.02],
  上海: [121.4648, 31.2891],
  东莞: [113.8953, 22.901],
  东营: [118.7073, 37.5513],
  中山: [113.4229, 22.478],
  临汾: [111.4783, 36.1615],
  临沂: [118.3118, 35.2936],
  丹东: [124.541, 40.4242],
  丽水: [119.5642, 28.1854],
  乌鲁木齐: [87.9236, 43.5883],
  佛山: [112.8955, 23.1097],
  保定: [115.0488, 39.0948],
  兰州: [103.5901, 36.3043],
  包头: [110.3467, 41.4899],
  北京: [116.4551, 40.2539],
  北海: [109.314, 21.6211],
  南京: [118.8062, 31.9208],
  南宁: [108.479, 23.1152],
  南昌: [116.0046, 28.6633],
  南通: [121.1023, 32.1625],
  厦门: [118.1689, 24.6478],
  台州: [121.1353, 28.6688],
  合肥: [117.29, 32.0581],
  呼和浩特: [111.4124, 40.4901],
  咸阳: [108.4131, 34.8706],
  哈尔滨: [127.9688, 45.368],
  唐山: [118.4766, 39.6826],
  嘉兴: [120.9155, 30.6354],
  大同: [113.7854, 39.8035],
  大连: [122.2229, 39.4409],
  天津: [117.4219, 39.4189],
  太原: [112.3352, 37.9413],
  威海: [121.9482, 37.1393],
  宁波: [121.5967, 29.6466],
  宝鸡: [107.1826, 34.3433],
  宿迁: [118.5535, 33.7775],
  常州: [119.4543, 31.5582],
  广州: [113.5107, 23.2196],
  廊坊: [116.521, 39.0509],
  延安: [109.1052, 36.4252],
  张家口: [115.1477, 40.8527],
  徐州: [117.5208, 34.3268],
  德州: [116.6858, 37.2107],
  惠州: [114.6204, 23.1647],
  成都: [103.9526, 30.7617],
  扬州: [119.4653, 32.8162],
  承德: [117.5757, 41.4075],
  拉萨: [91.1865, 30.1465],
  无锡: [120.3442, 31.5527],
  日照: [119.2786, 35.5023],
  昆明: [102.9199, 25.4663],
  杭州: [119.5313, 29.8773],
  枣庄: [117.323, 34.8926],
  柳州: [109.3799, 24.9774],
  株洲: [113.5327, 27.0319],
  武汉: [114.3896, 30.6628],
  汕头: [117.1692, 23.3405],
  江门: [112.6318, 22.1484],
  沈阳: [123.1238, 42.1216],
  沧州: [116.8286, 38.2104],
  河源: [114.917, 23.9722],
  泉州: [118.3228, 25.1147],
  泰安: [117.0264, 36.0516],
  泰州: [120.0586, 32.5525],
  济南: [117.1582, 36.8701],
  济宁: [116.8286, 35.3375],
  海口: [110.3893, 19.8516],
  淄博: [118.0371, 36.6064],
  淮安: [118.927, 33.4039],
  深圳: [114.5435, 22.5439],
  清远: [112.9175, 24.3292],
  温州: [120.498, 27.8119],
  渭南: [109.7864, 35.0299],
  湖州: [119.8608, 30.7782],
  湘潭: [112.5439, 27.7075],
  滨州: [117.8174, 37.4963],
  潍坊: [119.0918, 36.524],
  烟台: [120.7397, 37.5128],
  玉溪: [101.9312, 23.8898],
  珠海: [113.7305, 22.1155],
  盐城: [120.2234, 33.5577],
  盘锦: [121.9482, 41.0449],
  石家庄: [114.4995, 38.1006],
  福州: [119.4543, 25.9222],
  秦皇岛: [119.2126, 40.0232],
  绍兴: [120.564, 29.7565],
  聊城: [115.9167, 36.4032],
  肇庆: [112.1265, 23.5822],
  舟山: [122.2559, 30.2234],
  苏州: [120.6519, 31.3989],
  莱芜: [117.6526, 36.2714],
  菏泽: [115.6201, 35.2057],
  营口: [122.4316, 40.4297],
  葫芦岛: [120.1575, 40.578],
  衡水: [115.8838, 37.7161],
  衢州: [118.6853, 28.8666],
  西宁: [101.4038, 36.8207],
  西安: [109.1162, 34.2004],
  贵阳: [106.6992, 26.7682],
  连云港: [119.1248, 34.552],
  邢台: [114.8071, 37.2821],
  邯郸: [114.4775, 36.535],
  郑州: [113.4668, 34.6234],
  鄂尔多斯: [108.9734, 39.2487],
  重庆: [107.7539, 30.1904],
  金华: [120.0037, 29.1028],
  铜川: [109.0393, 35.1947],
  银川: [106.3586, 38.1775],
  镇江: [119.4763, 31.9702],
  长春: [125.8154, 44.2584],
  长沙: [113.0823, 28.2568],
  长治: [112.8625, 36.4746],
  阳泉: [113.4778, 38.0951],
  青岛: [120.4651, 36.3373],
  韶关: [113.7964, 24.7028],
  彭林: [90, 30],
}

var BJData = [
  [
    {
      name: "新乡",
    },
    {
      name: "新乡",
      value: 200,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "呼和浩特",
      value: 90,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "哈尔滨",
      value: 90,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "石家庄",
      value: 90,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "昆明",
      value: 30,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "北京",
      value: 100,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "长春",
      value: 40,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "重庆",
      value: 40,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "贵阳",
      value: 50,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "南宁",
      value: 30,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "济南",
      value: 10,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "太原",
      value: 40,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "西安",
      value: 60,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "武汉",
      value: 50,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "合肥",
      value: 40,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "南京",
      value: 30,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "沈阳",
      value: 20,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "成都",
      value: 10,
    },
  ],
  [
    {
      name: "新乡",
    },
    {
      name: "彭林",
      value: 100,
    },
  ],
]

var SHData = [
  [
    {
      name: "九江",
    },
    {
      name: "九江",
      value: 200,
    },
  ],

  [
    {
      name: "九江",
    },
    {
      name: "长沙",
      value: 95,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "武汉",
      value: 30,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "南昌",
      value: 20,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "合肥",
      value: 70,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "南京",
      value: 60,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "福州",
      value: 50,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "上海",
      value: 100,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "深圳",
      value: 100,
    },
  ],
  [
    {
      name: "九江",
    },
    {
      name: "彭林",
      value: 100,
    },
  ],
]

var GZData = [
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "新疆玛纳斯基地",
      value: 200,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "  ",
      value: 90,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: " ",
      value: 40,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "呼和浩特",
      value: 90,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "昆明",
      value: 40,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "成都",
      value: 10,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "兰州",
      value: 95,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "银川",
      value: 90,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "西宁",
      value: 80,
    },
  ],
  [
    {
      name: "新疆玛纳斯基地",
    },
    {
      name: "彭林",
      value: 100,
    },
  ],
]

var planePath =
  "path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705"

var convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem[0].name]
    var toCoord = geoCoordMap[dataItem[1].name]
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: fromCoord,
        },
        {
          coord: toCoord,
        },
      ])
    }
  }
  return res
}

var color = ["#3ed4ff", "#ffa022", "#a6c84c"]
var series = []
;[
  ["新乡", BJData],
  ["九江", SHData],
  ["新疆", GZData],
].forEach(function (item, i) {
  series.push(
    {
      name: item[0] + " Top10",
      type: "lines",
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: "#fff",
        symbolSize: 3,
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2,
        },
      },
      data: convertData(item[1]),
    },
    {
      name: item[0] + " Top10",
      type: "lines",
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15,
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.4,
          curveness: 0.2,
        },
      },
      data: convertData(item[1]),
    },
    {
      name: item[0] + " Top10",
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        brushType: "stroke",
      },
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: "{b}",
        },
      },
      symbolSize: function (val) {
        return val[2] / 8
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
        }
      }),
    }
  )
})
const option3 = {
  backgroundColor: "#080a20",
  // title: {
  //     text: '模拟迁徙',
  //     subtext: '数据纯属虚构',
  //     left: 'left',
  //     textStyle: {
  //         color: '#fff'
  //     }
  // },

  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    top: "bottom",
    left: "right",
    data: ["北京 Top10", "上海 Top10", "广州 Top10"],
    textStyle: {
      color: "#fff",
    },
    selectedMode: "single",
  },
  geo: {
    map: "china",
    //文本
    label: {
      emphasis: {
        show: false,
      },
    },
    zoom: 1.2,
    // 是否允许鼠标滚动缩放
    roam: false,
    //每一项的样式
    itemStyle: {
      //默认样式
      normal: {
        areaColor: "#132937",
        borderColor: "#0692a4",
      },
      //鼠标移入的高亮样式
      emphasis: {
        areaColor: "#0b1c2d",
      },
    },
  },
  series: series,
}
const option4 = {
  backgroundColor: "#2c343c",
  title: {
    text: "Customized Pie",
    left: "center",
    top: 20,
    textStyle: {
      color: "#ccc",
    },
  },
  tooltip: {
    trigger: "item",
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 274, name: "Union Ads" },
        { value: 235, name: "Video Ads" },
        { value: 400, name: "Search Engine" },
      ].sort(function (a, b) {
        return a.value - b.value
      }),
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: "#c23531",
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200
      },
    },
  ],
}
const labelRight = {
  position: "right",
}
const option5 = {
  //   title: {
  //     text: "Bar Chart with Negative Value",
  //   },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: 80,
    bottom: 30,
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      "ten",
      "nine",
      "eight",
      "seven",
      "six",
      "five",
      "four",
      "three",
      "two",
      "one",
    ],
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: [
        { value: -0.07, label: labelRight },
        { value: -0.09, label: labelRight },
        0.2,
        0.44,
        { value: -0.23, label: labelRight },
        0.08,
        { value: -0.17, label: labelRight },
        0.47,
        { value: -0.36, label: labelRight },
        0.18,
      ],
    },
  ],
}
export default {
  data() {
    return {
      myChart: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      myChart5: null,
    }
  },
  mounted() {
    this.handleScreenAuto()
    this.initLinecharts()
    this.initMap()
    this.initBigMap()
    this.initPiecharts()
    this.initBarcharts()
    window.addEventListener("resize", () => {
      this.handleScreenAuto()
      // if (
      //   this.myChart &&
      //   this.myChart2 &&
      //   this.myChart3 &&
      //   this.myChart4 &&
      //   this.myChart5
      // ) {
      //   this.myChart.resize()
      //   this.myChart2.resize()
      //   this.myChart3.resize()
      //   this.myChart4.resize()
      //   this.myChart5.resize()
      // }
    })
  },
  methods: {
    //数据大屏自适应函数
    handleScreenAuto() {
      const designDraftWidth = 1920 //设计稿的宽度
      const designDraftHeight = 960 //设计稿的高度
      // 根据屏幕的变化适配的比例
      const scale =
        document.documentElement.clientWidth /
          document.documentElement.clientHeight <
        designDraftWidth / designDraftHeight
          ? document.documentElement.clientWidth / designDraftWidth
          : document.documentElement.clientHeight / designDraftHeight
      // 缩放比例
      console.log(scale)
      document.querySelector(
        "#screen"
      ).style.transform = `scale(${scale}) translate(-50%, -50%)`
    },
    initLinecharts() {
      let dom = document.getElementById("linecharts")
      this.myChart = echarts.init(dom)
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
    initMap() {
      this.myChart2 = echarts.init(this.$refs["mapcharts"])
      echarts.registerMap("nanning", mapdata)
      this.myChart2.setOption(option2)
    },
    initBigMap() {
      let dom = document.getElementById("bigmapcharts")
      this.myChart3 = echarts.init(dom)
      // 使用刚指定的配置项和数据显示图表。
      this.myChart3.setOption(option3)
    },
    initPiecharts() {
      this.myChart4 = echarts.init(this.$refs["piecharts"])
      this.myChart4.setOption(option4)
    },
    initBarcharts() {
      this.myChart5 = echarts.init(this.$refs["barcharts"])
      this.myChart5.setOption(option5)
    },
  },
  destroyed() {
    window.removeEventListener("resize")
  },
}
</script>

<style lang="less" scoped>
.screen {
  height: 100%;
  display: inline-block;
  width: 1920px; //设计稿的宽度
  height: 960px; //设计稿的高度
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  .container {
    height: 100%;
    display: flex;
    .left {
      width: 600px;
      height: 900px;
      .top {
        height: 450px;
        // #linecharts {
        //   width: 100%;
        //   height: 100%;
        // }
      }
      .bottom {
        height: 450px;
        // #mapcharts {
        //   width: 100%;
        //   height: 100%;
        // }
      }
    }
    .center {
      width: 720px;
      height: 900px;
      // #bigmapcharts {
      //   width: 100%;
      //   height: 100%;
      // }
    }
    .right {
      width: 600px;
      height: 900px;
      .top {
        height: 450px;
        // #piecharts {
        //   width: 100%;
        //   height: 100%;
        // }
      }
      .bottom {
        height: 450px;
        // #barcharts {
        //   width: 100%;
        //   height: 100%;
        // }
      }
    }
  }
}
</style>
