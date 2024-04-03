import React from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import ProfileImage from '../ProfileImage/ProfileImage';
import { LoginSignupRequest } from 'hook/api/auth/usePostLogin';
import { usePostAccountnameValid } from 'hook/api/auth/usePostAccountnameValid';
import { usePostSignup } from 'hook/api/auth/usePostSignup';
import useImageUpload from 'hook/useImageUpload';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constants/route';

const ProfileForm = ({ signupInfo }: { signupInfo: LoginSignupRequest }) => {
  const { image, previewImage, handleImage } = useImageUpload('');
  const [signupProfile, setSignupProfile] = React.useState({
    username: '',
    email: signupInfo.email,
    password: signupInfo.password,
    accountname: '',
    intro: '',
    image: image,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupProfile({
      ...signupProfile,
      [name]: value,
    });
  };

  const { mutate: accountnameValid } = usePostAccountnameValid();
  const handleAccountnameValid = () => {
    accountnameValid(signupProfile.accountname);
  };
  const { mutate: signup, isSuccess: signupSuccess } = usePostSignup();
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    signup(signupProfile);
    signupSuccess && navigate(ROUTE.LOGIN);
  };

  return (
    <form onSubmit={handleSignup}>
      <ProfileImage previewImage={previewImage} handleImage={handleImage} />
      <Input
        label='사용자 이름'
        id='username'
        name='username'
        value={signupProfile.username}
        type='text'
        placeHolder='2~10자 이내여야 합니다.'
        onChange={handleChange}
      />
      <Input
        label='계정 ID'
        id='accountname'
        name='accountname'
        value={signupProfile.accountname}
        type='text'
        placeHolder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        onChange={handleChange}
        onBlur={handleAccountnameValid}
      />
      <Input
        label='소개'
        id='intro'
        name='intro'
        value={signupProfile.intro}
        type='text'
        placeHolder='자신에 대해 소개해 주세요!'
        onChange={handleChange}
      />
      <Button type='submit' size='lg'>
        들숨날숨 시작하기
      </Button>
    </form>
  );
};

export default ProfileForm;
