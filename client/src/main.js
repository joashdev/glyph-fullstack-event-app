import { createApp, provide } from 'vue';
import './style.css';
import 'v-calendar/dist/style.css';
import { events, users, event, user } from './store/store.js';

import App from './App.vue';

createApp(App)
  .provide('events', events)
  .provide('users', users)
  .provide('event', event)
  .provide('user', user)
  .mount('#app');
