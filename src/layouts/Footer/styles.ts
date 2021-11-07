import styled from 'styled-components';

export const FOOTER_HEIGHT = 30;

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 0 60px;
  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
