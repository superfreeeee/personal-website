import classNames from 'classnames';
import React, { FC } from 'react';
import styled from 'styled-components';

interface _IconProps {
  size: number;
  width?: number;
  height?: number;
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
}

interface IconProps {
  type: IconType;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

const defaultProps = {
  size: 24,
};

const Icon: FC<IconProps> = ({ type, className, ...others }) => {
  const props = { ...defaultProps, ...others };
  return <I className={classNames('bx', type, className)} {...props} />;
};

export default Icon;
