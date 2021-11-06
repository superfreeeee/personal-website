import styled from 'styled-components';

import { HEADER_HEIGHT } from '@layouts/Header/styles';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: ${HEADER_HEIGHT}px;
  overflow: auto;
`;
