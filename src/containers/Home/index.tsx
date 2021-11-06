import React, { FC } from 'react';

import { AboutLink, Container, Content, Expertise, Title } from './styles';

const Home: FC = () => {
  return (
    <Container>
      <Content>
        <Title>Superfree 超悠閒(悠闲)</Title>
        <Expertise>Full Stack Developer</Expertise>
        <AboutLink to={'/about'}>About me</AboutLink>
      </Content>
    </Container>
  );
};

export default Home;
