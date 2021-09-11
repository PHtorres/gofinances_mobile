import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import Input from '../Input';

import { Container } from './styles';

interface Props extends TextInputProps {
    control: Control,
    name: string;
}

const InputForm = ({ control, name, ...rest }: Props) => {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input {...rest} onChangeText={onChange} value={value} />
                )}
                name={name}
            />
        </Container>
    );
}

export default InputForm;