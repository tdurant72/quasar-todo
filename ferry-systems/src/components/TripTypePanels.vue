<template>
  <div
    class="q-pa-md row q-gutter-lg justify-center no-wrap"
    style="max-width: 1800px"
  >
    <q-card style="max-width: 1400px">
      <q-tabs v-model="tab" class="text-primary">
        <q-tab
          name="vehicle-oneway"
          icon="directions_car_filled"
          label="Vehicle Oneway"
        />

        <q-tab
          name="vehicle-round"
          icon="directions_car_filled"
          label="Vehicle Round Trip"
        />

        <q-tab
          name="passenger-oneway"
          icon="directions_walk"
          label="Passenger Oneway"
        />

        <q-tab
          name="passenger-round"
          icon="directions_walk"
          label="Passenger Round Trip"
        />
      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="vehicle-oneway">
          <div class="text-h6">Vehicle Oneway</div>
          <div><VehiclesOnewayForm /></div>
        </q-tab-panel>

        <q-tab-panel name="vehicle-round">
          <div class="text-h6">Vehicle Round Trip</div>
          <VehicleRoundForm />
        </q-tab-panel>

        <q-tab-panel name="passenger-oneway">
          <div class="text-h6">Passenger Oneway</div>
          <div><PassengerOnewayForm /></div>
        </q-tab-panel>
        <q-tab-panel name="passenger-round">
          <div class="text-h6">Passenger Round Trip</div>
          <div><PassengerRoundtripForm /></div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <q-card style="width: 250px; max-height: 550px">
      <h5 class="text-h5 text-center">Build Your Trip</h5>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PassengerOnewayForm from "./PassengerOnewayForm.vue";
import PassengerRoundtripForm from "./PassengerRoundtripForm.vue";
import VehiclesOnewayForm from "./VehiclesOnewayForm.vue";
import VehicleRoundForm from "./VehicleRoundForm.vue";
export default defineComponent({
  name: "TripTypePanels",
  components: {
    PassengerOnewayForm,
    PassengerRoundtripForm,
    VehiclesOnewayForm,
    VehicleRoundForm,
  },
  setup() {
    return {
      tab: ref("vehicle-oneway"),
    };
  },
});
</script>
