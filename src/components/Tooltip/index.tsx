import React, { FC } from 'react';
import styled from 'styled-components';

import { SIDEBAR_PADDING_HORIZONTAL } from '@layouts/Sidebar/style';

const Wrapper = styled.div<{ active: boolean }>`
  position: relative;

  ${(props) =>
    props.active &&
    `&:hover .tip {
      transition: all 0.2s ease;
      top: 50%;
      opacity: 1;
    }`}
`;

const Tip = styled.div`
  position: absolute;
  top: 0;
  right: ${-SIDEBAR_PADDING_HORIZONTAL}px;
  transform: translate(100%, -50%);
  padding: 6px 12px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 5px 10px rgb(0 0 0 / 30%);
  opacity: 0;
  font-size: 15px;
  transition: 0;
  white-space: nowrap;
  z-index: 10;
`;

interface TooltipProps {
  active?: boolean;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ children, active, text }) => {
  return (
    <Wrapper active={active}>
      {children}
      <Tip className="tip">{text}</Tip>
    </Wrapper>
  );
};

export default Tooltip;
