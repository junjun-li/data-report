<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">关键词搜索</div>
        </template>
        <template>
          <div class="card-wrapper">
            <div class="chart-wrapper">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <div class="progress-chart">
                  <v-charts :options="searchUserOptions"></v-charts>
                </div>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">219,866</div>
                <div class="progress-chart">
                  <v-charts :options="searchNumberOptions"></v-charts>
                </div>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
            <div class="pagination-wrapper">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">
            <div class="text">分类销售排行</div>
            <div class="radio">
              <el-radio-group v-model="radioDate"
                              size="small">
                <el-radio-button label="1">品类</el-radio-button>
                <el-radio-button label="2">商品</el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="card-wrapper">
            <v-charts :options="categoryOptions"></v-charts>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchUserOptions: {
        xAxis: {
          // show: false,
          // data: ['长春', '常州', '全家桶', '鸡腿'],
          boundaryGap: false,
          type: 'category'
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [100, 150, 200, 250, 100, 150, 200, 250],
          areaStyle: {
            color: 'rgba(95, 187, 255, 0.5)'
          },
          lineStyle: {
            // width: 0
            color: 'rgba(95, 187, 255)'
          },
          itemStyle: {
            // color: 'rgba(95, 187, 255)',
            opacity: 0
          },
          smooth: true // 更平滑的显示
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      searchNumberOptions: {
        xAxis: {
          // show: false,
          // data: ['长春', '常州', '全家桶', '鸡腿'],
          boundaryGap: false,
          type: 'category'
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [100, 150, 200, 250, 100, 150, 200, 250],
          areaStyle: {
            color: 'rgba(95, 187, 255, 0.5)'
          },
          lineStyle: {
            // width: 0
            color: 'rgba(95, 187, 255)'
          },
          itemStyle: {
            // color: 'rgba(95, 187, 255)',
            opacity: 0
          },
          smooth: true // 更平滑的显示
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      radioDate: '1',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      categoryOptions: {}
    }
  },
  created() {
    this.renderPieChart()
  },
  methods: {
    renderPieChart() {
      let mock = [
        {
          legendName: '粉面粥店',
          value: 20,
          itemStyle: {
            color: 'pink'
          },
          name: '粉面粥店'
        },
        {
          legendName: '简餐便当',
          value: 97,
          itemStyle: {
            color: '#DB7093'
          },
          name: '简餐便当'
        },
        {
          legendName: '汉堡披萨',
          value: 92,
          itemStyle: {
            color: '#FF4500'
          },
          name: '汉堡披萨'
        }
      ]
      let sum = 0
      mock.forEach(item => {
        sum += item.value
      })
      mock = mock.map(item => {
        let percent = item.value / sum
        percent = Number(percent * 100).toFixed(2) + '%'
        return {
          ...item,
          percent,
          name: `${item.legendName} | ${percent}`
        }
      })
      console.log(sum)
      this.categoryOptions = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          // 标题2
          {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            }
          }
        ],
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: mock,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: function (params) {
                  console.log(params)
                  return `${params.data.legendName} | ${params.data.percent}`
                }
              }
            },
            // 圆心的位置
            center: ['35%', '50%'],
            // 参数1 内半径: 圆心到达第一层的位置
            // 参数2 外半径: 圆心到达第二层的位置
            // 默认是 [0 ,75%] 是整个画布的75%作为圆的直径
            radius: ['45%', '60%'],
            // 线段的位置
            labelLine: {
              normal: {
                // 靠近饼图的是线段1
                length: 5,
                length2: 3
              }
            },
            clockwise: false, // true:顺时针排列数据 false:逆时针排列顺序
            // 边距
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ],
        // legend要求数据源里面有一个name的属性, 才会出现legend
        legend: {
          // type: 'scroll', // 配合height使用如果超出去了 就会出现滚动条
          orient: 'vertical', // 垂直方向
          // height: 50
          left: '70%',
          top: 'middle', // 居中显示
          // 编辑文字的颜色
          textStyle: {
            color: '#8c8c8c'
          }
        },
        // 鼠标浮在上面有弹层出现
        tooltip: {
          trigger: 'item', // 默认传入item
          // 自定义展示信息
          formatter: function (params) {
            console.log(params)
            return `${params.seriesName}<br/>
${params.marker} ${params.name}<br/>
数量: ${params.data.value}<br/>
占比: ${params.data.percent}`
          }
        }
      }
    }
  }
}
</script>
<style lang='scss'
       scoped>
.bottom-view {
  margin-top: 20px;
  display: flex;
  .view {
    flex: 1;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 32px;
    }
    .card-wrapper {
      width: 100%;
      height: 452px;
      .chart-wrapper {
        display: flex;
        .chart {
          flex: 1;
          padding-left: 10px;
          padding-right: 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .progress-chart {
            height: 50px;
          }
        }
      }
      .pagination-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
      }
    }
  }
}
</style>
