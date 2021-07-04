<template>
  <div>
    <h3>Home</h3>
    <el-button type="primary" @click="handlerClick">点击</el-button>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import router from "../../router";

export default defineComponent({
  name: "Home",
  setup() {
    const handlerClick = () => {
      router.push('/login')
    }
    return {
      handlerClick
    }
  }
})
</script>
