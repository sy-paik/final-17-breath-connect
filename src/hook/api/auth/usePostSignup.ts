import { instance } from 'api/axiosInstance';
import { LoginSignupRequest } from './usePostLogin';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constants/route';

interface SignupRequest extends LoginSignupRequest {
  username: string;
  accountname: string;
  intro: string;
  image: string;
}

const postSignup = async (signupInfo: SignupRequest) => {
  return await instance.post('/user', {
    user: signupInfo,
  });
};

export const usePostSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['postSignup'],
    mutationFn: postSignup,
    onSuccess: () => {
      navigate(ROUTE.SIGNUP_PROFILE);
    },
  });
};
