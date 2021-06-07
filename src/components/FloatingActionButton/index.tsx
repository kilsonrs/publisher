import React, { ReactNode } from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon, Button } from './styles';

interface FloatingActionButtonProps extends RectButtonProps {
  enabled?: boolean;
}

function FloatingActionButton({ enabled = false, ...rest  }: FloatingActionButtonProps) {
  return (
    <Container enabled={enabled}>
      <Button enabled={enabled} {...rest}>
        <Icon
          name="arrow-forward"
          size={24}
        />
      </Button>
    </Container>
  );
};

export default FloatingActionButton;
