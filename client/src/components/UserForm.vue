<template>
  <NModal :mask-closable="false" preset="dialog" title="Dialog">
    <template #header>
      <div>New Event</div>
    </template>
    <div>
      <NForm
        ref="formRef"
        :model="model"
        :rules="rules"
        :size="size"
        label-placement="top"
      >
        <NFormItem :span="18" label="User Full Name" path="inputValue">
          <NInput placeholder="Krisostomo Juan Ramos" />
        </NFormItem>
      </NForm>
    </div>
    <template #action>
      <div>action</div>
    </template>
  </NModal>
</template>

<script setup>
  import { NModal, NForm, NGrid, NFormItem, NInput } from 'naive-ui';
</script>

<style lang="scss" scoped></style>
