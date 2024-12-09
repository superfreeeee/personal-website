import React from 'react';

import { IconType } from '@/components/Icon';
import { DetailContainer, TechIcon } from '../styles';

const Hobby = () => {
  return (
    <DetailContainer>
      <TechIcon type={IconType.BasketBall} title={'Basketball'} />
      <TechIcon type={IconType.Movie} title={'Movie'} />
      <TechIcon type={IconType.Music} title={'Music'} />
      <TechIcon type={IconType.Games} title={'Games'} />
      <TechIcon type={IconType.Coding} title={'Coding'} />
    </DetailContainer>
  );
};

export default Hobby;
