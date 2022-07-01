<template>
  <div class="row">
    <div class="col flex flex-center">
      <q-img :src="image" width="50px" :alt="symbol" />
      <span class="text-h3 q-pt-md q-pb-md"> {{ name }} - {{ symbol }} </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CryptoDetailsHeader",
  props: {
    image: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
