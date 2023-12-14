<template>
    <div>
      <h2>Formulir Pendaftaran Lomba</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Nama:</label>
          <input v-model="formData.name" type="text" id="name" required />
        </div>
  
        <div>
          <label for="email">Email:</label>
          <input v-model="formData.email" type="email" id="email" required />
        </div>
  
        <div>
          <label for="school">Asal Sekolah:</label>
          <input v-model="formData.school" type="text" id="school" required />
        </div>
  
        <div>
          <label for="status">Status:</label>
          <select v-model="formData.status" id="status" required>
            <option value="student">Siswa</option>
            <option value="teacher">Guru</option>
          </select>
        </div>
  
        <div>
          <label for="registrationDate">Tanggal Pendaftaran:</label>
          <input v-model="formData.registrationDate" type="date" id="registrationDate" required />
        </div>
  
        <div>
          <button type="submit">Daftar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          school: '',
          status: 'student',
          registrationDate: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Data formulir:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  