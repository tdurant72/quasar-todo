<template>
  <q-page padding>
    <q-select label="Name" :options="['Luke', 'John', 'James']" v-model="selected" outlined></q-select>
    <q-btn label="click me" color="purple"></q-btn>
    <q-card>
      <q-card-section class="bg-purple">
        <h5 class="text-white text-h5">Quasar Card </h5>
      </q-card-section>
      <q-card-section>
        <p class="text-body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi explicabo quasi tempora dicta placeat labore excepturi non quibusdam sunt? Eveniet eos magni magnam explicabo consequatur sed libero minima. Iste, exercitationem?
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      selected: null
    };
  }
});
</script>
