import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '@/views/RegistrationForm.vue';

const routes = [
  {
    path: '/',
    name: 'RegistrationForm',
    component: RegistrationForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
