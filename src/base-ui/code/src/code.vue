<template>
  <div class="own-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, watchEffect, ref } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = withDefaults(defineProps<{ language: string; code: string }>(), { language: 'html', code: '' })
const highlightedCode = ref<string>('')

watchEffect(() => {
  highlightedCode.value = hljs.highlight(props.code, { language: props.language }).value
})
</script>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
