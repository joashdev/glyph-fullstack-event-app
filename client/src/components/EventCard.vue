<template>
  <div class="w-full bg-white p-5 my-1">
    <div class="flex justify-between flex-row">
      <div class="text-base font-medium text-slate-800 capitalize">
        {{ event.name }}
      </div>
      <div class="flex flex-row space-x-2">
        <NButton type="primary" class="bg-green-600" size="tiny">
          <NIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
            >
              <path d="M2 26h28v2H2z" fill="currentColor"></path>
              <path
                d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"
                fill="currentColor"
              ></path>
            </svg>
          </NIcon>
        </NButton>
        <NPopconfirm>
          <template #trigger>
            <NButton type="error" class="bg-red-600" size="tiny">
              <NIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                >
                  <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                  <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                  <path
                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                    fill="currentColor"
                  ></path>
                  <path d="M12 2h8v2h-8z" fill="currentColor"></path>
                </svg>
              </NIcon>
            </NButton>
          </template>
          <template #action>
            <NButton
              onclick="console.log('delete')"
              type="primary"
              quaternary
              size="small"
              >Cancel</NButton
            >
            <NButton
              onclick="console.log('delete')"
              type="error"
              class="bg-red-600"
              size="small"
              >Delete</NButton
            >
          </template>
          Delete Event?
        </NPopconfirm>
      </div>
    </div>
    <div>
      <div class="text-sm font-light text-slate-700 flex flex-col space-y-1">
        <p class="font-normal">{{ event.description }}</p>

        <p>
          <span class="mr-3 font-normal"> Date: </span>
          <span class="mr-1">
            {{ new Date(event.timestart).toDateString() }},
          </span>
          <span>
            {{ new Date(event.timestart).toLocaleTimeString() }} -
            {{ new Date(event.timeend).toLocaleTimeString() }}
          </span>
        </p>
        <div class="">
          <p class="font-normal">Attendees ({{ event.users.length }}):</p>
          <ul class="list-disc">
            <li class="ml-8" v-for="user in event.users" :key="user._id">
              {{ user.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { NButton, NIcon, NPopconfirm } from 'naive-ui';
  import { defineProps } from 'vue';
  defineProps({
    event: Object,
  });
  const handleNegativeClick = () => {
    console.log('negativeclick');
  };
  const handlePositiveClick = () => {
    console.log('positive');
  };
</script>

<style lang="postcss" scoped>
  NPopconfirm > NButton {
    background-color: goldenrod;
  }
</style>
