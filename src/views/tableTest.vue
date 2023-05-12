
<template>
  <el-table :data="testData.data" style="width: 50%">
    <el-table-column  v-for="item in testData.config?.column" :key="item.index" :prop="item.param" :label="item.title" width="180" />
  </el-table>
</template>
<script lang="ts" setup>
interface temp {
    data:{
        name:string;
        value:string;
        unit:string
    }[];
    config?:{
      column:{
        index:number
        title:string
        param:string
      }[]
    }
}

const testData : temp = {
  data:[
    {
    name:"设定叶片1变桨速度",
    value:"10",
    unit:"m/s"},
    {
    name:"设定叶片2变桨速度",
    value:"10",
    unit:"m/s"},
  ],
  config:{
    column:[
      {index:0,param:"name",title:"测点名称"},
      {index:1,param:"value",title:"测点数值"},
      {index:2,param:"unit",title:"单位"}
    ]
  }
}

watchPostEffect(() => {

});
</script>