import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { imgInstance } from 'api/axiosInstance';
import { AxiosResponse } from 'axios';

export interface ProfileResponse {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}

const postUploadProfile = async (compressedImage: File) => {
  const compressedFormData = new FormData();
  compressedFormData.append('image', compressedImage);
  return await imgInstance.post('/image/uploadfile', compressedFormData);
};

export const usePostUploadProfile = (
  options?: UseMutationOptions<AxiosResponse<ProfileResponse>, unknown, File>
) => {
  return useMutation<AxiosResponse<ProfileResponse>, unknown, File>({
    mutationKey: ['postUploadProfile'],
    mutationFn: postUploadProfile,
    ...options,
  });
};
