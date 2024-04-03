import React from 'react';
import LoginForm from 'components/Login/LoginForm';
import styled from 'styled-components';
import SvgSprite from 'assets/sprite/SvgSprite';
import { Link } from 'react-router-dom';
import { ROUTE } from 'constants/route';

const LoginPage = () => {
  // const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <LoginContainer>
      <LogoSection>
        <h1>
          <SvgSprite id='logo-text' color='white' width={120} />
        </h1>
        <h2>함께 달리는 즐거움을 나눌 수 있는 공간</h2>
      </LogoSection>
      <LoginSection>
        <h3>이메일로 로그인</h3>
        <LoginForm />
        <SignupSection>
          <p>계정이 없으신가요?</p>
          <SignupLink to={ROUTE.SIGNUP}>이메일로 회원가입</SignupLink>
        </SignupSection>
      </LoginSection>
    </LoginContainer>
  );
};

export default LoginPage;

const LogoSection = styled.section`
  width: 50%;
  background-image: linear-gradient(#260a52, #6521d3);
  position: relative;
  h1 {
    margin-top: 30%;
  }
  h2 {
    color: white;
  }
  h1,
  h2 {
    margin-left: 83px;
    font-size: 16px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 820px) {
    ${LogoSection} {
      display: hidden;
    }
  }
`;

const LoginSection = styled.section`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  gap: 10%;
  h3 {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`;

const SignupSection = styled.div`
  text-align: center;
  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 0.6rem;
  }
`;

const SignupLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  text-decoration: underline;
`;
