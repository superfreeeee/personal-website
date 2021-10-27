import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Tools from './components/Tools';
import { BG_COLOR } from './style';

const Wrapper = styled.div`
  flex: 1;
  background: ${BG_COLOR};
`;

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/blog" />
        </Route>
        <Route exact path="/blog">
          my blog
        </Route>
        <Route exact path="/tools">
          <Tools />
        </Route>
        <Route exact path="/apps">
          my apps
        </Route>
        <Route exact path="/librarys">
          my librarys
        </Route>
        <Route exact path="/about">
          about superfree
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Main;
