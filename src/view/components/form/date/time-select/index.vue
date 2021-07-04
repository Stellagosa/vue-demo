<template>
  <el-time-select
    v-model="startTime"
    end='18:30'
    placeholder="起始时间"
    start='08:30'
    step='00:15'>
  </el-time-select>
  <el-time-select
    v-model="endTime"
    :minTime="startTime"
    end='18:30'
    placeholder="结束时间"
    start='08:30'
    step='00:15'>
  </el-time-select>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "index",
  setup() {
    let startTime = ref('')
    let endTime = ref('')

    return {
      startTime,
      endTime
    }
  }
})
</script>

<style scoped>

</style>
