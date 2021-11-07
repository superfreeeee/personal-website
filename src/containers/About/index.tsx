import { AVATAR1_SRC, AVATAR2_SRC } from '@constant/image';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Avatar, AvatarSection, AvatarWrapper, Container } from './styles';

const INVERT_AVATAR_TIMESTAMP = 5000;
const noop = () => {};

/**
 * 头像换位
 * @returns
 */
const useInvert = () => {
  const [invert, setInvert] = useState(false);
  const clearTimerRef = useRef(noop);

  const switchInvert = useCallback((prev: boolean) => {
    setInvert(!prev);
  }, []);

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

  useEffect(() => {
    // onMount 设置
    setTimer(invert);

    // willUnMount 清理
    return () => {
      clearTimerRef.current();
    };
  }, []);

  // 立即交换
  const invertImmediate = useCallback(() => {
    switchInvert(invert);
    setTimer(!invert);
  }, [invert, setTimer]);

  return { invert, invertImmediate };
};

/**
 * About me 页面
 * @returns
 */
const About: FC = () => {
  const { invert, invertImmediate } = useInvert();

  return (
    <Container>
      <AvatarSection onClick={invertImmediate}>
        <AvatarWrapper>
          <Avatar src={AVATAR1_SRC} front={!invert} />
          <Avatar src={AVATAR2_SRC} front={invert} />
        </AvatarWrapper>
      </AvatarSection>
      <div>Content</div>
    </Container>
  );
};

export default About;
