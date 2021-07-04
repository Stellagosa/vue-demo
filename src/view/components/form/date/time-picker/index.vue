<template>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="任意时间点">
  </el-time-picker>
  <el-time-picker
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    arrow-control
    placeholder="任意时间点">
  </el-time-picker>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
export default defineComponent({
  name: "index",
  setup() {
    let value1: Date = new Date(2016, 9, 10, 18, 40)
    let value2: Date = new Date(2016, 9, 10, 18, 40)
    // 如允许 17:30:00 - 18:30:00
    const disabledHours = () => {
      return makeRange(0, 16).concat(makeRange(19, 23))
    }
    const disabledMinutes = (hour) => {
      if (hour === 17) {
        return makeRange(0, 29)
      }
      if (hour === 18) {
        return makeRange(31, 59)
      }
    }
    const disabledSeconds = (hour, minute) => {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59)
      }
    }
    return {
      value1,
      value2,
      disabledHours,
      disabledMinutes,
      disabledSeconds
    }
  }
})
</script>

<style scoped>

</style>
