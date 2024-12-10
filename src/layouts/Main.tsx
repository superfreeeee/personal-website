import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RouteConfig } from '@/routes/interface';

import styles from './Main.module.scss';

interface IMainProps {
  routes: RouteConfig[];
}

export const Main = memo(({ routes }: IMainProps) => {
  return (
    <main className={styles.MainContainer}>
      <Routes>
        {routes.map(({ path, component: Comp }) => {
          return <Route key={path} path={path} element={<Comp />} />;
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
});
