import styled, { css } from 'styled-components';
import { shake } from '../../../styles/Animation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.2rem;
  p {
    ${({ theme }) => css`
      font-size: ${theme.fontSize.small};
    `}
  }
`;

export const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: 0.6rem;
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSize.sm};
  `}
`;

export const Text = styled.input`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.blackText};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSize.md};
  animation: ${({ isError }) =>
    isError
      ? css`
          ${shake} 0.4s linear
        `
      : 'none'};
  outline: none;
  &:focus {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.borderColor};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.errorText};
`;

export const SuccessMsg = styled.p`
  color: ${({ theme }) => theme.colors.successText};
`;
