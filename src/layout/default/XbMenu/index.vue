<template>
  <div class="xb-menu">
    <el-scrollbar>
      <xb-side-bar/>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import XbSideBar from "./XbSideBar.vue"
import {defineComponent} from "vue";

export default defineComponent({
  name: "XbMenu",
  components: {
    XbSideBar
  }
})
</script>

<style scoped>
.xb-menu {
  background-color: #001529;
  height: 100%;
}
</style>
