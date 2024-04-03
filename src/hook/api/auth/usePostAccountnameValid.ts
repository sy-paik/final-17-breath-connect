import { useMutation } from '@tanstack/react-query';
import { instance } from 'api/axiosInstance';
import { AxiosResponse } from 'axios';

const postAccountnameValid = async (
  accountname: string
): Promise<AxiosResponse> => {
  return await instance.post('/user/accountnamevalid', {
    user: {
      accountname,
    },
  });
};

export const usePostAccountnameValid = () => {
  return useMutation({
    mutationKey: ['postAccountnameValid'],
    mutationFn: postAccountnameValid,
  });
};
