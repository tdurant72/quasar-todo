<template>
  <div
    class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
  >
    <q-card>
      <q-card-section>
        <div class="text-h4">{{ ticker.market.name }}</div>
        <div class="text-h6">
          Trust: <q-avatar size="sm" :color="ticker.trust_score"></q-avatar>
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <div class="col flex flex-center">
          <div class="text-h4">
            <q-icon
              :name="changeInLast24Hr > 0 ? 'trending_up' : 'trending_down'"
              :color="changeInLast24Hr > 0 ? 'green' : 'red'"
              size="24ps"
            ></q-icon>
            ${{ ticker.last }}
          </div>
        </div>
      </q-card-section>
      <q-card-section class="flex flex-center">
        <div class="text-h5 q-pt-md">
          Volume: {{ ticker.volume.toFixed(2) }}
        </div>
      </q-card-section>
      <q-card-actions class="flex flex-center">
        <q-btn
          type="a"
          color="primary"
          size="lg"
          :href="ticker.trade_url"
          target="__blank"
          flat
          >Trade</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CryptoExchangeCard",
  props: {
    ticker: {
      type: Object,
      required: true,
    },
    changeInLast24Hr: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
