<template>
  <div class="own-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-position="right" :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :style="itemStyle"
              size="medium"
              :label="item.label"
              :rules="item.rules"
            >
              <template v-if="(item.type === 'input') | (item.type === 'password')">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.title"
                    :value="option.value"
                    v-bind="item.otherOptions"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="fooder">
      <slot name="fooder"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { IFormItem } from '../types'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 30px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // 24 ÷ 6 = 4
        lg: 8, // 24 ÷ 8 = 3
        md: 12, // 24 ÷ 12 = 2
        sm: 24, // 24 ÷ 24 = 1
        xs: 24 // 24 ÷ 24 = 1
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /*     // 第一种：监听方法
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    ) */
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return { handleValueChange }
  }
})
</script>

<style lang="less" scoped>
.own-form {
  padding-top: 22px;
}
</style>
