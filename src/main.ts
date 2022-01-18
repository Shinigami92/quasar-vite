// organize-imports-ignore

import { createApp, h, provide } from 'vue';

/* Quasar */

import { Quasar, Dialog } from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';
import iconSet from 'quasar/icon-set/mdi-v6';
import '@quasar/extras/mdi-v6/mdi-v6.css';

import 'quasar/src/css/index.sass';

/* Plugins */

import router from '@/router';
import i18n from '@/plugins/i18n';

/* App */

import App from '@/App.vue';

const app = createApp({
  render: () => h(App),
});

app.use(Quasar, {
  plugins: {
    Dialog,
  },
  iconSet,
});

app.use(router);

i18n({ app });

app.mount('#app');
