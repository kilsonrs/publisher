import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { TextInputMask } from 'react-native-masked-text'

export const Container = styled(TextInputMask)`
  padding: 8px 0;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.text_dark};
  background-color: transparent;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray5};
  margin-top: 8px;
`;
