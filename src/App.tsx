import { BrowserRouter } from 'react-router-dom';

import { Main } from '@/layouts/Main';
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

import styles from './App.module.scss';
import { routes } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.AppContainer}>
        <Header routes={routes} />
        <Main routes={routes} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
