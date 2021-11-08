import React from 'react';
import { categories } from '../../utils/categories';

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles';

interface Category {
    name: string;
    icon: string;
}

export interface TransactionCardDataProps {
    id: string;
    type: 'in' | 'out';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface TransactionCardProps {
    data: TransactionCardDataProps
}

export const TransactionCard = ({ data }: TransactionCardProps) => {

    const { type, name, amount, category, date } = data;
    const categoryData = categories.find(item => item.key === category)!;

    return (
        <Container>
            <Title>{name}</Title>
            <Amount type={type}>{amount}</Amount>
            <Footer>
                <Category>
                    <Icon name={categoryData.icon} />
                    <CategoryName>{categoryData.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    );
}