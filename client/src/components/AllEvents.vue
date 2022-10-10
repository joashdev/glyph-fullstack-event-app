<template>
  <div class="w-full h-full">
    <div class="w-full md:w-1/2 mx-auto">
      <div class="text-lg font-semibold mx-auto text-center mb-5">Events</div>
      <EventCard v-for="event in events" :key="event._id" :event="event" />
    </div>
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  import EventCard from './EventCard.vue';

  const events = inject('events');
</script>

<style lang="scss" scoped></style>
