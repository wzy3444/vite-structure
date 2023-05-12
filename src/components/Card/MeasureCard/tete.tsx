import { defineComponent} from "vue";
import type  {MapTableParam, MapTableConfig} from "./type"
export default defineComponent({
    name: "TestTable",
    props: {
      tableConfig:{
        type: Object as PropType<MapTableConfig>
      },
     tableData:{
        type: Object as PropType<MapTableParam[]>,
        required: true
      }
    },
    setup(props) {
      const {  tableConfig, tableData } = toRefs(props);
      return() => (
        <el-table data={tableData.value} >
          {tableConfig.value?.column.map((item) => {
            return (
              <el-table-column
                key={item.index} 
                prop={item.param} 
                label={item.title} 
                width={tableConfig.value?.width}
              /> )            
          })}
        </el-table>
      ) 
    }
  });
