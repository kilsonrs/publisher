import React, { useCallback, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';

import { ServiceReportForm } from '../../components/ServiceReportForm';
import MaskInput from '../../components/TextInput';
import { TextInput } from 'react-native';

function FieldTest() {
  const [ phoneInput, setPhoneInput ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ datetime, setDatetime ] = useState('')
  const [ money, setMoney ] = useState('')
  const [ zipCode, setZipCode ] = useState('')
  const navigation = useNavigation()

  const handleSubmit = useCallback(() => {
    navigation.navigate('CreditCard')
  }, [])
  
  const cpfInputRef = useRef<TextInput>(null);
  return (
    <ServiceReportForm title="Informe alguns dados" isFormFilled={true} handleSubmit={handleSubmit} >
      <MaskInput
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={phoneInput}
        onChangeText={text => setPhoneInput(text)}
        placeholder="Celular"
        returnKeyType="next"
        onSubmitEditing={() => cpfInputRef.current?.focus()}
      />
      <MaskInput
        type={'cpf'}
        value={cpf}
        onChangeText={text => setCpf(text)}
        placeholder="CPF"
      />
      <MaskInput
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        value={datetime}
        onChangeText={text => setDatetime(text)}
        placeholder="Data de Nascimento"
      />
      <MaskInput
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
        }}
        value={money}
        onChangeText={text => setMoney(text)}
        placeholder="R$"
      />
      <MaskInput
        type={'zip-code'}
        value={zipCode}
        onChangeText={text => setZipCode(text)}
        placeholder="CEP"
      />
    </ServiceReportForm>
  );
};

export default FieldTest;
