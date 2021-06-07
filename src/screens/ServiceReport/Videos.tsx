import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import Input from '../../components/Input';
import { ServiceReportForm } from '../../components/ServiceReportForm';

type InputEventProps = NativeSyntheticEvent<TextInputChangeEventData>;

function Videos() {
  const [ inputText, setInputText ] = useState('')
  const navigation = useNavigation()

  const handleSubmit = useCallback(() => {
    navigation.navigate('Hours')
  }, [])
  
  const handleInputChange = useCallback((event: InputEventProps) => {
    setInputText(event.nativeEvent.text)
  }, [])

  return (
    <ServiceReportForm title="Quantos vídeos mostrados" isFormFilled={inputText.length > 0} handleSubmit={handleSubmit} >
      <Input
        placeholder="Digite a quantidade de vídeos que você mostrou" 
        onChange={handleInputChange} 
        value={inputText} 
        returnKeyType="done"
        keyboardType="numeric"
        onSubmitEditing={handleSubmit}
      />
    </ServiceReportForm>
  );
};

export default Videos;
