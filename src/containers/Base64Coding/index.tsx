
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useMount } from '@youxian/utils';

const Base64Coding: FC = () => {
  const [plain, setPlain] = useState('');
  const [base64, setBase64] = useState('');

  const onPlainChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPlain = e.target.value;
    setPlain(newPlain);
    setBase64(window.btoa(newPlain));
  }, []);

  const onBase64Change = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const newBase64 = e.target.value;
    setBase64(newBase64);
    setPlain(window.atob(newBase64));
  }, []);

  useMount(() => {
    const initPlain = 'Hello world';
    setPlain(initPlain);
    setBase64(window.btoa(initPlain));
  });

  return (
    <div>
      <h3>Base64 Coding</h3>
      <textarea cols={30} rows={10} value={plain} onChange={onPlainChange}></textarea>
      <textarea cols={30} rows={10} value={base64} onChange={onBase64Change}></textarea>
    </div>
  );
};

export default Base64Coding;
