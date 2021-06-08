import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;

  padding: 24px;
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

export const Card = styled.View`
  width: 100%;
  padding: 16px;

  border-radius: 5px;
  elevation: 1;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  
  margin-bottom: 24px;
`;

export const Month = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
`;

export const Column = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Key = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

