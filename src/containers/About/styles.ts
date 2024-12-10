import styled from 'styled-components';

export const AVATAR_FRONT_SIZE = 300; //    前头像大小
export const AVATAR_BACK_SIZE = 240; //     后头像大小
export const AVATAR_FRONT_Z_INDEX = 100; // 前头像 z 坐标
export const AVATAR_BACK_Z_INDEX = 10; //   后头像 z 坐标
export const AVATAR_BACK_OFFSET = 100; //   后头像位置偏移

export const INFO_SECTION_PADDING_LEFT = 40; // 个人信息区块左间距
export const INFO_BLOCK_PADDING_TOP = 16; //    个人信息内容块上间距

/**
 * 外容器
 */
export const Container = styled.div`
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

/**
 * 个人介绍
 */
export const InfoSection = styled.section`
  position: relative;
`;

export enum InfoBlockArea {
  NAME = 'A',
  GENDER = 'B',
  AGE = 'C',
  TECH = 'D',
  HOBBY = 'F',
}

export const InfoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  display: grid;
  grid-template-columns: 100px 100px 110px 80px;
  grid-template-rows: 50px 80px 80px;
  column-gap: 16px;
  row-gap: ${INFO_BLOCK_PADDING_TOP}px;
  grid-template-areas:
    'A A B C'
    'D D D E'
    'G F F F';
  padding-left: ${INFO_SECTION_PADDING_LEFT}px;
  transform: translateY(-50%);
`;

/**
 * 个人介绍 grid 块
 */
interface InfoBlockProps {
  area?: InfoBlockArea | string;
}

export const InfoBlock = styled.div<InfoBlockProps>`
  grid-area: ${(props) => props.area || ''};
  position: relative;
`;

/**
 * 块标题
 */
export interface InfoTitleProps {
  align?: 'left' | 'right';
}
export const InfoTitle = styled.h1<InfoTitleProps>`
  position: absolute;
  ${(props) => props.align || 'left'}: 12px;
  top: 0;
  padding: 0 6px;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: 600;
  background-color: #fff;
`;

/**
 * 块内容
 */
export const InfoDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: ${INFO_BLOCK_PADDING_TOP / 2 + 4}px 14px 6px;
  border: 2px solid #000;
  border-radius: 12px;
`;
