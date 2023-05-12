import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <el-card>
          {{
            default: () => slots.default?.(),
            header: () => <span class="flex justify-center">{props.title}</span>
          }}
        </el-card>
      );
    };
  }
});

//函数式组件


// import { defineComponent } from "vue";

// export default defineComponent({
//   name: "BaseCard",
//   props: {
//   title: {
//     type: String
//    }
//   },
//   render() {
//       return <div> defineComponent测试</div>
//   }, 
// })