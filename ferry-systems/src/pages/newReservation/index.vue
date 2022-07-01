<template>
  <q-page>
    <h3 class="text-h3 text-center">New Reservation</h3>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
        style="max-width: 1200px; margin: 0 auto"
      >
        <q-step
          :name="1"
          title="Search Trips"
          icon="location_on"
          :done="step > 1"
        >
          <TripTypePanels />
        </q-step>

        <q-step
          :name="2"
          title="Book Trip"
          icon="where_to_vote"
          :done="step > 2"
        >
          An ad group contains one or more ads which target a shared set of
          keywords.
        </q-step>

        <q-step :name="3" title="Add Trip" icon="add_location" :done="step > 3">
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </q-step>
        <q-step
          :name="4"
          title="Review"
          icon="assignment_turned_in"
          :done="step > 4"
        >
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </q-step>
        <q-step :name="5" title="Look up" icon="person" :done="step > 5">
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </q-step>
        <q-step :name="6" title="checkout" icon="add_shopping_cart">
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              :label="step === 6 ? 'Finish' : 'Continue'"
            />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import TripTypePanels from "components/TripTypePanels";
export default defineComponent({
  name: "NewReservation",
  components: { TripTypePanels },
  setup() {
    return {
      step: ref(1),
    };
  },
});
</script>
