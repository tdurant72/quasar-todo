<template>
  <q-page class="row">
    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          :model-value="search"
          class="full-width"
          placeholder="Search"
          dense
        >
          <template #prepend>
            <q-icon name="mdi-magnify"></q-icon>
          </template>
        </q-input>
      </q-toolbar>

      <TodosList bordered />
    </q-card>
    <div class="col-xs-3">
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          fab
          style="margin-bottom: -3rem"
          class="q-ml-lg"
          color="secondary"
          icon="mdi-plus"
        />
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import CreateTodoButton from "components/CreateTodoButton.vue";
import TodosList from "components/TodosList.vue";
export default defineComponent({
  name: "PageIndex",
  components: {
    CreateTodoButton,
    TodosList,
  },
  setup() {
    const selected = ref(null);
    const search = ref("");
    return {
      selected,
      search,
    };
  },
});
</script>
