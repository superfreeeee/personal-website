import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { RouteConfig } from '@/routes/interface';

import styles from './Header.module.scss';

interface IHeaderProps {
  routes: RouteConfig[];
}

export const Header = memo(({ routes }: IHeaderProps) => {
  const currentPath = useLocation().pathname;

  return (
    <header className={styles.HeaderContainer}>
      <ul className={styles.HeaderMenu}>
        {routes.map(({ path, label }) => {
          return (
            <li
              key={path}
              className={classNames(styles.HeaderMenuItem, {
                [styles.selected]: currentPath === path,
              })}
            >
              <Link className={styles.HeaderMenuItemLabel} to={path}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
});
