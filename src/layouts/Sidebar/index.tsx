import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from './components/Logo';
import NavList, { NavItem } from './components/NavList';
import { IconType } from '@components/Icon';
import Profile from './components/Profile';
import { getItem, LocalStorageKey, setItem } from '@libs/localStorage';

import { BG_COLOR, SIDEBAR_PADDING_HORIZONTAL, SIDEBAR_PADDING_VERTICAL } from './style';
import classNames from 'classnames';

const Container = styled.div`
  position: relative;
  width: 78px;
  padding: ${SIDEBAR_PADDING_VERTICAL}px ${SIDEBAR_PADDING_HORIZONTAL}px;
  background: ${BG_COLOR};
  transition: all 0.4s ease;

  &.open {
    width: 250px;
  }
`;

const useMini = () => {
  const [mini, setMini] = useState(false);

  const toggleMini = useCallback(() => {
    setMini(!mini);
    setItem(LocalStorageKey.SidebarMinimize, !mini);
  }, [mini]);

  useEffect(() => {
    const mini = !!getItem(LocalStorageKey.SidebarMinimize);
    setMini(mini);
  }, []);

  return { mini, toggleMini };
};

const Sidebar = () => {
  const items: NavItem[] = [
    { target: '/blog', icon: IconType.Blogger, title: '博客' },
    { target: '/tools', icon: IconType.Tools, title: '工具箱' },
    { target: '/apps', icon: IconType.Apps, title: '应用' },
    { target: '/librarys', icon: IconType.Library, title: '三方库' },
    { target: '/about', icon: IconType.User, title: '关于我' },
  ];

  const { mini, toggleMini } = useMini();

  return (
    <Container className={classNames({ open: !mini })}>
      <Logo mini={mini} toggleMini={toggleMini} />
      <NavList items={items} mini={mini} />
      <Profile mini={mini} />
    </Container>
  );
};

export default Sidebar;
