<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="frosted-glass">
      <q-toolbar>
        <q-btn
          v-if="$route.path.includes('details')"
          flat
          round
          icon="mdi-chevron-left"
          @click="$router.go(-1)"
        />
        <q-toolbar-title> Crypto Currencies </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- <router-view v-slot="{ Component }">
        <transition
          mode="in-out"
          enter-active-class="animate__animated animate__slideInLeft"
          leave-active-class="animate__animated animate__slideOutRight"
        >
          <component :is="Component" />
        </transition>
      </router-view> -->
      <router-view />
    </q-page-container>
    <q-footer class="frosted-glass">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex flex-center">Crypto App</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import "animate.css";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
<style>
.frosted-glass {
  backdrop-filter: blur(7px);
  background-color: #0000001a;
  color: black;
}
</style>
