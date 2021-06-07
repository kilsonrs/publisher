import React, { ReactNode } from 'react';
import FloatingActionButton from '../FloatingActionButton';

import { Container, Title } from './styles';

interface ServiceReportFormProps {
  title: string;
  isFormFilled: boolean;
  handleSubmit: () => void;
  children: ReactNode;
}

function ServiceReportForm({ children, title, isFormFilled, handleSubmit }: ServiceReportFormProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
      <FloatingActionButton 
        enabled={isFormFilled} 
        onPress={() => handleSubmit()} 
      />
    </Container>
  );
};

export { ServiceReportForm };
