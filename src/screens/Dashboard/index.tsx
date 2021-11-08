import React, { useState, useEffect } from 'react';
import HighlightCard from '../../components/HighlightCard';
import { TransactionCard, TransactionCardDataProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  LoggoutButton,
  HighlightCards,
  Transactions,
  TransactionsTitle,
  TransactionList
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
const dataKey = '@gofinances:transactions';


export const Dashboard = () => {

  const [data, setData] = useState<TransactionCardDataProps[]>([]);

  const loadTransactions = async () => {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const formattedTransactions: TransactionCardDataProps[] = transactions
      .map((item: TransactionCardDataProps) => {

        const formattedAmount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const formattedDate = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount: formattedAmount,
          type: item.type,
          category: item.category,
          date: formattedDate
        }

      });

    setData(formattedTransactions);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/58959268?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Paulo</UserName>
            </User>
          </UserInfo>
          <LoggoutButton onPress={() => { }}>
            <Icon name="power" />
          </LoggoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="última entrada dia 13 de abril" />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="última saída dia 3 de abril" />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 a 16 de abril" />
      </HighlightCards>

      <Transactions>
        <TransactionsTitle>Listagem</TransactionsTitle>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}