<template>
  <span ref="counterRef"></span>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults, onMounted, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留2位
  duration: 2, // 动画时长
  separator: ',', //千位分割
  decimal: '.', // 小数分割
  prefix: '¥ ' // 单位
}
const props = withDefaults(defineProps<{ number: number; option: CountUpOptions }>(), { number: 0, option: () => ({}) })

const counterRef = ref<HTMLDivElement | null>(null)
const instance = ref<CountUp | null>(null)

watch(
  () => props.number,
  () => update(props.number)
)

onMounted(() => createCounter())

const createCounter = () => {
  if (!counterRef.value) return
  const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
  instance.value = new CountUp(counterRef?.value, props.number, opts)
  start()
}

const start = () => {
  if (!instance.value) return
  instance?.value.start()
}

const update = (number: number) => {
  if (!instance.value) return
  instance?.value.update(number)
}
</script>

<style scoped lang="less"></style>
