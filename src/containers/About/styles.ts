import styled from 'styled-components';

export const AVATAR_FRONT_SIZE = 300; //    前头像大小
export const AVATAR_BACK_SIZE = 240; //     后头像大小
export const AVATAR_FRONT_Z_INDEX = 100; // 前头像 z 坐标
export const AVATAR_BACK_Z_INDEX = 10; //   后头像 z 坐标
export const AVATAR_BACK_OFFSET = 100; //   后头像位置偏移

/**
 * 外容器
 */
export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100%;
`;

/**
 * 头像区块
 */
export const AvatarSection = styled.section`
  position: relative;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  /* left: 50%; */
  width: ${AVATAR_FRONT_SIZE + AVATAR_BACK_OFFSET}px;
  height: ${AVATAR_FRONT_SIZE}px;
  transform: translateY(-50%);
`;

/**
 * 头像容器
 */
export interface AvatarProps {
  src: string;
  front?: boolean;
}

export const Avatar = styled.div<AvatarProps>`
  position: absolute;
  bottom: 50%;
  left: ${(props) => (props.front ? 0 : AVATAR_BACK_OFFSET)}px;
  width: ${(props) => (props.front ? AVATAR_FRONT_SIZE : AVATAR_BACK_SIZE)}px;
  height: ${(props) => (props.front ? AVATAR_FRONT_SIZE : AVATAR_BACK_SIZE)}px;
  border: 5px solid #fff;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  transform: translateY(50%);
  transition: all 0.4s ease;
  z-index: ${(props) => (props.front ? 100 : 10)};
`;
