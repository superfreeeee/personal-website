import styled from 'styled-components';

import { BACKDROP_BLUR } from '@constant/styles';

export const Container = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  ${BACKDROP_BLUR}
`;
