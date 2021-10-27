import { ChangeEvent, ChangeEventHandler, useState } from 'react';

const useInput = (
  initValue: string = ''
): [string, ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, (newValue: string) => void] => {
  const [value, setValue] = useState(initValue);

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return [value, onInputChange, setValue];
};

export default useInput;
