<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-table :data="param" style="width: 50%">
      <el-table-column  v-for="item in config.column" :key="item.index" :prop="item.param" :label="item.title" width="180" />
    </el-table>
</template>
<script lang="ts" setup>
import type  {MapTableParam, MapTableConfig} from "./type"
const props = defineProps<{
  param: MapTableParam[]
  config: MapTableConfig
}>();
console.log("master")
const { param, config } = toRefs(props);

watchPostEffect(() => {

});
</script>