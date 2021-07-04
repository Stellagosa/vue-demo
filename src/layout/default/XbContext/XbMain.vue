<template>
  <div class="xb-main">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "XbMain",
  setup(props) {

  }
})
</script>

<style scoped>
.xb-main {
  background-color: #b3b9bf;
  height: 100%;
}
</style>
