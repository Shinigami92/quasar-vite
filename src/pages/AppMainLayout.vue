<script setup lang="ts">
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import { ref } from 'vue';

const password = ref('');
</script>

<template lang="pug">
QLayout(view="hHh LpR lFf")
  QPageContainer
    PasswordInput(v-model="password")
</template>
