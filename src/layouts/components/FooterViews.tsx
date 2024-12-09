import { useEffect, useState } from 'react';
import { getItem, LocalStorageKey, setItem } from '@/utils/localStorage';

import styles from './FooterViews.module.scss';

export const FooterViews = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const count = (getItem(LocalStorageKey.ViewsCount) || 0) + 1;
    setViews(count);
    setItem(LocalStorageKey.ViewsCount, count);
  }, []);

  return (
    <div className={styles.FooterViewsContainer}>
      <span className={styles.FooterViewsContent}>Views: {views}</span>
    </div>
  );
};
