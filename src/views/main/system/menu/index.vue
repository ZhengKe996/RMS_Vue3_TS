<template>
  <div class="menu">
    <page-content :contentTableConfig="contentTableConfig" pageName="menu">
      <template #type="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.type == '1' ? 'success' : scope.row.type == '2' ? 'warning' : 'danger'"
        >
          {{ scope.row.type == '1' ? '一级菜单' : scope.row.type == '2' ? '二级菜单' : '操作按钮' }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
