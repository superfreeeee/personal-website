import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from '../../routes';
import { Container } from './styles';

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <Container>
      <Switch>
        {routes.map(({ path, component }) => {
          return <Route key={path} exact path={path} component={component} />;
        })}
        <Route>
          <Redirect to={'/'} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Main;
