import React from 'react';
// import { useRecoilValue } from 'recoil';
// import { isDarkModeState } from '../../../atoms/StylesAtom';
import LoginForm from "components/Login/LoginForm";
import styled from 'styled-components';
import SvgSprite from "assets/sprite/SvgSprite";

const LoginPage = () => {
  // const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <LoginContainer>
      <LogoSection>
        <h1>
          <SvgSprite id='logo-text' color="white" width={120} />
        </h1>
        <h2>함께 달리는 즐거움을 나눌 수 있는 공간</h2>
      </LogoSection>
      <LoginSection>
        <h3>이메일로 로그인</h3>
        <LoginForm />
      </LoginSection>
    </LoginContainer>
  );
};

export default LoginPage;


const LogoSection = styled.section`
  width: 50%;
  background-image: linear-gradient(#34116D, #6521D3);
  position: relative;
  h1 {
    margin-top: 30%;
  }
  h2 {
    color: white;
  }
  h1, h2 {
    margin-left: 83px;
    font-size: 16px;
  }
`

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
    font-size: large;
  }
`
