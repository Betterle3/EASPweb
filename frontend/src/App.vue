<template>
  <div id="app">
    <router-view />
    <router-link to="/check-status">Cek Status Pendaftaran</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Gaya global aplikasi di sini */
</style>
