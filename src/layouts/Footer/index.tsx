import React from 'react';

import FooterViews from '@containers/FooterViews';
import { Container, Wrapper } from './styles';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterViews />
      </Wrapper>
    </Container>
  );
};

export default Footer;
