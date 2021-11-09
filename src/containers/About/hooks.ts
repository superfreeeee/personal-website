import { useCallback, useEffect, useRef, useState } from 'react';

import { noop } from '@utils/functional';
import { INVERT_AVATAR_TIMESTAMP } from './config';

/**
 * 头像换位
 * @returns
 */
export const useInvert = () => {
  const [invert, setInvert] = useState(false);

  /**
   * 反转
   *   prev => set(!prev)
   *   单例
   */
  const switchInvert = useCallback((prev: boolean) => {
    setInvert(!prev);
  }, []);

  /**
   * 设置计时器
   * 步骤:
   *   清理上一次的计时器
   *   设置新的计时器, 保留计时器引用
   */
  const clearTimerRef = useRef(noop);
  const setTimer = useCallback((prev: boolean) => {
    // 清理上一个计时器
    clearTimerRef.current();

    // 设置计时器
    const timer = window.setInterval(() => {
      switchInvert(prev);
      prev = !prev;
    }, INVERT_AVATAR_TIMESTAMP);
    // console.log(`create timer: ${timer}`);

    // 保留清理函数
    clearTimerRef.current = () => {
      // console.log(`clear timer: ${timer}`);
      clearInterval(timer);
      clearTimerRef.current = noop;
    };
  }, []);

  /**
   * Mount/Unmount 计时器生命周期清理
   */
  useEffect(() => {
    // setTimer(invert);

    return () => {
      clearTimerRef.current();
    };
  }, []);

  /**
   * 立即交换
   *   交换标志 & 重新设置计时器
   */
  const invertImmediate = useCallback(() => {
    switchInvert(invert);
    setTimer(!invert);
  }, [invert, setTimer]);

  return { invert, invertImmediate };
};
