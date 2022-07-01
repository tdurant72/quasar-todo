<template>
  <q-page padding>
    <div>
      <CryptoDetailsHeader
        :image="details.image.small"
        :name="details.name"
        :symbol="details.symbol"
      />
      <q-separator />
      <CryptoDetailsSocialMediaButtons
        :facebookUserName="details.links.facebook_username"
        :twitterUserName="details.links.twitter_screen_name"
        :redditLink="details.links.subreddit_url"
      ></CryptoDetailsSocialMediaButtons>
      <div class="row q-pt-lg">
        <div class="col">
          <p v-html="details.description.en"></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h4>Exchanges</h4>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 col-sm-6 col-xs-12"
          v-for="(ticker, index) in usdTickers"
          :key="index"
        >
          <CryptoExchangeCard
            :ticker="ticker"
            :changeInLast24Hr="details.market_data.price_change_24h"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import CryptoDetailsHeader from "src/components/CryptoDetailsHeader.vue";
import CryptoDetailsSocialMediaButtons from "src/components/CryptoDetailsSocialMediaButtons.vue";
import CryptoExchangeCard from "src/components/CryptoExchangeCard.vue";
export default defineComponent({
  name: "CryptoDetails",
  components: {
    CryptoDetailsHeader,
    CryptoDetailsSocialMediaButtons,
    CryptoExchangeCard,
  },
  data: () => ({
    details: undefined,
  }),
  async created() {
    try {
      const id = this.$route.params.id;
      console.log("details called", id, "api:", api);
      if (!id) {
        alert("No id specified");
        return;
      }
      const res = await api.get(`coins/${id}`);
      console.log("details", res);
      res.status === 200
        ? (this.details = res.data)
        : alert("There was an error fetching the coin.");
    } catch (error) {
      alert("There was an error fetching the coin.");
    }
  },
  computed: {
    usdTickers() {
      return this.details.tickers.filter((ticker) => ticker.target === "USD");
    },
  },
});
</script>

<style lang="scss" scoped></style>
