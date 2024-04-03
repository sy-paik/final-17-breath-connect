import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { instance } from 'api/axiosInstance';
import { AxiosResponse } from 'axios';

export type LoginSignupRequest = {
  email: string;
  password: string;
};

interface LoginResponse {
  message: string;
  status: number;
}

const postLogin = async (loginInfo: LoginSignupRequest) => {
  return await instance.post('/user/login', {
    user: loginInfo,
  });
};

export const usePostLogin = (
  options?: UseMutationOptions<
    AxiosResponse<LoginResponse>,
    Error,
    LoginSignupRequest
  >
) => {
  return useMutation<AxiosResponse<LoginResponse>, Error, LoginSignupRequest>({
    mutationKey: ['postLogin'],
    mutationFn: postLogin,
    ...options,
  });
};
