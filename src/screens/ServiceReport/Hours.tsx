import React, { useCallback, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Input from '../../components/Input';
import { ServiceReportForm } from '../../components/ServiceReportForm';

type InputEventProps = NativeSyntheticEvent<TextInputChangeEventData>;

function Hours() {
  const [ inputText, setInputText ] = useState('')
  const navigation = useNavigation()

  const handleSubmit = useCallback(() => {
    navigation.navigate('Revisits')
  }, [])
  
  const handleInputChange = useCallback((event: InputEventProps) => {
    setInputText(event.nativeEvent.text)
  }, [])

  return (
    <ServiceReportForm title="Quantas horas?" isFormFilled={inputText.length > 0} handleSubmit={handleSubmit} >
      <Input
        placeholder="Digite a quantidade de horas ou minutos" 
        onChange={handleInputChange} 
        value={inputText} 
        returnKeyType="done"
        keyboardType="numeric"
        onSubmitEditing={handleSubmit}
      />
    </ServiceReportForm>
  );
};

export default Hours;
