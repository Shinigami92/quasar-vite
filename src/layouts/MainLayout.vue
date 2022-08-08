<script setup lang="ts">
// import DAppHeader from '@/components/DAppHeader.vue';
// import DAppNavigation from '@/components/DAppNavigation.vue';
// import DDrawerSettings from '@/components/DDrawerSettings.vue';
import { useToggle } from '@vueuse/core';

const [settingsDrawer, toggleSettingsDrawer] = useToggle(false);
</script>

<template lang="pug">
QLayout.bg-theme(view="hHh LpR lFf")
  //- DAppHeader(@click:settings="toggleSettingsDrawer(true)")

  //- DAppNavigation

  QPageContainer
    router-view(v-slot="{ Component, route }")
      transition(name="fade", mode="out-in")
        component(:is="Component", :key="route.path")

  //- DDrawerSettings(v-model="settingsDrawer")
</template>

<style lang="scss">
body.body--light {
  .q-layout.bg-theme,
  .bg-theme .q-page-container {
    background-color: $primary-50;
  }
}

body.body--dark {
  .q-layout.bg-theme,
  .bg-theme .q-page-container {
    background-color: var(--q-dark-page);
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
