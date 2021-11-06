import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 外容器
 */
export const Container = styled.main`
  height: 100%;
  padding-right: 20%;
`;

/**
 * 文字部分
 */
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`;

/**
 * 标题
 */
export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
`;

/**
 * 专长
 */
export const Expertise = styled.p`
  margin-top: 12px;
  font-size: 24px;
`;

/**
 * 跳转 About me
 */
export const AboutLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &::after {
    content: '>';
    margin-left: 6px;
    text-decoration: none;
  }
`;
