import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HEADER_HEIGHT = 60;
export const HEADER_PADDING_RIGHT = 60;
export const HEADER_BG_COLOR = 'rgba(255, 255, 255, 0.7)';

export const MENU_ITEM_UNDERLINE_WIDTH = 2;
export const MENU_ITEM_UNDERLINE_PADDING = 24;
export const MENU_ITEM_UNDERLINE_COLOR = 'rgb(211, 211, 211)';

/**
 * 外容器
 */
export const Container = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding-right: ${HEADER_PADDING_RIGHT}px;
  background-color: ${HEADER_BG_COLOR};
  backdrop-filter: blur(10px);
  text-align: right;
`;

/**
 * 定位包装
 */
export const Wrapper = styled.div`
  display: inline-block;
`;

/**
 * 导航栏
 */
export const Menu = styled.ul`
  display: flex;
  height: ${HEADER_HEIGHT}px;
`;

/**
 * 导航选项
 */
export const MenuItem = styled.li`
  position: relative;
  list-style: none;

  /* 选中下划线 */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${MENU_ITEM_UNDERLINE_WIDTH}px;
    width: 0%;
    background-color: ${MENU_ITEM_UNDERLINE_COLOR};
    opacity: 0;
    transition: width 0.4s ease;
  }

  &:hover::before,
  &.selected::before {
    opacity: 1;
    width: 100%;
  }
`;

/**
 * 跳转组件
 */
export const StyledLink = styled(Link)`
  display: inline-block;
  height: 100%;
  padding: 0 ${MENU_ITEM_UNDERLINE_PADDING}px;
  line-height: ${HEADER_HEIGHT}px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;
