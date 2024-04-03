import React, { forwardRef } from 'react';
import { Container, Label, Text, ErrorMsg, SuccessMsg } from './InputStyle';

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeHolder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  isError?: boolean;
  errorMsg?: string;
  successMsg?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      type,
      placeHolder,
      onChange,
      onBlur,
      name,
      value,
      isError,
      errorMsg,
      successMsg,
    }: InputProps,
    ref
  ) => {
    return (
      <Container>
        <Label htmlFor={id}>{label}</Label>
        <Text
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeHolder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete='off'
          ref={ref}
        />
        {isError ? (
          <ErrorMsg>{errorMsg}</ErrorMsg>
        ) : (
          <SuccessMsg>{successMsg}</SuccessMsg>
        )}
      </Container>
    );
  }
);

export default Input;
