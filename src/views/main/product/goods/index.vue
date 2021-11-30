<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image style="width: 60px; height: 80px" :src="scope.row.imgUrl" :preview-src-list="[scope.row.imgUrl]">
        </el-image>
      </template>
      <template #status="scope">
        <el-button size="mini" plain :type="scope.row.status ? 'success' : 'info'">
          {{ scope.row.status ? '在售' : '下架' }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  setup() {
    return { contentTableConfig }
  },
  components: { PageContent }
})
</script>

<style scoped></style>
