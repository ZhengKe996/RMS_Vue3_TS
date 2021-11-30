<template>
  <div class="content">
    <own-table :listData="dataList" :listCount="dataCount" v-model:page="pageInfo" v-bind="contentTableConfig">
      <!-- 头部中插槽的内容 -->
      <template #headerHandler>
        <el-button v-if="isCreate" size="mini" type="primary" @click="handleNewClick">新建用户</el-button>
      </template>

      <!-- 列表中静态插槽的内容 -->
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button v-if="isUpdate" size="mini" type="text" @click="handleEditClick(scope.row)">编辑</el-button>
          <el-button v-if="isDelete" size="mini" type="text" class="handle-btn" @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 在 pagecontent 中插入动态插槽 难点 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </own-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import ownTable from '@/base-ui/table'

import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    // 操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 监听页码改变
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // vuex
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return // 如果没有查询权限则不往下走
      store.dispatch('mainModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 表格的数据
    const dataList = computed(() => store.getters[`mainModule/pageListData`](props.pageName))
    const dataCount = computed(() => store.getters[`mainModule/pageListCount`](props.pageName))

    // 获取其他的动态插槽（除掉固定插槽）
    const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 删除/修改/新增 操作
    const handleDeleteClick = (item: any) => {
      store.dispatch('mainModule/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id,
        ueryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize
        }
      })
    }

    const handleNewClick = () => {
      emit('newBtnClick')
    }

    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  },
  components: { ownTable }
})
</script>

<style scoped lang="less">
.content {
  border-top: 20px solid #f0f2f5;
  padding: 20px;
  .handle-btns {
    display: flex;
    justify-content: center;
    .handle-btn {
      color: red;
    }
  }
}
</style>
