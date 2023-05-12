<template>
    <h1>
      sayhi
    </h1>
    <div id="chartNew"></div>
  </template>
  
<script setup lang="ts">
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
import {initCharts} from './options'
import type { WindproParam } from './options'

const props = defineProps<{
  param: WindproParam
}>();
const { param } = toRefs(props);
  //const {optionNew} = options()

watchPostEffect(() => {

  initCharts(param.value)
});
</script>
  
<style scoped>
#chartNew {
/* background-color: #003951; */
width: 900px;
height: 300px;
}
</style>