import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import { CreditCardInput } from "react-native-credit-card-input";

import { ServiceReportForm } from '../../components/ServiceReportForm';


function CreditCard() {
  const [isDone, setIsDone] = useState(false);
  const navigation = useNavigation()

  const handleSubmit = useCallback(() => {
    navigation.navigate('Hours')
  }, [])

  const handleChange = useCallback((form) => {
    setIsDone(form.valid)
  }, [])
  
  return (
    <ServiceReportForm title="" isFormFilled={isDone} handleSubmit={handleSubmit} >
      <CreditCardInput onChange={handleChange} />
    </ServiceReportForm>
  );
};

export default CreditCard;
