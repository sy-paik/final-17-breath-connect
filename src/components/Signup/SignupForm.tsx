import React, { FormEvent } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import styled from 'styled-components';
import { usePostEmailValid } from 'hook/api/auth/usePostEmailValid';
import { PATTERN } from 'constants/validation';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constants/route';

const SignupForm = () => {
  const [signupInfo, setSignupInfo] = React.useState({
    email: '',
    password: '',
  });
  const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
  const [valid, setValid] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const { mutate: emailValid, data: emailValidRes } = usePostEmailValid();

  const handleEmailValid = () => {
    emailValid({ email: signupInfo.email });
  };

  const successMsg = emailValidRes?.data.message;

  const handlePasswordValid = () => {
    if (PATTERN.PASSWORD.test(signupInfo.password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (passwordValid && successMsg === '사용 가능한 이메일 입니다.') {
      setValid(true);
      navigate(ROUTE.SIGNUP_PROFILE, {
        state: signupInfo,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          label='이메일'
          id='email'
          name='email'
          value={signupInfo.email}
          type='email'
          placeHolder='이메일 주소를 입력해주세요'
          onChange={handleChange}
          onBlur={handleEmailValid}
        />
        <Input
          label='비밀번호'
          id='password'
          name='password'
          value={signupInfo.password}
          type='password'
          placeHolder='비밀번호를 입력해주세요'
          onChange={handleChange}
          onBlur={handlePasswordValid}
        />
      </div>
      <Button
        type='submit'
        size='lg'
        style={{ fontSize: '14px' }}
        isDisabled={valid}
        // isDisabled={!getValues('email') || !getValues('password')}
      >
        회원가입
      </Button>
    </Form>
  );
};

const Form = styled.form`
  div {
    margin-bottom: 2rem;
  }
`;

export default SignupForm;
