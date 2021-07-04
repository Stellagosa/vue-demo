<template>
  <div class="xb-header-tool-bar">
    <div class="xb-header-tool-item">
      <i class="el-icon-setting"/>
    </div>
    <div class="xb-header-tool-item">
      <el-dropdown trigger="click">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
<!--        <i class="el-icon-user-solid"/>-->
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="xb-header-tool-item">
      <i class="el-icon-rank"/>
    </div>
    <div class="xb-header-tool-item">
      <i class="el-icon-rank"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "XbHeaderToolBar",
})
</script>

<style lang="scss" scoped>
.xb-header-tool-bar {
  width: 240px;
  /*font-size: 26px;*/
  .xb-header-tool-item {
    margin: 0 10px 0 10px;
    float: right;
    .el-dropdown-menu {
      //z-index: 1000;
      .el-dropdowm-item {

      }
    }
  }
}
</style>
