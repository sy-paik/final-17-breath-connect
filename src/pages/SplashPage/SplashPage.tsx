import React from 'react';
import styled from 'styled-components';
import SvgSprite from 'assets/sprite/SvgSprite';
import { useNavigate } from 'react-router-dom';
import { fadeIn, zoomIn } from '../../styles/Animation';
import { ROUTE } from 'constants/route';

const SplashPage = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTE.LOGIN);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashContainer>
      <Main>
        <SvgSprite
          id='home-logo'
          color='transparent'
          width={188}
          height={226}
        />
        <h2>
          함께 달리는 즐거움을
          <br />
          나눌 수 있는 공간.
        </h2>
        <SvgSprite id='logo-text' color='white' width={120} />
      </Main>
    </SplashContainer>
  );
};

export default SplashPage;

export const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#260a52, #6521d3);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    color: white;
    font-size: 16px;
    margin-bottom: -50px;
    line-height: 24px;
    text-align: center;
    /* animation: ${fadeIn} 1s ease-in-out forwards; */
    animation: ${fadeIn} 1s ease-in-out forwards,
      ${zoomIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards;
  }
`;
