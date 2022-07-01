<template>
    <div class="q-pa-md">
        <q-page-container>
            <q-page>
              <h2>Page One</h2>
              <p>{{myVar}}</p>
            </q-page>
        </q-page-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const myVar = ref('my message')
</script>

<style lang="scss" scoped>

</style>
