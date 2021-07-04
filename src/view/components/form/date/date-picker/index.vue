<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      end-placeholder="结束月份"
      range-separator="至"
      start-placeholder="开始月份"
      type="monthrange">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      :shortcuts="shortcuts"
      align="right"
      end-placeholder="结束月份"
      range-separator="至"
      start-placeholder="开始月份"
      type="monthrange"
      unlink-panels>
    </el-date-picker>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "index",
  setup() {
    let shortcuts = reactive([
      {
        text: '本月',
        value: [ new Date(), new Date() ],
      },
      {
        text: '今年至今',
        value: (() => {
          const end = new Date()
          const start = new Date(new Date().getFullYear(), 0)
          return [ start, end ]
        })(),
      },
      {
        text: '最近六个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setMonth(start.getMonth() - 6)
          return [ start, end ]
        })(),
      }
    ])
    let value1 = ref()
    let value2 = ref()

    return {
      shortcuts,
      value1,
      value2
    }
  }
})
</script>

<style scoped>

</style>
