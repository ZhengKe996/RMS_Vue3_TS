<template>
  <div class="overview">
    <own-card title="关于">
      <div class="c-left">
        Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </own-card>
    <own-card title="技术栈">
      <own-text-link :text-arrs="technologyStacks" />
      <own-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <own-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </own-card>
    <own-card title="项目结构">
      <div class="c-left">
        <own-code language="bash" :code="projectDir" />
      </div>
    </own-card>
    <own-card title="项目规范">
      <own-descriptions title="文件命名规范" :column="2" :table-datas="fileNameNotations" />
      <own-descriptions title="编写组件规范" :column="2" :table-datas="moduleStandard" />
    </own-card>
    <own-card title="Git提交规范">
      <own-descriptions :column="1" :table-datas="gitCommitStandard" />
    </own-card>
  </div>
</template>

<script setup lang="ts">
import ownCode from '@/base-ui/code'
import ownCard from '@/base-ui/card'
import ownTextLink from '@/base-ui/text-link'
import ownDescriptions from '@/base-ui/descriptions'

import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir,
  moduleStandard,
  gitCommitStandard,
  fileNameNotations
} from './config/index'
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
