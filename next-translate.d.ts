import type { I18n, Paths, Translate } from 'next-translate';

type Tail<T> = T extends [unknown, ...infer Rest] ? Rest : never;

export interface TranslationsKeys {
  home: Paths<typeof import('./locales/en/home.json')>;
}

export interface TypeSafeTranslate<Namespace extends keyof TranslationsKeys> extends Omit<I18n, 't'> {
  t: {
    (key: TranslationsKeys[Namespace], ...rest: Tail<Parameters<Translate>>): string;
    <T extends string>(template: TemplateStringsArray): string;
  };
}

declare module 'next-translate/useTranslation' {
  export default function useTranslation<Namespace extends keyof TranslationsKeys>(namespace: Namespace): TypeSafeTranslate<Namespace>;
}
