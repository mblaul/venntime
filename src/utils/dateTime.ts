export function formatDate(date: Date) {
  const locale = window.navigator.language;
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
}
