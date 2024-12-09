import type { CSSProperties } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface _IconProps {
  size: number;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const I = styled.i<_IconProps>`
  font-size: ${(props) => props.size}px;
  ${(props) => (props.width ? `min-width: ${props.width}px;` : null)}
  ${(props) =>
    props.height
      ? `
    height: ${props.height}px;
    line-height: ${props.height}px;
  `
      : null}
  text-align: center;
`;

export enum IconType {
  Logo = 'bx-pyramid',
  Menu = 'bx-menu',
  MenuRight = 'bx-menu-alt-right',
  Blogger = 'bxl-blogger',
  Tools = 'bx-wrench',
  Apps = 'bx-grid-alt',
  Library = 'bx-library',
  User = 'bx-user',
  Github = 'bxl-github',
  LinkExternal = 'bx-link-external',
  Trash = 'bx-trash',
  Instagram = 'bxl-instagram',
  Copy = 'bx-copy-alt',
  Check = 'bx-check',
  React = 'bxl-react',
  Redux = 'bxl-redux',
  NodeJS = 'bxl-nodejs',
  Spring = 'bxl-spring-boot',
  Docker = 'bxl-docker',
  BasketBall = 'bxs-basketball',
  Movie = 'bx-movie',
  Music = 'bx-music',
  Games = 'bx-joystick-alt',
  Coding = 'bx-code-alt',
  Rss = 'bx-rss',
}

export interface IconProps {
  type: IconType;
  className?: string;
  title?: string;
  size?: number;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const defaultProps = {
  size: 24,
};

export const Icon = ({ type, className, title, ...others }: IconProps) => {
  const props = { ...defaultProps, ...others };
  return <I title={title} className={classNames('bx', type, className)} {...props} />;
};
