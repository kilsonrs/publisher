import React from 'react';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Button } from './styles';

interface FloatingActionButtonProps extends RectButtonProps {
  enabled?: boolean;
}

function FloatingActionButton({ enabled = false, ...rest  }: FloatingActionButtonProps) {
  const theme = useTheme();
  return (
    <Container enabled={enabled}>
      <Button enabled={enabled} {...rest}>
        <MaterialIcons
          name="arrow-forward"
          size={24}
          color={enabled ? theme.colors.shape : theme.colors.gray5}
        />
      </Button>
    </Container>
  );
};

export default FloatingActionButton;
