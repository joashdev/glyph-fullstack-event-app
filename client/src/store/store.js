import { ref } from 'vue';

const events = ref([]);
const users = ref([]);
const event = ref({
  name: '',
  description: '',
  timestart: new Date(),
  timeend: new Date(),
  users: [],
});
const user = ref({});

export { events, users, event, user };
