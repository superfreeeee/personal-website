import React from 'react';
import styled from 'styled-components';

import Base64Coding from '@containers/Base64Coding';
import BHDConverter from '@containers/BHDConverter';
import GPACalcualtor from '@containers/GPACalcualtor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Tools = () => {
  return (
    <Wrapper>
      <Base64Coding />
      <BHDConverter />
      <GPACalcualtor />
    </Wrapper>
  );
};

export default Tools;
