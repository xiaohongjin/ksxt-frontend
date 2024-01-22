import { createI18n } from 'vue-i18n';
import Store from '@/store';
import elementEnLocale from 'element-plus/es/locale/lang/en';
import elementZhLocale from 'element-plus/es/locale/lang/zh-cn';
import enLocale from './en';
import zhLocale from './zh';
import AvueEnLocale from '@smallwei/avue/lib/locale/lang/en';
import AvueZhLocale from '@smallwei/avue/lib/locale/lang/zh';

export const messages = {
  en: {
    ...enLocale,
    ...AvueEnLocale,
    ...elementEnLocale,
  },
  'zh-cn': {
    ...zhLocale,
    ...AvueZhLocale,
    ...elementZhLocale,
  },
};
export const language = Store.getters.language;
export default createI18n({
  locale: language,
  messages,
});
