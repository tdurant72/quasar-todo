<template>
  <q-page>
    <div class="q-pa-md">
      <div v-if="isLoading" class="q-py-md">
        <q-spinner-ball color="secondary" size="2em" />
      </div>
      <span v-else-if="isError">Error: Fetching Data</span>

      <q-table
        v-if="coins"
        :rows="coins"
        :columns="columns"
        row-key="name"
        title="Currencies"
        :filter="filter"
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
        <template #header="props">
          <q-tr :props="props">
            <q-th :props="props" v-for="col in props.cols" :key="col.name">
              {{ col.label }}
            </q-th>
            <q-th auto-width></q-th>
          </q-tr>
        </template>

        <template #body="props">
          <q-tr :props="props">
            <q-td :props="props" v-for="col in props.cols" :key="col.name">
              {{ col.value }}
            </q-td>
            <q-td auto-width>
              <q-btn
                size="sm"
                color="primary"
                round
                dense
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'expand_less' : 'expand_more'"
              ></q-btn>
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-center">
                This is expand slot for row above: {{ props.row.id }}.
                <q-btn
                  size="sm"
                  color="primary"
                  label="View"
                  @click="navToCryptoDetails(props.row.id)"
                ></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useQuasar } from "quasar";
import useApi from "../composables/useApi";
export default defineComponent({
  name: "Alt",
  setup() {
    const $q = useQuasar();
    // const coins = ref([]);
    const { isError, isLoading, fetchError, fetchStatus, result, execute } =
      useApi();
    const selected = ref([]);
    const columns = [
      {
        name: "name",
        align: "center",
        label: "Name",
        field: "name",
        sortable: true,
      },
      { name: "symbol", align: "center", label: "Symbol", field: "symbol" },
    ];
    const filter = ref("");

    onMounted(async () => {
      await execute("coins/list");
      let tap = await fetchError.value;
      tap !== null ? showNotif() : null;
      //   console.log("meta", meta);
    });

    const navToCryptoDetails = (id) => {
      //   $router.push({ name: "CryptoDetails", params: { id } });
      console.log("coin selected:", id);
    };
    const showNotif = () => {
      $q.notify({
        color: "secondary",
        position: "top",
        message: `${fetchError.value}`,
        icon: "announcement",
      });
    };
    return {
      isError,
      isLoading,
      fetchStatus,
      coins: result,
      selected,
      columns,
      filter,
      navToCryptoDetails,
    };
  },
});
</script>
