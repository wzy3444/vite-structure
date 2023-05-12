import { defineComponent, type StyleValue} from "vue";
import type { StateData } from "../StateCard/type";
export default defineComponent({
    name: "CardTable",
    props:{
      states: {
        type: Object as PropType<StateData[]>,
        required: true
        }
    },
    setup(props) {
        const { states } = toRefs(props);
        const tableStyle = [
           " width: 100%",
            "text-align: left",
            "border: 0px",
        ]
        return() => (
            <table class="state-table" style={tableStyle}>
                {states.value?.map((item:StateData, index:number)=>{
                    const tdStyle = [  
                        "width: 10px",
                        "height: 10px",
                        "margin: 0 auto",
                        "border-radius: 5px",
                        "box-shadow:0 0 6px #aaa",
                    ]
                    tdStyle.push("background:"+item.color)
                    return (
                      <tr  key= {index}>
                        <td>
                            <div class="state" style={tdStyle} />
                        </td> 
                        <td>
                            <el-Text>{ item.label }</el-Text>
                        </td>                                               
                      </tr>  
                    )
                })}
            </table>  
        )
    }

})