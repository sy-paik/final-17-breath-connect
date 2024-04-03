import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { instance } from 'api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface EmailValidResponse {
  message: string;
}

interface EmailValidRequest {
  email: string;
}

const postEmailValid = async (email: EmailValidRequest) => {
  const response = await instance.post('/user/emailvalid', {
    user: email,
  });
  return response;
};

export const usePostEmailValid = (
  options?: UseMutationOptions<
    AxiosResponse<EmailValidResponse>,
    AxiosError,
    EmailValidRequest
  >
) => {
  return useMutation({
    mutationKey: ['postEmailValid'],
    mutationFn: postEmailValid,
    ...options,
  });
};
