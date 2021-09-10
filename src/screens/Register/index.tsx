import React, { useState } from 'react';
import { Modal } from 'react-native';
import Button from '../../components/Form/Button';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import Input from '../../components/Form/Input';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

export const Register = () => {

  const [transactionTypeSelected, setTransactionTypeSelected] = useState<'up' | 'down'>('up');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
  }

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true);
  }

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
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenCategoryModal}
          />
        </Fields>
        <Button title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
    </Container>
  );
}