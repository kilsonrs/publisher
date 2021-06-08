import React from 'react';

import { Container, Content, Header, Title, Card, Name,Month, Row, Column, Key, Value, } from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <Title>Últimos relatórios</Title>
      </Header>
      <Content>
      <Name>Kilson Rosa dos Santos</Name>
      <Card>
        <Month>Dezembro de 2020</Month>
        <Row>
          <Column>
            <Key>Publicações</Key>
            <Value>10</Value>
          </Column>
          <Column>
            <Key>Horas</Key>
            <Value>50</Value>
          </Column>
          <Column>
            <Key>Vídeos</Key>
            <Value>50</Value>
          </Column>
          <Column>
            <Key>Revisitas</Key>
            <Value>15</Value>
          </Column>
          <Column>
            <Key>Estudos</Key>
            <Value>2</Value>
          </Column>
        </Row>
      </Card>
      </Content>
    </Container>
  );
};

export default Home;
