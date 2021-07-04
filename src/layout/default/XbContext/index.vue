<template>
  <div class="xb-content">
    <xb-scroll-bar>
      <xb-main/>
    </xb-scroll-bar>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import XbMain from "./XbMain.vue";
import XbScrollBar from './XbScrollBar/index.vue'

export default defineComponent({
  name: "XbContext",
  components: {
    XbScrollBar,
    XbMain
  },
  setup() {
  }
})
</script>

<style scoped>
.xb-content{
  /*height: 100%;*/
}
</style>
