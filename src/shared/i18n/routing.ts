export const supportedLocales = ["en", "vi"];

export function getLocalizedPath(locale: string, path: string) {
  return `/${locale}${path}`;
}
