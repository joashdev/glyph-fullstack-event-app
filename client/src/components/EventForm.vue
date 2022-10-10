<template>
  <NModal :mask-closable="false" preset="dialog" title="Dialog">
    <template #header>
      <div>New Event</div>
    </template>
    <div>
      <NForm
        ref="event"
        :model="eventValue"
        size="medium"
        :inline="false"
        :label-width="80"
        label-align="left"
        label-placement="top"
        :show-feedback="true"
        :show-label="true"
        :show-require-mark="false"
        :rules="rules"
        require-mark-placement="right"
      >
        <NFormItem label="Event Name" path="event.name">
          <NInput
            v-model:value="eventValue.name"
            :clearable="false"
            type="text"
            size="medium"
          />
        </NFormItem>
        <NGrid :span="24" :x-gap="2">
          <NFormItemGridItem :span="24" label="Date" path="undefined">
            <NDatePicker
              v-model:value="eventValue.date"
              :actions="['now']"
              :clearable="false"
              format=""
              size="medium"
              type="date"
            />
          </NFormItemGridItem>
          <NFormItemGridItem
            :span="12"
            label="Start time"
            path="eventValue.timestart"
          >
            <NTimePicker
              v-model:value="eventValue.timestart"
              :clearable="false"
              :use-12-hours="false"
              :actions="['now']"
              :hours="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
              :minutes="5"
              format="HH:mm"
              size="medium"
            />
          </NFormItemGridItem>
          <NFormItemGridItem
            :span="12"
            label="End time"
            path="eventValue.timeend"
          >
            <NTimePicker
              v-model:value="eventValue.timeend"
              :clearable="false"
              :use-12-hours="false"
              :actions="['now']"
              :hours="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
              :is-hour-disabled="
                (hour) => {
                  return hour < new Date(eventValue.timestart).getUTCHours();
                }
              "
              :minutes="5"
              format="HH:mm"
              size="medium"
            />
          </NFormItemGridItem>
        </NGrid>
        <NFormItem label="Event Description" path="eventValue.description">
          <NInput
            v-model:value="eventValue.description"
            :clearable="false"
            type="textarea"
            size="medium"
          />
        </NFormItem>
        <NFormItem label="Tag users" path="undefined">
          <NSelect
            v-model:value="eventValue.users"
            size="medium"
            placeholder="Select users"
            :multiple="true"
            :clearable="false"
            :options="
              users.map((user) => {
                return { label: user.name, value: user._id };
              })
            "
          />
        </NFormItem>
      </NForm>
    </div>
    <template #action>
      <NButton>Add Event</NButton>
    </template>
  </NModal>
</template>

<script setup>
  import { inject, ref } from 'vue';
  import {
    NModal,
    NInput,
    NDatePicker,
    NTimePicker,
    NSelect,
    NButton,
    NGrid,
    NFormItemGridItem,
    NForm,
    NFormItem,
  } from 'naive-ui';

  const users = inject('users');
  const event = inject('event');
  const eventValue = ref({
    name: '',
    description: '',
    date: null,
    timestart: null,
    timeend: null,
    users: [],
  });
</script>

<style lang="scss" scoped></style>
