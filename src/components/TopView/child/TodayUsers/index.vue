<template>
  <common-card title="今日交易用户数"
               value="59,648">
    <template>
<!--      <div id="today-users-chart"-->
<!--           :style="{width:'100%',height:'100%'}"></div>-->
      <v-charts :options="options"></v-charts>
    </template>
    <template v-slot:footer>
      <div class="footer-bottom">
        <span>退货率</span>
        <span class="money">5.14%</span>
      </div>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  data() {
    return {
      options: {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00'
          ],
          show: false,
          boundaryGap: false // 数据默认距离x轴, 有一点小小的边距

        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar', // 绘制折线图
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290],
          barWidth: '60%'
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
  mixins: [commonCardMixin],
  mounted() {
    // const chartDom = document.getElementById('today-users-chart')
    // const chart = this.$echarts.init(chartDom)
    // chart.setOption()
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
