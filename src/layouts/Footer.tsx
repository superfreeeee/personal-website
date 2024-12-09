import { FooterViews } from '@/layouts/components/FooterViews';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <FooterViews />
    </footer>
  );
};
