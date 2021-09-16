import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Button from '../../components/Form/Button';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import InputForm from '../../components/Form/InputForm';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number().typeError('Informa um valor numérico')
    .positive('O valor não pode ser negativo. Escolha Outcome')
    .required('O valor é obrigatório')
});

export const Register = () => {

  const [transactionType, setTransactionType] = useState<'up' | 'down'>('up');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const { control, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) });

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
  }

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true);
  }

  const handleRegister = (form: FormData) => {

    if(!transactionType) return Alert.alert('Selecione o tipo da transação');
    if(category.key === 'category') return Alert.alert('Selecione a categoria');

    const { name, amount } = form;

    const data = {
      name,
      amount,
      transactionType,
      category
    }

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              control={control}
              name={'name'}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={formState.errors.name && formState.errors.name.message}
            />
            <InputForm
              control={control}
              name={'amount'}
              placeholder="Preço"
              keyboardType="decimal-pad"
              error={formState.errors.amount && formState.errors.amount.message}
            />
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
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}