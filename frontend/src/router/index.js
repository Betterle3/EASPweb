import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '@/views/RegistrationForm.vue';
import CheckStatus from '@/views/CheckStatus.vue';

const routes = [
  {
    path: '/',
    name: 'RegistrationForm',
    component: RegistrationForm
  },
  {
    path: '/check-status',
    name: 'CheckStatus',
    component: CheckStatus
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
