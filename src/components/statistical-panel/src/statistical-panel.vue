<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
      <el-tooltip effect="light" :content="panelData.tips" placement="top">
        <el-icon><warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <own-countup
        :number="panelData.number1"
        :option="panelData.amount === 'saleroom' ? counterOptionShow : counterOptionHide"
      />
    </div>
    <div class="footer">
      <span>
        {{ panelData.subtitle }}:
        <own-countup
          :number="panelData.number2"
          :option="panelData.amount === 'saleroom' ? counterOptionShow : counterOptionHide"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { IPanelData } from '../types/index'
import type { CountUpOptions } from 'countup.js'
import { Warning } from '@element-plus/icons'
import ownCountup from '@/base-ui/count-up'

const props = withDefaults(defineProps<{ panelData: IPanelData }>(), { panelData: () => ({}) })

const counterOptionShow: CountUpOptions = { decimalPlaces: 0, prefix: '¥ ' }
const counterOptionHide: CountUpOptions = { decimalPlaces: 0, prefix: '' }
</script>

<style scoped lang="less">
@h: 38px;

.statistical {
  display: flex;
  padding: 0 20px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0, 0.1);
  border: 1px solid var(--el-border-color-base);

  height: 130px;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: left;

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
