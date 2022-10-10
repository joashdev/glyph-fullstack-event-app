import axios from 'axios';
import { events, event, users, user } from '../store/store.js';

// set axios base

axios.defaults.baseURL = 'http://localhost:3005';

const getAllEvents = async () => {
  const response = await axios.get('/api/events/').catch(console.log);
  console.log(response);
  events.value = response.data;
  console.log(events);
};

const getAllUsers = async () => {
  const response = await axios.get('/api/users').catch(console.log);
  users.value = response.data;
};

export { getAllEvents, getAllUsers };
