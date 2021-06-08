import styled from 'styled-components/native';
import Animated from 'react-native-reanimated'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Card = styled(Animated.View)`
  justify-content: flex-end;

  padding: 16px;

  width: 100%;
  height: 200px;

  background-color: ${({theme}) => theme.colors.shape};
  elevation: 1;
`;

export const ProgressIndicator = styled(Animated.View)`
  width: 100%;
  height: 2px;

  border-radius: 2px;

  background-color: ${({theme}) => theme.colors.primary};
`;


export const Title = styled(Animated.Text)`
  width: 100%;
  text-align: center;

  color: ${({ theme }) => theme.colors.success_strong};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
