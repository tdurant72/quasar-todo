<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn flat to="/">Ferry Systems</q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Focus Areas </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "New Reservations",
    caption: "create new reservation",
    icon: "grade",
    link: "/new-reservation",
  },
  {
    title: "Existng Reservation",
    icon: "create",
    link: "/existing-reservation",
  },
  {
    title: "Ticketing",
    icon: "confirmation_number",
    link: "/ticketing",
  },
  {
    title: "Reports",
    icon: "summarize",
    link: "/reports",
  },
  {
    title: "Bulk Move",
    icon: "edit_calendar",
    link: "/bulk",
  },
  {
    title: "Block",
    icon: "pan_tool",
    link: "/block",
  },
  {
    title: "Schedules",
    icon: "date_range",
    link: "/schedules",
  },
  {
    title: "Admin",
    icon: "admin_panel_settings",
    link: "/admin",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
