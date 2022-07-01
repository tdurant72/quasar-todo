<template>
  <div class="flex flex-center">
    <div class="q-pa-sm q-mx-xs shadow-1">
      <p>Vehicle {{ vehicleNum + 1 }} depart</p>
      <div class="q-pa-sm">
        <div class="q-pa-xs">
          <p>Vehicle Size</p>
          <q-select
            outlined
            v-model="vehicleSizeDepart"
            :options="vehicleSizes"
            label="Select an option"
          />
        </div>
        <div class="q-pa-xs">
          <p># of passengers (up to 15)</p>
          <q-input v-model.number="departPassengerNum" type="number" outlined />
        </div>
      </div>

      <div class="q-pa-sm row">
        <div class="q-pa-xs">
          <q-toggle v-model="departHazmatChecked" label="Hazmat" />
        </div>
        <div class="q-pa-xs">
          <q-toggle v-model="departNofeeChecked" label="No Fee" />
        </div>
      </div>
      <NofeeCodes v-if="departNofeeChecked" />
    </div>
    <div v-if="tripType === 'round'" class="q-pa-sm q-mx-xs shadow-1">
      <p>Vehicle {{ vehicleNum + 1 }} return</p>
      <div class="q-pa-sm">
        <div class="q-pa-xs">
          <p>Vehicle Size</p>
          <q-select
            outlined
            v-model="vehicleSizeReturn"
            :options="vehicleSizes"
            label="Select an option"
          />
        </div>
        <div class="q-pa-xs">
          <p># of passengers (up to 15)</p>
          <q-input v-model.number="returnPassengerNum" type="number" outlined />
        </div>
      </div>

      <div class="q-pa-sm row">
        <div class="q-pa-xs">
          <q-toggle v-model="returnHazmatChecked" label="Hazmat" />
        </div>
        <div class="q-pa-xs">
          <q-toggle v-model="returnNofeeChecked" label="No Fee" />
        </div>
      </div>
      <NofeeCodes v-if="returnNofeeChecked" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, reactive } from "vue";
import NofeeCodes from "./NofeeCodes.vue";

export default defineComponent({
  name: "VehicleDetails",
  props: {
    vehicleNum: {
      type: Number,
      required: true,
      default: 0,
    },
    tripType: {
      type: String,
      required: true,
      default: "oneway",
    },
    vehDepartRoute: {
      type: String,
      required: true,
      default: null,
    },
    vehReturnRoute: {
      type: String,
      default: null,
    },
    departDate: {
      type: String,
      required: true,
      default: null,
    },
    returnDate: {
      type: String,
      required: false,
      default: null,
    },
  },
  setup(props) {
    const compVehicleNum = computed(() => props.vehicleNum + 1);
    const vehicleSizeDepart = ref(null);
    const departNofeeChecked = ref(false);
    const departHazmatChecked = ref(false);
    const departPassengerNum = ref(0);
    const returnPassengerNum = ref(0);
    const compDepartSize = computed(() => vehicleSizeDepart.value);
    const compDepartNofee = computed(() => departNofeeChecked.value);
    const compDepartHazmat = computed(() => departHazmatChecked.value);
    const compDepartPassenger = computed(() => departPassengerNum.value);
    const vehicleSizeReturn = ref(null);
    const returnNofeeChecked = ref(false);
    const returnHazmatChecked = ref(false);
    const compReturnSize = computed(() => vehicleSizeReturn.value);
    const compReturnNofee = computed(() => returnNofeeChecked.value);
    const compReturnHazmat = computed(() => returnHazmatChecked.value);
    const compReturnPassenger = computed(() => returnPassengerNum.value);
    console.log("props:", props);
    return {
      vehicleSizes: [
        "Single (up to 20 feet)",
        "Double (up to 40 feet)",
        "Triple (more than 40 feet)",
        "Motorcycle",
      ],
      vehicleSizeDepart,
      vehicleSizeReturn,
      departPassengerNum,
      returnPassengerNum,
      departHazmatChecked,
      returnHazmatChecked,
      departNofeeChecked,
      returnNofeeChecked,
      compVehicleNum,
      compDepartSize,
      compDepartNofee,
      compDepartHazmat,
      compDepartPassenger,
      compReturnSize,
      compReturnNofee,
      compReturnHazmat,
      compReturnPassenger,

      depart: reactive({
        trip: {
          vehicle: compVehicleNum,
          depart: props.departDate,
          route: props.vehDepartRoute,
          size: compDepartSize,
          nofee: compDepartNofee,
          hazmat: compDepartHazmat,
          passegers: compDepartPassenger,
        },
      }),
      return: reactive({
        trip: {
          vehicle: compVehicleNum,
          depart: props.returnDate,
          route: props.vehReturnRoute,
          size: compReturnSize,
          nofee: compReturnNofee,
          hazmat: compReturnHazmat,
          passegers: compReturnPassenger,
        },
      }),
    };
  },
  components: { NofeeCodes },
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
