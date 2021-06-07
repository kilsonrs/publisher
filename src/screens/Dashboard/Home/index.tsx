import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container, Header, Title } from './styles';

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <Container>
      <Header>
        <Title>Últimos relatórios</Title>
      </Header>
      <Text>Home</Text>
      {children}
    </Container>
  );
};

export default Home;
