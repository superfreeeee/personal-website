import React, { FC, ReactElement } from 'react';

import { AVATAR1_SRC, AVATAR2_SRC } from '@constant/image';
import TechStack from './TechStack';
import Hobby from './Hobby';
import {
  Avatar,
  AvatarSection,
  AvatarWrapper,
  Container,
  HolderIcon,
  InfoBlock,
  InfoBlockArea,
  InfoDetail,
  InfoSection,
  InfoTitle,
  InfoTitleProps,
  InfoWrapper,
} from './styles';
import { useInvert } from './hooks';
import Icon, { IconType } from '@components/Icon';

interface InfoData {
  area: InfoBlockArea;
  title: string;
  detail: string | number | ReactElement;
  titleProps?: InfoTitleProps;
}

const personalInfo: InfoData[] = [
  { area: InfoBlockArea.NAME, title: 'Name', detail: 'Tsai ShangTa' },
  { area: InfoBlockArea.GENDER, title: 'Gender', detail: 'Male' },
  { area: InfoBlockArea.AGE, title: 'Age', detail: 22 },
  { area: InfoBlockArea.TECH, title: 'Tech Stack', detail: <TechStack /> },
  { area: InfoBlockArea.HOBBY, title: 'Hobby', detail: <Hobby />, titleProps: { align: 'right' } },
];

/**
 * About me 页面
 * @returns
 */
const About: FC = () => {
  const { invert, invertImmediate } = useInvert();

  return (
    <Container>
      <AvatarSection>
        <AvatarWrapper onClick={invertImmediate}>
          <Avatar src={AVATAR1_SRC} front={!invert} title={'Superfree'} />
          <Avatar src={AVATAR2_SRC} front={invert} title={'Youxian'} />
        </AvatarWrapper>
      </AvatarSection>
      <InfoSection>
        <InfoWrapper>
          {personalInfo.map(({ area, title, detail, titleProps = {} }) => {
            return (
              <InfoBlock key={area} area={area}>
                <InfoTitle {...titleProps}>{title}</InfoTitle>
                <InfoDetail>{detail}</InfoDetail>
              </InfoBlock>
            );
          })}
          <InfoBlock area="E">
            <HolderIcon type={IconType.Rss} style={{ bottom: 0, left: 0 }} />
          </InfoBlock>
          <InfoBlock area="G">
            <HolderIcon type={IconType.Rss} style={{ top: 0, right: 0, transform: 'rotate(180deg)' }} />
          </InfoBlock>
        </InfoWrapper>
      </InfoSection>
    </Container>
  );
};

export default About;
