import { useNavigation } from '@react-navigation/core';
import React, { ReactNode, useCallback } from 'react';

import { Text } from 'react-native';
import { Button } from '../../components/Button';

import { Container } from './styles';

interface SummaryProps {
  children: ReactNode;
}

function Summary({ children }: SummaryProps) {
  const navigation = useNavigation()
  const handleSubmit = useCallback(() => {
    navigation.navigate('Home')
  }, [])
  return (
    <Container>
      <Text>Dá uma conferida:</Text>
      {children}
      <Button onPress={handleSubmit} title="Enviar relatório" />
    </Container>
  );
};

export default Summary;
