<template>
  <q-list>
    <q-item>
      <q-item-section side>
        <UpdateTodoCheckbox />
      </q-item-section>
      <q-item-section> Go Shopping </q-item-section>
      <q-item-section side>
        <DeleteTodoButton />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";
import UpdateTodoCheckbox from "./UpdateTodoCheckbox.vue";
import DeleteTodoButton from "./DeleteTodoButton.vue";
export default defineComponent({
  name: "TodosList",
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton,
  },
  setup() {
    return {};
  },
});
</script>
