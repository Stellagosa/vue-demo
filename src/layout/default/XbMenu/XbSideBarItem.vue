<template>
  <template v-if="!route.meta.hidden">
    <el-submenu v-if="haveChildren" :index="route.path">
      <template #title>
        <i :class="route.meta.icon"></i>
        <span>{{ route.meta.title }}</span>
      </template>
      <xb-side-bar-item v-for="child in route.children" :item="child"/>
    </el-submenu>
    <el-menu-item v-else :index="route.path">
      <i :class="route.meta.icon"></i>
      <template #title>{{ route.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "XbSideBarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = props.item
    const haveChildren = computed(() => route?.children?.length > 0 ?? false)

    return {
      route,
      haveChildren
    }
  }
})
</script>

<style scoped>

</style>
