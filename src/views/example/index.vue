<template>
  <RouteCache />
</template>

<script lang="ts">
import RouteCache from '@/components/route-cache/index.vue'
import { getCurrentInstance } from 'vue';
export default {
  name: 'Example',
  components: {
    RouteCache
  },
  setup() {
    const { proxy } = getCurrentInstance();
    return {
      name: proxy.$options.name
    }
  }
}
</script>