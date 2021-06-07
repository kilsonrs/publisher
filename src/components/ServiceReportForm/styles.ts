import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;  
`;