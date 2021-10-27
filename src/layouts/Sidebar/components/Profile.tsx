import React, { FC } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import { FONT_COLOR, SIDEBAR_PADDING_HORIZONTAL, SIDEBAR_PADDING_VERTICAL } from '../style';
import Icon, { IconType } from '@components/Icon';
import { GITHUB_PROFILE_LINK } from '@constant/config';
import { TRANS_ALL_FAST } from '@constant/styles';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${SIDEBAR_PADDING_VERTICAL}px ${SIDEBAR_PADDING_HORIZONTAL}px;
  color: ${FONT_COLOR};

  .profileIcon,
  .profileContent {
    opacity: 0;
    ${TRANS_ALL_FAST}
  }

  &.open .profileIcon,
  &.open .profileContent {
    opacity: 1;
  }

  .profileLink {
    ${TRANS_ALL_FAST}
  }

  &.open .profileLink {
    left: 90%;
  }
`;

const Content = styled.div`
  margin-left: 12px;
  flex: 1;

  .title,
  .subtitle {
    white-space: nowrap;
  }

  .title {
    font-size: 15px;
  }

  .subtitle {
    font-size: 12px;
  }
`;

const LinkGithub = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

interface ProfileProps {
  mini: boolean;
}

const Profile: FC<ProfileProps> = ({ mini }) => {
  const openGithubProfile = () => {
    window.open(GITHUB_PROFILE_LINK, '#blank');
  };

  return (
    <Wrapper className={classNames({ open: !mini })}>
      <Icon className="profileIcon" type={IconType.Github} size={28} height={50} />
      <Content className="profileContent">
        <div className="title">Superfree</div>
        <div className="subtitle">Github Profile</div>
      </Content>
      <LinkGithub className="profileLink" onClick={openGithubProfile}>
        <Icon type={IconType.LinkExternal} size={20} width={50} height={50} />
      </LinkGithub>
    </Wrapper>
  );
};

export default Profile;
