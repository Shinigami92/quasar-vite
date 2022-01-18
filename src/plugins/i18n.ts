import messages from '@/i18n';
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

export default ({ app }: { app: App<Element> }): void => {
  const i18n = createI18n({
    locale: 'en-US',
    messages,
  });

  app.use(i18n);
};
