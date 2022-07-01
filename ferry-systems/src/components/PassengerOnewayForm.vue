<template>
  <div class="q-pa-sm row">
    <div class="col q-pa-xs">
      <p>Depart Route</p>
      <q-select
        outlined
        v-model="departRoute"
        :options="passDepartRoutes"
        label="Select Route"
      />
    </div>
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
      <p>Standard Seats</p>
      <q-input v-model.number="departSeats" type="number" outlined />
    </div>
    <div class="col q-pa-xs">
      <p>Children (age 3 and under) in lap</p>
      <q-input v-model.number="departChildren" type="number" outlined />
    </div>
  </div>
  <div class="q-pa-sm row">
    <div class="col q-pa-xs">
      <p>Spaces for people with wheelchairs (up to 2)</p>
      <q-input v-model.number="departWheelchair" type="number" outlined />
    </div>
    <div class="col q-pa-xs">
      <p>Spaces for bicycles</p>
      <q-input v-model.number="departBikes" type="number" outlined />
    </div>
  </div>

  <div class="q-pa-sm row">
    <div class="col q-pa-xs">
      <q-toggle v-model="departNofee" label="No Fee" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { date } from "quasar";

export default defineComponent({
  name: "PassengerOnewayForm",
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
      passDepartRoutes: [
        "Passenger - Hatteras to Ocracoke",
        "Passenger - Ocracoke to Hatteras",
      ],
      passReturnRoutes: [
        "Passenger - Hatteras to Ocracoke",
        "Passenger - Ocracoke to Hatteras",
      ],
      timestamp,
      currentDate,
      formattedDate,
      departDate,
      returnDate,
      date1: ref(currentDate),
      departSeats: ref(0),
      returnSeats: ref(0),
      departChildren: ref(0),
      returnChildren: ref(0),
      departWheelchair: ref(0),
      returnWheelchair: ref(0),
      departBikes: ref(0),
      returnBikes: ref(0),
      returnNofee: ref(false),
      departNofee: ref(false),
    };
  },
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
