import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createRouter, createWebHistory } from 'vue-router';
import AppPortada from './components/AppPortada.vue';
import AppHistoria from './components/AppHistoria.vue';
import AppTarifas from './components/AppTarifas.vue';
import AppServicios from './components/AppServicios.vue';
import AppMundoBarco from './components/AppMundoBarco.vue';



const routes = [
    {
        path: '/',
        name: 'Portada',
        component: AppPortada,
    },
    {
      path: '/about-us',
      component: AppHistoria,
      name: 'Historia',
    },
    {
      path: '/tarifas',
      component: AppTarifas,
      name: 'Tarifas',
    },
    {
      path: '/servicios',
      component: AppServicios,
      name: 'Servicios',
    },
    {
      path: '/mundo-barco',
      component: AppMundoBarco,
      name: 'Mundo del Barco',
    },
    {
      path: '/tienda',
      name: 'Tienda',
      component: () => import('./components/AppShop.vue'),
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

const app = createApp(App);
app.use(router);
app.mount('#app');