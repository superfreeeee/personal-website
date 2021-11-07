import styled from 'styled-components';

import { HEADER_HEIGHT } from '@layouts/Header/styles';
import { FOOTER_HEIGHT } from '@layouts/Footer/styles';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${FOOTER_HEIGHT}px;
  overflow: auto;
`;
