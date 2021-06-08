import React from 'react';

import { TextInputMaskTypeProp, TextInputMaskOptionProp, TextInputMaskProps } from 'react-native-masked-text';

import { Container } from './styles';

interface InputProps extends TextInputMaskProps {
  type: TextInputMaskTypeProp;
  value: string;
  options?: TextInputMaskOptionProp;
  onChangeText:(text: string) => void;
}

const MaskInput: React.FC<InputProps> = ({ 
  type,
  value,
  options,
  onChangeText,
  ...rest
 }, ref) => {

  return (
    <Container 
      type={type}
      options={options}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}

export default MaskInput;
