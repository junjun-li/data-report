<template>
  <el-card title="累计订单量"
               value="2,115,465">
    <template>
<!--      <div id="total-orders-chart"-->
<!--           :style="{width:'100%',height:'100%'}"></div>-->
      <v-charts :options="options"></v-charts>
    </template>
    <template v-slot:footer>
      <div class="footer-bottom">
        <span>昨日订单</span>
        <span class="money">2000000</span>
      </div>
    </template>
  </el-card>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  data() {
    return {
      options: {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  },
  mounted() {
    // const chartDom = document.getElementById('total-orders-chart')
    // const chart = this.$echarts.init(chartDom)
    // chart.setOption({
    //   xAxis: {
    //     // type: 'value' 默认是value
    //     type: 'category',
    //     show: false,
    //     boundaryGap: false // 数据默认距离x轴, 有一点小小的边距
    //   }, // x轴
    //   yAxis: {
    //     show: false
    //   }, // y轴
    //   series: [{
    //     type: 'line', // 指定渲染一个折线图
    //     data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620], // 数据
    //     areaStyle: {
    //       color: 'purple'
    //     },
    //     // 线的样式
    //     lineStyle: {
    //       width: 0 // 线的宽度置位0
    //     },
    //     // 数据点的样式
    //     itemStyle: {
    //       opacity: 0 // 每一项的小点点的透明度
    //     },
    //     smooth: true // 更加平滑的展示数据, 不会那么生硬
    //   }], // 系列 对应一张图标
    //   grid: {
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0
    //   }
    // })
  }
}
</script>

<style lang='scss'
       scoped>
.footer-bottom {
  font-size: 12px;
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
}
</style>
