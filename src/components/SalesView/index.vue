<template>
  <div class="sales-view">
    <el-card class="box-card"
             :body-style="{ padding: '0 0 20px 0' }">
      <template slot="header"
                class="clearfix">
        <el-menu :default-active="menuActive"
                 mode="horizontal">
          <el-menu-item index="1">销售额</el-menu-item>
          <el-menu-item index="2">访问量</el-menu-item>
        </el-menu>
        <div class="menu-right">
          <el-radio-group v-model="radioActive"
                          size="small"
                          style="margin-right: 20px">
            <el-radio-button label="1">今日</el-radio-button>
            <el-radio-button label="2">本周</el-radio-button>
            <el-radio-button label="3">本月</el-radio-button>
            <el-radio-button label="4">今年</el-radio-button>
          </el-radio-group>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            unlinkPanels
            size="small">
          </el-date-picker>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-charts :options="chartsOptions"></v-charts>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item"
                   v-for="item in rankData"
                   :key="item.no">
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuActive: '1',
      radioActive: '1',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end], true)
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,234'
        }
      ],
      chartsOptions: {
        title: {
          text: '年度销售报表',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          top: 20,
          left: 25
        },
        xAxis: {
          type: 'category', // 分类
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          // 小短线的修改
          axisTick: {
            // show: false, // 隐藏Y轴, 一小根短横线
            alignWithLabel: true, // 让柱状图的 一小根短线, 对齐数据和柱状图
            lineStyle: {
              color: '#999'
            }
          },
          // 线的样式和label的修改
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          // label的样式
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          // show: false, // 隐藏Y轴坐标系
          axisLine: {
            show: false // 隐藏Y轴竖线, 但保留数据
          },
          axisTick: {
            show: false // 隐藏Y轴, 一小根短横线
          },
          splitLine: {
            lineStyle: {
              type: 'dotted', // 将Y轴的线改为虚线
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar', // 柱状图
          barWidth: '35%',
          data: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750]
        }],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      }
    }
  }

}
</script>

<style lang='scss'
       scoped>
.sales-view {
  margin-top: 20px;
  /deep/ .el-card__header {
    padding: 0;
    border-bottom: none;
    /*display: flex;*/
    position: relative;
    .menu-right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;

      /*display: flex;*/
      /*align-items: center;*/
    }
    /deep/ .el-menu-item {
      margin: 0 20px
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;

    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }

    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;

          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }

          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
