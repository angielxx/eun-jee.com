export function useDateFormat(date: string) {
  // date = 2023-03-17T00:00:00.000Z
  const arr = date.split('T')[0].split('-');
  return `${arr[0]}.${arr[1]}.${arr[2]}`;
}
