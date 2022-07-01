<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        grid
        title="Currencies"
        :rows="coins"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        :pagination="{ rowsPerPage: 12 }"
        :rows-per-page-options="[6, 12, 24, 48, 96]"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:item="props">
          <div
            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          >
            <q-card>
              <q-card-section class="text-center">
                <span class="text-h6">
                  {{ props.row.name }}
                </span>
              </q-card-section>
              <q-separator />
              <q-card-section
                class="flex flex-center text-center"
                style="font-size: 34px"
              >
                {{ props.row.symbol }}
              </q-card-section>
              <q-card-section class="flex flex-center">
                <q-btn
                  size="lg"
                  color="primary"
                  label="View"
                  @click="navToCryptoDetails(props.row.id)"
                ></q-btn>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
export default defineComponent({
  name: "PageIndex",
  data: () => ({
    coins: [],
    columns: [
      { name: "name", align: "center", label: "Name", field: "name" },
      { name: "symbol", align: "center", label: "Symbol", field: "symbol" },
    ],
    filter: "",
  }),
  async created() {
    try {
      console.log("fetch called");
      const res = await api.get("coins/list");
      console.log("res", res.data);
      res.status === 200
        ? (this.coins = res.data)
        : alert("Error fetching the coins");
    } catch (error) {
      alert("Error fetching the coins", error);
    }
  },
  methods: {
    navToCryptoDetails(id) {
      this.$router.push({ name: "CryptoDetails", params: { id } });
    },
  },
});
</script>
