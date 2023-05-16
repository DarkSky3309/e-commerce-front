export const getLocalStorage = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  return null;
}