import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import Button from '../../components/Form/Button';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import InputForm from '../../components/Form/InputForm';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

interface FormData{
  name:string;
  amount:string;
}

export const Register = () => {

  const [transactionType, setTransactionType] = useState<'up' | 'down'>('up');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const {control, handleSubmit} = useForm();

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
  }

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true);
  }

  const handleRegister = (form:FormData) =>{

    const {name, amount} = form;

    const data = {
      name,
      amount,
      transactionType,
      category
    }

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm control={control} name={'name'} placeholder="Nome" />
          <InputForm control={control} name={'amount'} placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => setTransactionType('up')}
              isActive={transactionType === 'up'} />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => setTransactionType('down')}
              isActive={transactionType === 'down'} />
          </TransactionTypes>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenCategoryModal}
          />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
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