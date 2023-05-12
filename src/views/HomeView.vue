<script setup lang="ts">
import CartTable from '@/components/echarts/CartTable.vue';
import type { WindproParam } from '@/components/echarts/options';

function randomInit(max:number):number[]{
  let randomProduct:number[] = Array(24)
  for(let i=0; i<24; i++){
    let seed = Math.random() * max
    randomProduct.unshift(seed)
  }
  return randomProduct
}

const his : WindproParam = reactive({
  HourBaseProduct:  randomInit(2500),
  HourWindSpeed: randomInit(50),
  tag: 'init'
})

let type = 0
const testProduct = [1832.0, 1743.9, 1701.0, 2340.2, 458.6, 266.7, 835.6, 1662.2, 1720.6, 560.0, 201.4, 2101.3, 500, 2500, 500, 500, 2300, 1210, 1401, 532, 1766, 1568, 421, 2230];
const testWindSpeed = [23.5, 1.1, 6.8, 5.1, 8.0, 15.5, 6.8, 15.9, 16.0, 8.0, 10.1, 11.1, 9.3, 19.5, 4.5, 5.3, 1.2, 4.8, 9.8, 15.6, 24.0, 13.2, 4.5, 8.0, 17.8];
const HourProduct= [832.0, 743.9, 701.0, 234.2, 458.6, 766.7, 535.6, 1262.2, 1320.6, 1560.0, 2201.4, 2301.3, 2500, 2500, 2500, 2500, 2300, 2210, 1601, 1532, 766, 568, 921, 1230];
const HourWind= [5.5, 5.1, 3.8, 3.1, 4.0, 5.5, 4.8, 5.9, 6.0, 6.0, 8.1, 8.1, 9.3, 9.5, 9.5, 8.3, 7.2, 6.8, 5.8, 5.6, 4.0, 3.2, 4.5, 5.0, 7.8];

let wind = ref(0)
let product = ref(0)
function fnc(){
  if(type == 0){
    his.HourBaseProduct = testProduct
    his.HourWindSpeed = testWindSpeed
    type = 1
  }else if(type == 1){
    his.HourBaseProduct = HourProduct
    his.HourWindSpeed = HourWind
    type = 0
  }
}
</script>

<template>
  <h3>这里是主页</h3>
  <CartTable :param="his" />
  <input v-model="wind"/>
  <input v-model="product"/>
  <button @click="fnc"></button>
</template>
