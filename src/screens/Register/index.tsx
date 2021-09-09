import React from 'react';
import { useState } from 'react';
import Button from '../../components/Form/Button';
import CategorySelect from '../../components/Form/CategorySelect';
import Input from '../../components/Form/Input';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

export const Register = () => {

  const [transactionTypeSelected, setTransactionTypeSelected] = useState<'up' | 'down'>('up');


  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => setTransactionTypeSelected('up')}
              isActive={transactionTypeSelected === 'up'} />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => setTransactionTypeSelected('down')}
              isActive={transactionTypeSelected === 'down'} />
          </TransactionTypes>
          <CategorySelect title="Categoria"/>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}