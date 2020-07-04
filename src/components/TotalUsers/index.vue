<template>
  <common-card title="累计用户数"
               value="1,064,553">
    <template>
      <div id="total-users-chart"
           :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <div class="footer-bottom">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"/>
        </div>
        <div class="compare"
             style="margin-left: 10px;">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"/>
        </div>
      </div>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [100],
          barWidth: 10,
          stack: '总量',
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          data: [250],
          // barWidth: 10,
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom', // 自定义系列
          data: [100],
          stack: '总量',
          // 自定义图形需要这个进行绘制
          renderItem: (params, api) => {
            // console.log(params)
            // console.log(api)
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              // type: 'path',
              type: 'group', // 将图形分组
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z',
                    x: -5,
                    y: 8,
                    width: 10,
                    height: 10
                    // layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }, {
                  type: 'path',
                  shape: {
                    d: 'M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z',
                    x: -5,
                    y: -17,
                    width: 10,
                    height: 10
                    // layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]

            }
          }
        }
      ],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    })
  }
}
</script>

<style lang='scss'
       scoped>
.footer-bottom {
  display: flex;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
<!--<svg t="1593843928241" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2088" width="200" height="200"><path d="M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z" p-id="2089"></path></svg>-->

<!--<svg t="1593843961584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2835" width="200" height="200"><path d="M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z" p-id="2836"></path></svg>-->
