<template>
  <div>
    <own-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #fooder>
        <div class="handle-btns">
          <el-button type="primary" plain :icon="Search" @click="handleSearchClick">搜索</el-button>
          <el-button type="primary" plain :icon="RefreshRight" @click="handleResetClick">重置</el-button>
        </div>
      </template>
    </own-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ownForm from '@/base-ui/form'
import { Search, RefreshRight } from '@element-plus/icons'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    /**
     * 双向绑定的属性应该是由配置文件中的field 来决定
     *    优化一：formData中的属性应该动态来决定
     *
     *    优化二：用户点击重置按钮，进行重置操作
     *
     *    优化三：用户点击搜索时，显示对应内容
     */
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = undefined
    }

    const formData = ref(formOriginData)

    const handleResetClick = () => {
      /* // 第一种方法：内部使用双向绑定
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      } */

      // 第二种方法
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    const handleSearchClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, Search, RefreshRight, handleResetClick, handleSearchClick }
  },
  components: {
    ownForm
  }
})
</script>

<style lang="less" scoped>
.own-form {
  .handle-btns {
    text-align: right;
    padding: 0px 50px 30px 0px;
  }
}
</style>
