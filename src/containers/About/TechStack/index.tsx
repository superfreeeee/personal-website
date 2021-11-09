import React from 'react';

import { IconType } from '@components/Icon';
import { DetailContainer, TechIcon } from '../styles';

const TechStack = () => {
  return (
    <DetailContainer>
      <TechIcon type={IconType.React} title={'React'} />
      <TechIcon type={IconType.Redux} title={'Redux'} />
      <TechIcon type={IconType.NodeJS} title={'Node.js'} />
      <TechIcon type={IconType.SpringBoot} title={'SpringBoot'} />
      <TechIcon type={IconType.Docker} title={'Docker'} />
    </DetailContainer>
  );
};

export default TechStack;
