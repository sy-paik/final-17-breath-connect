import styled from 'styled-components';
import ProfileForm from 'components/Profile/ProfileForm/ProfileForm';
import React from 'react';
import SvgSprite from 'assets/sprite/SvgSprite';
import { useLocation } from 'react-router-dom';

const ProfileSettingPage = () => {
  const location = useLocation();
  const signupInfo = location.state;

  return (
    <SignupContainer>
      <LogoSection>
        <h1>
          <SvgSprite id='logo-text' color='white' width={120} />
        </h1>
        <h2>함께 달리는 즐거움을 나눌 수 있는 공간</h2>
      </LogoSection>
      <SignupSection>
        <h3>프로필 설정</h3>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <ProfileForm signupInfo={signupInfo} />
      </SignupSection>
    </SignupContainer>
  );
};

export default ProfileSettingPage;

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
`;

const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 820px) {
    ${LogoSection} {
      display: hidden;
    }
  }
`;

const SignupSection = styled.section`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  h3 {
    font-size: large;
    margin-bottom: 8px;
  }
`;
