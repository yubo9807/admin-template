<!-- keep-alive BUG（子组件会重复挂载两次）: https://github.com/vuejs/core/issues/12017 -->
<template>
  <router-view v-slot="row">
    <keep-alive :include="tabs">
      <component :is="row.Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { computed } from 'vue';
import useStoreTabs from '@/store/tabs';

/**
 * 页面缓存控制
 * @props include
 */
export default {
  setup() {
    const storeTabs = useStoreTabs();
    const tabs = computed(() => storeTabs.exclude.concat(storeTabs.list).map(val => val.name));
    return {
      tabs
    }
  }
}

</script>
