import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';

import Icon, { IconType } from '@components/Icon';
import Tooltip from '@components/Tooltip';
import { BG_HOVER_COLOR, FONT_COLOR, FONT_HOVER_COLOR } from '../style';
import { TRANS_ALL_FAST } from '@constant/styles';

const Wrapper = styled.ul`
  margin-top: 20px;

  &.open .title {
    opacity: 1;
  }
`;

const Item = styled.li`
  width: 100%;
  height: 50px;
  margin: 8px 0;
  list-style: none;
  white-space: nowrap;

  a {
    display: flex;
    align-items: center;
    color: ${FONT_COLOR};
    text-decoration: none;
  }
`;

const ItemLink = styled(Link)`
  border-radius: 12px;
  ${TRANS_ALL_FAST}

  &:hover {
    background: ${BG_HOVER_COLOR};
    color: ${FONT_HOVER_COLOR};
  }
`;

const ItemTitle = styled.span`
  opacity: 0;
  ${TRANS_ALL_FAST}
`;

export interface NavItem {
  target?: string;
  icon?: IconType;
  title: string;
}

interface NavListProps {
  items: NavItem[];
  mini: boolean;
}

const NavList: FC<NavListProps> = ({ items, mini }) => {
  return (
    <Wrapper className={classNames({ open: !mini })}>
      {items.map(({ target = '#', icon, title }) => (
        <Item key={target}>
          <Tooltip active={mini} text={title}>
            <ItemLink to={target}>
              {icon && <Icon type={icon} size={18} height={50} width={50} />}
              <ItemTitle className={'title'}>{title}</ItemTitle>
            </ItemLink>
          </Tooltip>
        </Item>
      ))}
    </Wrapper>
  );
};

export default NavList;
