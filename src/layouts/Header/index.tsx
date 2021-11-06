import React from 'react';
import { useLocation } from 'react-router';
import classNames from 'classnames';

import routes from '../../routes';
import { Container, Menu, MenuItem, StyledLink, Wrapper } from './styles';

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <Container>
      <Wrapper>
        <Menu>
          {routes.map(({ path, label }) => {
            return (
              <MenuItem key={path} className={classNames({ selected: currentPath === path })}>
                <StyledLink to={path}>{label}</StyledLink>
              </MenuItem>
            );
          })}
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
