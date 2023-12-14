<template>
    <div>
      <h2>Cek Status Pendaftaran</h2>
      <form @submit.prevent="checkStatus">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
  
        <div>
          <button type="submit">Cek Status</button>
        </div>
      </form>
  
      <div v-if="status !== null">
        <h3>Status Pendaftaran:</h3>
        <p>{{ status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        status: null
      };
    },
    methods: {
      checkStatus() {
        // Lakukan pemeriksaan status di sini, misalnya dengan mengirim permintaan ke server
        // Setelah mendapatkan status, atur nilai pada this.status
        // Contoh: this.status = 'Pendaftaran diterima';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya khusus untuk komponen ini */
  </style>
  