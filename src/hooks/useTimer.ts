import { useEffect, useRef } from 'react';

const noop = () => {};

/**
 * auto clearTimeout wherever timer change
 * @param timer
 */
const useTimer = (timer?: number) => {
  const clearRef = useRef(noop);

  useEffect(() => {
    clearRef.current(); // 清除上次的 timer
    clearRef.current = timer
      ? () => {
          clearTimeout(timer);
          clearRef.current = noop;
        }
      : noop;
  }, [timer]);
};

export default useTimer;
