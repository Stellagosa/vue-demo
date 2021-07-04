<template>
  <el-container>
    <el-aside :width="xbMenuWidth+'px'">
      <xb-menu/>
    </el-aside>
    <el-container>
      <el-header height="45px">
        <xb-header/>
      </el-header>
      <el-main>
        <xb-context/>
      </el-main>
      <el-footer>
        <xb-footer/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import eventBus from "../../plugins/mittConfig";
import XbMenu from "./XbMenu/index.vue"
import XbHeader from "./XbHeader/index.vue"
import XbContext from "./XbContext/index.vue"
import XbFooter from "./XbFooter/index.vue"
import {SideBarWidth} from "../../enums/config";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    XbMenu,
    XbHeader,
    XbContext,
    XbFooter
  },
  setup() {
    const xbMenuWidth = ref(SideBarWidth.max)
    eventBus.on("changeButton", change => {
      xbMenuWidth.value = change ? SideBarWidth.min : SideBarWidth.max
    })
    return {
      xbMenuWidth
    }
  }
})
</script>

<style lang="scss" scoped>
.el-container, .el-main {
  margin: 0;
  padding: 0;
  height: 100%;
}

.el-header, .el-footer {
  margin: 0;
  padding: 0;
}

</style>
