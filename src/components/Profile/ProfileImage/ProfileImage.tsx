import React from 'react';
import styled from 'styled-components';
import AddImg from '../../../assets/sprite/img-btn.svg';
import BasicProfileImg from '../../../assets/images/basic-profile-l.svg';

interface ProfileImageProps {
  prevImage?: string;
  previewImage: string | null;
  handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileImage = ({
  prevImage,
  previewImage,
  handleImage,
}: ProfileImageProps) => {
  return (
    <React.Fragment>
      <Label htmlFor='image'>
        <Image
          src={previewImage || prevImage || BasicProfileImg}
          alt='사용자 프로필 이미지'
        />
      </Label>
      <ImageInput
        type='file'
        accept='image/*'
        id='image'
        onChange={handleImage}
      />
    </React.Fragment>
  );
};

export default ProfileImage;

const Label = styled.label`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 3.5rem auto 5.5rem;
  border: 1px solid ${({ theme }) => theme.colors.placeHolderColor};
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const ImageInput = styled.input`
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  z-index: -1000rem;
`;
