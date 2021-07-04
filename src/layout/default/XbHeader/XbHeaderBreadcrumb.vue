<template>
  <div class="xb-header-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbs">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from 'vue-router'

export default defineComponent({
  name: "XbHeaderBreadcrumb",
  setup() {
    const route = useRoute()
    const breadcrumbs = computed(() => {
      let temp: Breadcrumb[] = []
      for(let i = 1; i < route.matched.length; i++) {
        temp.push({
          to: route.matched[i].path,
          name: route.matched[i].meta.title as string
        })
      }
      return temp
    })
    return {
      breadcrumbs
    }
  }
})
</script>

<style scoped>
.el-breadcrumb {
  font-size: 16px;
  line-height: 35px;
}
</style>
