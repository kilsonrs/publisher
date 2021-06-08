import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const halfScreenWidth = Math.ceil(Dimensions.get('screen').width / 2);

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  hitSlop: {  top: 28, bottom: 28, right: 28, left: 28 }, 
})<ContainerProps>`
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary };

  width: 56px;
  height: 56px;
  border-radius: 28px;

  position: absolute;
  left: ${halfScreenWidth - 28}px;
  bottom: 28px ;

  z-index: 20;
`;