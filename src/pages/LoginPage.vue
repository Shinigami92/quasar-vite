<script setup lang="ts">
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const username = ref('');
const password = ref('');
</script>

<template lang="pug">
QLayout.login-page(view="hHh LpR lFf")
  QPageContainer
    QPage.bg-image.full-width.row.justify-center.content-center(padding)
      QCard(:style="{ minWidth: '500px' }")
        .q-bt-md-brand

        QCardSection
          .text-h6 Welcome to Quasar Vite App

        QCardSection
          QForm.q-gutter-md.column(autofocus)
            QInput(
              v-model="username",
              :label="$t('username')",
              autocomplete="username",
              filled
            )
              template(#prepend)
                QIcon(name="mdi-account")

            PasswordInput(v-model="password")
</template>

<style lang="scss">
.login-page .bg-image {
  // background: url(@/assets/login_background.png) rgba(black, 0.4);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
</style>
