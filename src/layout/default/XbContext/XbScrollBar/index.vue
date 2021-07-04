<template>
  <el-tabs class="el-scroll-container" v-model="activeTab" type="card" @tab-remove="removeTab" @tab-click="tabClick">
    <el-tab-pane
      v-for="item in tabs"
      :key="item.name"
      :closable="item.name !== 'dashboard'"
      :label="item.title"
      :name="item.name"
    >
      <slot/>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {scrollBarStore} from "../../../../store/scrollbar";
import {Pane} from "element-plus/es/el-tabs/src/tabs.vue";

export default defineComponent({
  name: "XbScrollBar",
  setup() {
    const router = useRouter()
    const route = useRoute()
    const scrollBar = scrollBarStore()
    let activeTab = ref(route.name)
    let tabs = computed(() => {
      return scrollBar.getBars
    })
    scrollBar.addBar({
      path: route.path,
      name: route.name as string,
      title: route.meta.title as string
    })
    const removeTab = (name: string) => {
      if (activeTab.value === name) {
        const tabBars = scrollBar.getBars
        let index = tabBars.findIndex(item => item.name === name)
        if (index) {
          let nextBar = tabBars[index + 1] || tabBars[index - 1]
          activeTab.value = nextBar.name
          router.push(nextBar.path)
        }
      }
      scrollBarStore().removeBar(name)
    }
    watch(() => route.path, () => {
      activeTab.value = route.name as string
      scrollBar.addBar({
        path: route.path,
        name: route.name as string,
        title: route.meta.title as string
      })
    })
    const tabClick = (tab: Pane) => {
      let target = scrollBar.getBars.find(item => item.name === tab.props.name)
      if (target) {
        router.push(target.path)
      }
    }
    return {
      tabs,
      activeTab,
      removeTab,
      tabClick
    }
  }
})
</script>

<style lang="scss">
.el-scroll-container {
  height: 100%;
  .el-tabs__header {
    margin: 0;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .el-tabs__nav-wrap {
      .el-tabs__nav-scroll {

        .el-tabs__nav {
          height: 34px;
          margin-bottom: 1px;
          border: none;

          .el-tabs__item {
            height: 26px;
            line-height: 26px;
            border: 1px solid #d8dce5;
            color: #495069;
            background: white;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 4px;
          }
          .el-tabs__item.is-active {
            background-color: #42b983;
            color: #fff;
            border-color: #42b983;
          }
          .el-tabs__item.is-active::before {
            content: "";
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
      }
    }
  }
  .el-tabs__content {
    height: 100%;
    .el-tab-pane {
      height: 100%;
    }
  }
}
</style>
