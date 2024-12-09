import { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConfig } from '@/routes/interface';

import styles from './Main.module.scss';

interface IMainProps {
  routes: RouteConfig[];
}

export const Main = memo(({ routes }: IMainProps) => {
  return (
    <main className={styles.MainContainer}>
      <Switch>
        {routes.map(({ path, component }) => {
          return <Route key={path} exact path={path} component={component} />;
        })}
        <Route>
          <Redirect to={'/'} />
        </Route>
      </Switch>
    </main>
  );
});
