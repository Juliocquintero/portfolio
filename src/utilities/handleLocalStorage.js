export const handleLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageValue = (key) => {
  const valueInLocalStorage = localStorage.getItem(key);
  return valueInLocalStorage;
};
