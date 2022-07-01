<template>
  <div class="col q-pa-xs">
    <p>No Fee Codes</p>
    <q-select
      outlined
      v-model="nofeeCode"
      :options="nofeeCodes"
      label="Select a Code"
      :rules="[(val) => !!val || 'Field is required']"
    />
  </div>
  <div class="col q-pa-xs">
    <p>No Fee Note</p>
    <q-input
      outlined
      bottom-slots
      v-model="nofeeNote"
      counter
      type="textarea"
      :readonly="readonly"
      :rules="[
        (val) => val.length <= 140 || 'Please use maximum of 140 characters',
      ]"
    >
      <template v-slot:hint> 140 character max input </template>
    </q-input>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "NofeeCodes",
  setup() {
    return {
      nofeeCode: ref(null),
      nofeeCodes: [
        "Ferry Employee in Work Status",
        "Ocracoke Resident - College Student",
        "Evacuation / Emergency",
        "Court Required",
        "Management Approval",
        "Physician Visit",
        "Official Duty - County, State, Federal",
        "School Activity",
      ],
      nofeeNote: ref(""),
      readonly: ref(false),
    };
  },
});
</script>
