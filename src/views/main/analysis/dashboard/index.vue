<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <own-card title="分类商品数量">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </own-card>
      </el-col>
      <el-col :span="10">
        <own-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </own-card>
      </el-col>
      <el-col :span="7">
        <own-card title="分类商品数量">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </own-card>
      </el-col>
    </el-row>
    <el-row :gutter="12" class="content-row">
      <el-col :span="12">
        <own-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </own-card>
      </el-col>
      <el-col :span="12">
        <own-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </own-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import ownCard from '@/base-ui/card'
import { PieEchart, BarEchart, LineEchart, MapEchart, RoseEchart } from '@/components/page-echarts'

const store = useStore()
store.dispatch('dashboardModule/getDashboardDataAction')

const categoryGoodsCount = computed(() =>
  store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
)

const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }

  return { xLabels, values }
})

const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }

  return { xLabels, values }
})

const addressGoodsSale = computed(() =>
  store.state.dashboardModule.addressGoodsSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
)
</script>

<style lang="less" scoped>
.content-row {
  margin-top: 15px;
}
</style>
