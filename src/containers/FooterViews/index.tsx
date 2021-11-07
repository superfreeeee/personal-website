import { getItem, LocalStorageKey, setItem } from '@utils/localStorage';
import { useMount } from '@youxian/utils';
import React, { useState } from 'react';

import { Container } from './styles';

const FooterViews = () => {
  const [views, setViews] = useState(0);

  useMount(() => {
    const count = (getItem(LocalStorageKey.ViewsCount) || 0) + 1;
    setViews(count);
    setItem(LocalStorageKey.ViewsCount, count);
  });

  return (
    <Container>
      <span>Views: {views}</span>
    </Container>
  );
};

export default FooterViews;
