import { useCallback } from 'react';

import { copy } from '@utils';

const useCopy = (text: string) => {
  return useCallback(() => {
    copy(text);
  }, [text]);
};

export default useCopy;
