<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <table class="state-table">
        <tr v-for="(state, idx) of props.states" :key="idx">
        <td>
            <div class="state" :style="{ background: state.color }" />
        </td>
        <td>
            <ElText>{{ state.label }}</ElText>
        </td>
        </tr>
    </table>
</template>
<script setup lang="ts">
import type { StateData } from "./type";
//import { useI18n } from "vue-i18n";

//const { t } = useI18n();

const props = defineProps({
  states: {
    type: Array<StateData>,
    default: []
  }
});
</script>

<style lang="scss" scoped>
.state-table {
  width: 100%;
  text-align: left;
  border: 0px;
}
.state {
  width: 10px;
  height: 10px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 6px #aaa;
}
</style>
