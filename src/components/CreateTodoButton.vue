<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "CreateTodoButton",
  setup() {
    const $q = useQuasar();

    const handleButtonClicked = () => {
      $q.dialog({
        title: "Create Todo",
        prompt: {
          model: "",
          type: "text",
        },
      }).onOk(createTodo);
    };
    const createTodo = (data) => {
      console.log("Dialog data:", data);
      $q.notify({
        message: "Todo Created",
        icon: "mdi-check",
        color: "positive",
      });
    };
    return {
      handleButtonClicked,
      createTodo,
    };
  },
});
</script>
