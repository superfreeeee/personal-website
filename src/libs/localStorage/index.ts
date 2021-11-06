export enum LocalStorageKey {
  GPACalculatorSubject = '__youxian_website_gpa_calculator_subjects',
}

export const getItem = (key: LocalStorageKey) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setItem = (key: LocalStorageKey, value: any) => {
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};
