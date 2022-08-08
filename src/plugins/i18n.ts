import messages, { useI18nLocale } from '@/i18n';
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

export default ({ app }: { app: App<Element> }): void => {
  const i18n = createI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages,
  });

  const i18nLocale = useI18nLocale();

  i18n.global.locale = i18nLocale.value;

  app.use(i18n);
};
