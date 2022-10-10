<template>
  <NConfigProvider :theme="null">
    <div class="w-full h-full flex flex-col bg-gray-200">
      <NavBar />
      <div class="w-10/12 mx-auto">
        <AllEvents />
      </div>
    </div>
  </NConfigProvider>
</template>

<script setup>
  import { onMounted, inject, computed } from 'vue';
  import { NConfigProvider } from 'naive-ui';
  import { getAllEvents, getAllUsers } from './utils/axios.js';
  import NavBar from './components/NavBar.vue';
  import AllEvents from './components/AllEvents.vue';

  const events = inject('events');
  onMounted(() => {
    getAllEvents();
    getAllUsers();
  });
</script>

<style lang="postcss" scoped></style>
