<template>
    <h1>测试icon</h1>
    <ElDivider />
    <h2>StateCard</h2>
    <StateCard class="cda" :states="testStates" />
    <ElDivider />
    <h2>MeasureCard</h2>
    <MeasureCard :param="measureParams" :config="measureConfig"/>
    <ElDivider />
    <h2>TestTable</h2>
    <TestTable :tableData="measureParams" :tableConfig="measureConfig"/>
    <button @click="fnc"></button>
    <h2>CardTable</h2>
    <CardTable class="abc" :states="testStates"/>
</template>

<script setup lang="ts">
import { StateCard, MeasureCard, TestTable, CardTable } from '@/components/Card';
import type { StateData } from '@/components/Card/StateCard/type';
import type { MapTableParam,MapTableConfig } from '@/components/Card/MeasureCard/type';


const measureParams : MapTableParam[] = reactive([   
   {
    name:"设定叶片1变桨速度",
    value:"10",
    unit:"m/s"
  },
  {
    name:"设定叶片2变桨速度",
    value:"10",
    unit:"m/s"
  }
])

function fnc(){
  measureParams.push(
    {
    name:"设定叶片1变桨速度",
    value:"5",
    unit:"m/s"
  }
  )
  console.log(measureParams)
}

const measureConfig : MapTableConfig = {
  width:180,
  column:[
      {index:0,param:"name",title:"测点名称"},
      {index:1,param:"value",title:"测点数值"},
      {index:2,param:"unit",title:"单位"}
  ]
}



const testStates: Ref<Array<StateData>> = ref<Array<StateData>>([
  {
    label: " 不动作(1)",
    color: "grey",
    count: 10
  },
  {
    label: "输出紧急顺桨指令(0)",
    color: "green",
    count: 10
  }
]);

</script>
<style scoped lang="scss">
#option1 {
  width: 100%;
  text-align: center;
}
#box-card {
  width: 200,
}
.cda {
:deep(.state-table_cda){
  width: 100%;
  text-align: left;
  border: 0px;
}
}


  :deep(.div){
      width: 10px;
      height: 40px;
      margin: 0 auto;
      border-radius: 5px;
      box-shadow: 0 0 6px #aaa;      
    }
</style>

