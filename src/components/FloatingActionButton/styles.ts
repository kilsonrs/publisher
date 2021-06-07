import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

interface ContainerProps {
  enabled: boolean;
}

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
  border-radius: 28px;

  border-color: ${({theme, enabled}) => enabled ? theme.colors.primary : theme.colors.gray5};
  border-width: 2px;
  position: absolute;

  bottom: 56px;
  right: 24px;
`;

export const Button = styled(RectButton)<ContainerProps>`
  justify-content: center;
  align-items: center;

  background-color: ${({theme, enabled}) => enabled ? theme.colors.primary : 'transparent'};
  
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const Icon = styled(MaterialIcons)<ContainerProps>`
  color: ${({theme, enabled}) => enabled ? theme.colors.shape : theme.colors.gray5};
`