<template>
  <div class="q-pa-sm row">
    <div class="col q-pa-xs">
      <p>Depart Route</p>
      <q-select
        outlined
        v-model="departRoute"
        :options="vehDepartRoutes"
        label="Select Route"
      />
    </div>
  </div>
  <div class="q-pa-sm row">
    <div class="col q-pa-xs">
      <p>Departure Date</p>
      <q-input outlined v-model="departDate">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="departDate" mask="MM/DD/YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>
  <div class="q-pa-sm row">
    <div class="col q-pa-xs">
      <p>Number of Vehicles</p>
      <q-input v-model.number="numVehicles" type="number" outlined />
    </div>
  </div>
  <div class="q-pa-sm" v-for="(vehicles, index) in numVehicles" :key="index">
    <VehicleDetails :vehicleNum="index" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { date } from "quasar";
import VehicleDetails from "./VehicleDetails.vue";

export default defineComponent({
  name: "VehicleOnewayForm",
  setup() {
    const timestamp = Date.now();
    const currentDate = new Date().toLocaleDateString("en-US");
    // const departDate = date.formatDate(timestamp, MM / DD / YYYY);
    const formattedDate = date.formatDate(timestamp, "MM/DD/YYYY");
    const departDate = ref(formattedDate);
    const returnDate = ref(formattedDate);
    return {
      departRoute: ref(null),
      returnRoute: ref(null),
      vehDepartRoutes: [
        "Cedar Island to Ocracoke",
        "Ocracoke to Cedar Island",
        "Ocracoke to Swan Quarter",
        "Swan Quarter to Ocracoke",
      ],
      timestamp,
      currentDate,
      formattedDate,
      departDate,
      returnDate,
      date1: ref(currentDate),
      numVehicles: ref(0),
      vehicleNum: ref(0),
    };
  },
  components: { VehicleDetails },
});
</script>
<style>
.formItems {
  width: 48%;
  margin: 8px 4px;
}
.selectedInputs {
  max-width: 300px;
}
</style>
