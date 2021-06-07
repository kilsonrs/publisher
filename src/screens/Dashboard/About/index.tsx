import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface AboutProps {
  children: ReactNode;
}

function About({ children }: AboutProps) {
  return (
    <Container>
      <Text>Sobre o aplicativo</Text>
      {children}
    </Container>
  );
};

export default About;
