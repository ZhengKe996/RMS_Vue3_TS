<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <expand />
      </template>
      <template v-else>
        <fold />
      </template>
    </el-icon>
    <div class="content">
      <own-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { Expand, Fold } from '@element-plus/icons'
import userInfo from './user-info.vue'
import ownBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // breadcrumbs
    const store = useStore()
    const route = useRoute()

    const breadcrumbs = computed(() => {
      const userMenus = store.state.loginModule.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  },
  components: {
    Expand,
    Fold,
    userInfo,
    ownBreadcrumb
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
