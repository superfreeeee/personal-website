import React from 'react';

import { IconType } from '@/components/Icon';
import { DetailContainer, TechIcon } from '../styles';
import {
  REACT_HOME_LINK,
  REDUX_HOME_LINK,
  NODEJS_HOME_LINK,
  SPRING_BOOT_HOME_LINK,
  DOCKER_HOME_LINK,
} from '@/constant/config';
import { TechLink } from './styles';

const TechStack = () => {
  return (
    <DetailContainer>
      <TechLink href={REACT_HOME_LINK}>
        <TechIcon type={IconType.React} title={'React'} />
      </TechLink>
      <TechLink href={REDUX_HOME_LINK}>
        <TechIcon type={IconType.Redux} title={'Redux'} />
      </TechLink>
      <TechLink href={NODEJS_HOME_LINK}>
        <TechIcon type={IconType.NodeJS} title={'Node.js'} />
      </TechLink>
      <TechLink href={SPRING_BOOT_HOME_LINK}>
        <TechIcon type={IconType.Spring} title={'Spring'} />
      </TechLink>
      <TechLink href={DOCKER_HOME_LINK}>
        <TechIcon type={IconType.Docker} title={'Docker'} />
      </TechLink>
    </DetailContainer>
  );
};

export default TechStack;
