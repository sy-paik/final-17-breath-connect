import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import styled from 'styled-components';
import { usePostLogin } from 'hook/api/auth/usePostLogin';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const { mutate: login } = usePostLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(loginInfo);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div>
        <Input
          label='이메일'
          id='email'
          name='email'
          value={loginInfo.email}
          type='email'
          placeHolder='이메일 주소를 입력해주세요'
          onChange={handleChange}
        />
        <Input
          label='비밀번호'
          id='password'
          name='password'
          value={loginInfo.password}
          type='password'
          placeHolder='비밀번호를 입력해주세요'
          onChange={handleChange}
        />
      </div>
      <Button
        type='submit'
        size='lg'
        // style={{fontSize: '14px'}}
        // isDisabled={!getValues('email') || !getValues('password')}
      >
        로그인
      </Button>
    </Form>
  );
};

const Form = styled.form`
  div {
    margin-bottom: 2rem;
  }
`;

export default LoginForm;
