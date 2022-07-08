<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="https://github.com/Dragon-qing/product-cloud" target="_blank">Github</a>
    </template>
    <template v-slot:copyright>
      <a href="https://github.com/Dragon-qing/product-cloud" target="_blank">计科1班二组</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter,
  },
}
</script>
