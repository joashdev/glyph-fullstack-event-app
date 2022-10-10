<template>
  <header
    class="w-full mb-10 h-20 p-5 bg-white flex justify-between border-b-2 border-slate-300 shadow-sm"
  >
    <div class="font-bold text-2xl">
      <span class="text-white bg-green-600 p-1">events</span>
      <span class="border-2 p-0.5 border-green-600">.app</span>
    </div>
    <nav class="">
      <NButton
        class="bg-green-600 mx-2"
        type="primary"
        large
        @click="newFormModal = true"
      >
        <template #icon>
          <NIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
            >
              <path
                d="M28 6a2 2 0 0 0-2-2h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V6h4v2h2V6h8v2h2V6h4v6h2z"
                fill="currentColor"
              ></path>
              <path
                d="M21 15l2.549 4.938l5.451.791l-4 3.844L26 30l-5-2.562L16 30l1-5.427l-4-3.844l5.6-.791L21 15z"
                fill="currentColor"
              ></path></svg
          ></NIcon>
        </template>
        New Event
      </NButton>
      <NButton
        class="bg-green-600 mx-2"
        type="primary"
        large
        @click="newUserModal = true"
      >
        <template #icon>
          <NIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
            >
              <path
                d="M32 14h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2z"
                fill="currentColor"
              ></path>
              <path
                d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z"
                fill="currentColor"
              ></path>
              <path
                d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </NIcon>
        </template>
        New User
      </NButton>
    </nav>
    <EventForm v-model:show="newFormModal" />
    <UserForm v-model:show="newUserModal" />
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  import { NButton, NIcon } from 'naive-ui';
  import EventForm from './EventForm.vue';
  import UserForm from './UserForm.vue';

  const newFormModal = ref(false);
  const newUserModal = ref(false);
</script>

<style lang="scss" scoped></style>
