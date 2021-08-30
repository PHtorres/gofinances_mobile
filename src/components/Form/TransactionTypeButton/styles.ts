import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps{
    type: 'up' | 'down';
}

interface IconProps extends TypeProps{}

interface ContainerProps extends TypeProps{
    isActive:boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 16px;

  ${({isActive, type, theme}) => isActive && css`
  background-color: ${type === 'up' ? theme.colors.success_light : theme.colors.attention_light};
  `};

  ${({isActive}) => !isActive && css`
  border: 1px solid ${({ theme }) => theme.colors.text};
  `};
`;

export const Icon = styled(Feather) <IconProps>`
font-size: ${RFValue(24)}px;
margin-right: 12px;
color: ${({ theme, type }) =>
        type === 'up' ? theme.colors.success : theme.colors.attention}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;