import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import HighlightCard from '../../components/HighlightCard';
import {TransactionCard, TransactionCardDataProps} from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  TransactionsTitle,
  TransactionList
} from './styles';

const TransactionData:TransactionCardDataProps[] = [
  {
    id:'1',
    type:'in',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    id:'2',
    type:'out',
    title: "Hamburgueria Pizzy",
    amount: "-R$ 59,90",
    category: {
      name: 'Comida',
      icon: 'coffee'
    },
    date: "13/04/2020"
  },
  {
    id:'3',
    type:'out',
    title: "Aluguel apartamento",
    amount: "-R$ 1.200,00",
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
    },
    date: "13/04/2020"
  }
]

const Dashboard = () => {
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
          <Icon name="power" />
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
          data={TransactionData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;