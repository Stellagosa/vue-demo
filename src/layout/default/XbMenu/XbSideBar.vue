<template>
  <el-menu
    :collapse="collapse"
    :collapse-transition="false"
    :default-active="activeItem"
    :router="true"
    :uniqueOpened="true"
    class="el-menu-vertical-demo"
    mode="vertical"
    @close="handleClose"
    @open="handleOpen"
    :style="{'--itemWidth': collapse ? minWidth : maxWidth}">
    <xb-side-bar-item v-for="menu in menus" :item="menu"/>
  </el-menu>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import XbSideBarItem from "./XbSideBarItem.vue"
import {menuStore} from "../../../store/menu";
import eventBus from "../../../plugins/mittConfig";
import {useRoute} from "vue-router";
import {SideBarWidth} from "../../../enums/config";

export default defineComponent({
  name: "XbSideBar",
  components: {XbSideBarItem},
  setup() {
    const route = useRoute()
    let collapse = ref(false)
    let activeItem = ref(route.path)
    const minWidth = SideBarWidth.min
    const maxWidth = SideBarWidth.max
    watch(() => route.path, () => {
      activeItem.value = route.path
    })
    let menus = menuStore().getMenus
    console.log(menus)
    const handleClose = () => {
      console.log("close")
    }
    const handleOpen = () => {
      console.log("open")
    }
    eventBus.on("changeButton", change => {
      collapse.value = change
    })
    return {
      handleClose,
      handleOpen,
      collapse,
      menus,
      activeItem,
      minWidth,
      maxWidth
    }
  }
})
</script>

<style lang="scss">
.el-menu-vertical-demo {
  background-color: #001529;

  .el-menu--inline {
    background-color: #0c2135;
  }
}

.el-menu--popup {
  background-color: #0c2135;
}

.el-submenu, .el-menu-item, .el-submenu__title {
  color: #b3b9bf;
}

.el-menu-vertical-demo, .el-menu--popup {
  .el-menu-item:hover {
    color: #fff;
    background-color: #001529;
  }

  .el-submenu {
    .el-submenu__title, .el-menu-item {
      &:hover {
        color: #fff;
        background-color: #0c2135;
      }
    }
  }

  .el-menu-item.is-active {
    color: #fff;
    background-color: #0960bd;

    &:hover {
      color: #fff;
      background-color: #0960bd;
    }
  }

  .el-submenu.is-active > .el-submenu__title {
    color: #fff;
  }
}

.el-menu.el-menu--collapse {
  width: var(--itemWidth);
  .el-menu-item {
    padding: 0 !important;
  }

  div {
    padding: 0 !important;
    text-align: center;
  }
}

//宽度差1px是个白线
.el-menu {
  border-right-width: 0;
}

</style>
