import React, { FC } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import Icon, { IconType } from '@components/Icon';
import { TRANS_ALL_FAST } from '@constant/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  color: #fff;

  &.open .logoDetail {
    opacity: 1;
  }
`;

const LogoDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: 0;
  ${TRANS_ALL_FAST}
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ToggleButton = styled.div<{ mini: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(${(props) => (props.mini ? '-50%' : 0)}, -50%);
  cursor: pointer;
  text-align: center;
`;

interface LogoProps {
  mini: boolean;
  toggleMini: () => void;
}

const Logo: FC<LogoProps> = ({ mini, toggleMini }) => {
  return (
    <Wrapper className={classNames({ open: !mini })}>
      <LogoDetail className={'logoDetail'}>
        <Icon type={IconType.Logo} size={28} height={60} width={50} />
        <Title>Youxian</Title>
      </LogoDetail>
      <ToggleButton onClick={toggleMini} mini={mini}>
        <Icon type={mini ? IconType.Menu : IconType.MenuRight} size={23} height={60} />
      </ToggleButton>
    </Wrapper>
  );
};

export default Logo;
