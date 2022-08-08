import { createGlobalState, useSessionStorage } from '@vueuse/core';
import enUS from './en-US.yml';
import es from './es.yml';

const messages = {
  'en-US': enUS,
  es: es,
};

export type KnownI18nLocale = keyof typeof messages;

export const useI18nLocale = createGlobalState(() =>
  useSessionStorage<KnownI18nLocale>('locale', 'en-US'),
);

export default messages;
