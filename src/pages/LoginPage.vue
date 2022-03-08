<template>
  <q-page padding class="flex flex-center">
    <!-- content -->
    <q-card class="login-card">
      <q-card-section>
        <div class="text-h5 text-center">Login</div>
      </q-card-section>
      <q-card bordered>
        <q-card-section>
          <q-form>
            <q-input label="email" placeholder="email@example.com" />
            <q-input label="password" type="password" class="q-mb-md" />
            <q-btn label="login" class="full-width" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
<style lang="scss" scoped>
.login-card {
  width: 100%;
  max-width: 20rem;
}
</style>
