<!-- script setup 相比 script->setup 区别 -->
<!-- 1：script setup 里的import 和定义的变量无需return 暴露出来就可以直接给tempalte使用 -->
<!-- 2: script setup 总之是script setup的语法糖 -->
<script setup lang="ts">
import { onMounted, getCurrentInstance , ref, nextTick} from 'vue';
import {option} from '@/plugins/container1Option'
import home from './Home.vue'
import * as echarts from 'echarts'

onMounted(() => {
   drawEchart()
})
const drawEchart = () => {
   const container1 = ref()
   const myOption = option
   const myChart = echarts.init(document.getElementById('echarts1'))
   myChart.setOption(myOption)
}
</script>
<template>
   <!-- <div class="about">{{abc.name}}</div> -->
   <div id="echarts1" ref="container1" style="width:300px; height: 100px;"></div>
   <home/>
</template>
<style lang="scss" scoped>

</style>
