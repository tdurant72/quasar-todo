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
    <div class="col q-pa-xs">
      <p>Return Route</p>
      <q-select
        outlined
        v-model="returnRoute"
        :options="vehReturnRoutes"
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
    <div class="col q-pa-xs">
      <p>Return Date</p>
      <q-input outlined v-model="returnDate">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="returnDate" mask="MM/DD/YYYY">
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
  <div class="q-pa-xs vehiclesContainer">
    <div class="q-pa-sm" v-for="(vehicles, index) in numVehicles" :key="index">
      <VehicleDetails
        :vehicleNum="index"
        tripType="round"
        :vehDepartRoute="departRoute"
        :veh-return-route="returnRoute"
        :depart-date="departDate"
        :return-date="returnDate"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { date } from "quasar";
import VehicleDetails from "./VehicleDetails.vue";
import global from "../global";

export default defineComponent({
  name: "VehicleRoundForm",
  setup() {
    const { state } = global;
    const timestamp = Date.now();
    const currentDate = new Date().toLocaleDateString("en-US");
    // const departDate = date.formatDate(timestamp, MM / DD / YYYY);
    const formattedDate = date.formatDate(timestamp, "MM/DD/YYYY");
    const departDate = ref(formattedDate);
    const returnDate = ref(formattedDate);

    return {
      state,
      departRoute: ref(null),
      returnRoute: ref(null),
      vehDepartRoutes: [
        "Cedar Island to Ocracoke",
        "Ocracoke to Cedar Island",
        "Ocracoke to Swan Quarter",
        "Swan Quarter to Ocracoke",
      ],
      vehReturnRoutes: [
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
      tripType: ref("round"),
    };
  },
  components: { VehicleDetails },
});
</script>
<style>
.vehiclesContainer {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px; */
}
</style>
