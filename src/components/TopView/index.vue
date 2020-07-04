<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TotalSales from '../TotalSales'
import TodayUsers from '../TodayUsers'
import TotalOrders from '../TotalOrders'
import TotalUsers from '../TotalUsers'

export default {
  components: {
    TotalSales,
    TodayUsers,
    TotalOrders,
    TotalUsers
  },
  created() {
    this.geiList()
  },
  methods: {
    geiList() {
      console.log(1)
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
