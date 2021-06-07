import { TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  padding: 8px 0;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.text_dark};
  background-color: transparent;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray5};
  margin-top: 8px;
`;
