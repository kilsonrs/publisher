import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};

  width: 100%;
  height: 56px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;