import React, { useCallback } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/core';

type TabBarActionButtonProps = BottomTabBarButtonProps;

function TabBarActionButton({...props}: TabBarActionButtonProps) {
  const navigation = useNavigation()
  
  const handleSubmit = useCallback(() => {
    navigation.navigate('ServiceReport')
  }, [])

  return (
    <Container onPress={handleSubmit}>
      <MaterialIcons
        name="add"
        color="#FFF"
        size={24}
      />
    </Container>
  );
};

export default TabBarActionButton;
