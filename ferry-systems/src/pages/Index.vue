<template>
  <q-page-container>
    <q-page class="basic">
      <div class="q-pa-md flex flex-center items-start q-gutter-md">
        <q-card class="nav-card">
          <q-card>
            <q-img src="../assets/cardImages/new300X300.jpg" :fit="cover">
            </q-img>
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/new-reservation">New Reservation</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img
              src="../assets/cardImages/existing300X300.jpg"
              :fit="cover"
            />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/existing-reservation"
                >Existing Reservation</q-btn
              >
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img
              src="../assets/cardImages/ticketing300X300.jpg"
              :fit="cover"
            />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/ticketing">Ticketing</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img src="../assets/cardImages/reports300X300.jpg" :fit="cover" />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/reports">Reports</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img src="../assets/cardImages/bulk300X300.jpg" :fit="cover" />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/bulk">Bulk Move</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img src="../assets/cardImages/block300X300.jpg" :fit="cover" />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/block">Block</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img
              src="../assets/cardImages/schedules300X300.jpg"
              :fit="cover"
            />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/schedules">Schedules</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
        <q-card class="nav-card">
          <q-card>
            <q-img src="../assets/cardImages/admin300X300.jpg" :fit="cover" />
          </q-card>
          <q-card class="flex flex-center">
            <q-card-actions>
              <q-btn flat to="/admin">Admin</q-btn>
            </q-card-actions>
          </q-card>
        </q-card>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style lang="scss" scoped>
.nav-card {
  width: 100%;
  max-width: 275px;
  // width: 300px;
  // height: 150px;
}
.basic {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
}
</style>
