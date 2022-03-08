<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn icon="mdi-logout" flat round></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-toolbar class="bg-primary" />
      <q-item class="bg-grey-2">
        <q-item-section> Lists </q-item-section>
        <q-item-section side>
          <CreateTodoButton icon="mdi-plus" flat round size="sm" />
        </q-item-section>
      </q-item>
      <TodoListsList />
      <q-date color="primary" v-model="currentDate" mask="MM-DD-YYYY" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
import CreateTodoButton from "src/components/CreateTodoButton.vue";
import TodoListsList from "src/components/TodoListsList.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    CreateTodoButton,
    TodoListsList,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const timestamp = Date.now();
    const currentDate = date.formatDate(timestamp, "MM-DD-YYYY");
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      currentDate,
    };
  },
});
</script>
