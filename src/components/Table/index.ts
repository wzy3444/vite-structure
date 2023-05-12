import {
    defineComponent,
    h,
    ref,
    type PropType,
    toRefs,
    onMounted,
    watch
  } from "vue";
import { blue, red } from "picocolors";
import type { TableComponent, TableConfig, TableParam } from "./common/BaseTableComponent";
import type ElTable from "element-plus/es/components/table";

function useTable<
    S extends  TableConfig,
    C extends TableComponent<D>,
    D = TableParam
>(c: new (d: D, s: S) =>C, componentName?: string){
    return defineComponent({
        name: componentName || c.name,
        props:{
            tableConfig:{
                type: Object as PropType<S>
            },
            tableData:{
                type: Object as PropType<D>,
                required: true
            }
        },
        setup(props){
            const { tableConfig, tableData} = toRefs(props); 
            const tableRef = ref<InstanceType<typeof ElTable>>()
            let tableComponent : TableComponent<D>;
            try {
                tableComponent = new c(
                    tableData.value,
                    tableConfig.value
                );
            } catch (error) {
                console.log(
                  `${blue("create canvasComponent failed with ")}${red(
                    "error:"
                  )}[${error}]`
                );
              }

            watch(tableData, newVal => {
            if (tableComponent) {
                tableComponent.update(newVal);
            }
            });  
            watch(
                [
                  (): number => tableConfig.value.width,
                  (): number => tableConfig.value.height
                ],
                ([width, height]) => {
                  if (tableComponent) {
                    tableConfig.value.width = width;
                    tableConfig.value.height = height;
                    tableComponent.resize(width, height);
                  }
                }
            );
            return () =>
              h("table",{
                ref:(el: typeof ElTable ) => {
                    
                }
              })               
        }    
    })
}