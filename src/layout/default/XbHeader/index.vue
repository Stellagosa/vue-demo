<template>
  <div class="xb-header">
    <div class="xb-header-changeMenu">
      <i :class="change ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="changeClick"/>
    </div>
    <div class="xb-header-breadcrumb">
      <xb-header-breadcrumb/>
    </div>
    <div class="xb-header-tool">
      <xb-header-tool-bar/>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import XbHeaderToolBar from "./XbHeaderToolBar.vue";
import XbHeaderBreadcrumb from './XbHeaderBreadcrumb.vue'
import eventBus from '../../../plugins/mittConfig'

export default defineComponent({
  name: "XbHeader",
  components: {
    XbHeaderToolBar,
    XbHeaderBreadcrumb
  },
  setup() {
    const change = ref(false)
    const changeClick = () => {
      change.value = !change.value
      eventBus.emit("changeButton", change.value)
    }
    return {
      changeClick,
      change
    }
  }
})
</script>

<style scoped>
.xb-header {
  height: 40px;
  box-shadow: 0 1px 4px #c2cbc6;
  width: 100%;
  font-size: 30px;
  display: inline-block;
}

.xb-header-changeMenu {
  font-size: 30px;
  float: left;
  margin: 0 10px 0 0;
}

.xb-header-tool {
  float: right;
}

.xb-header-breadcrumb {
  font-size: 30px;
  line-height: 30px;
  float: left;
}

</style>
