import { ReactNode } from 'react';
import { BiLogoDocker, BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoSpringBoot } from 'react-icons/bi';

import {
  REACT_HOME_LINK,
  REDUX_HOME_LINK,
  NODEJS_HOME_LINK,
  SPRING_BOOT_HOME_LINK,
  DOCKER_HOME_LINK,
} from '@/constant/config';

import styles from './index.module.scss';

const TECH_LINK_STYLE = { color: 'inherit' };
const TechLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a style={TECH_LINK_STYLE} href={href} target="_blank">
      {children}
    </a>
  );
};

const TECH_ICON_SIZE = 50;

export const TechStack = () => {
  return (
    <div className={styles.TechStackContainer}>
      <TechLink href={REACT_HOME_LINK}>
        <BiLogoReact size={TECH_ICON_SIZE} title="React" />
      </TechLink>
      <TechLink href={REDUX_HOME_LINK}>
        <BiLogoRedux size={TECH_ICON_SIZE} title="Redux" />
      </TechLink>
      <TechLink href={NODEJS_HOME_LINK}>
        <BiLogoNodejs size={TECH_ICON_SIZE} title="Node.js" />
      </TechLink>
      <TechLink href={SPRING_BOOT_HOME_LINK}>
        <BiLogoSpringBoot size={TECH_ICON_SIZE} title="Spring" />
      </TechLink>
      <TechLink href={DOCKER_HOME_LINK}>
        <BiLogoDocker size={TECH_ICON_SIZE} title="Docker" />
      </TechLink>
    </div>
  );
};
