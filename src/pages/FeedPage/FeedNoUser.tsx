import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Button from '../../components/common/Button/Button';
import HomeLogo from '../../assets/images/home-logo.svg';
import HomeDarkLogo from '../../assets/images/home-logo-dark.svg';
import { Container, Text, Image } from './FeedNoUserStyle';

const FeedNoUser = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <Container>
      <Image src={isDarkMode ? HomeDarkLogo : HomeLogo} alt='' />
      <Text>유저를 검색해 팔로우 해보세요!</Text>
      <Link to={'/search'}>
        <Button size={'ML'} text={'검색하기'} isDarkMode={isDarkMode} />
      </Link>
    </Container>
  );
};

export default FeedNoUser;
