<script setup lang="ts">
import { useKeyModifier, useVModel } from '@vueuse/core';
import { ref } from 'vue';

const props = withDefaults(defineProps<{ modelValue: string }>(), {
  modelValue: '',
});
const emit = defineEmits(['update:modelValue']);
const modelValue = useVModel(props, 'modelValue', emit);

const textVisible = ref(false);

const capsLockState = useKeyModifier('CapsLock');
</script>

<template lang="pug">
QInput(
  v-model="modelValue",
  :type="textVisible ? 'text' : 'password'",
  :label="$t('password')",
  :hint="capsLockState ? $t('caps_lock_is_on') : undefined",
  filled
)
  template(#prepend)
    QIcon(name="mdi-key-variant")
  template(#append)
    QIcon.cursor-pointer(
      :name="textVisible ? 'mdi-eye' : 'mdi-eye-off'",
      @click="textVisible = !textVisible"
    )
</template>
