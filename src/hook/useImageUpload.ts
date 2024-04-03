import React from 'react';
import imageCompression from 'browser-image-compression';
import { usePostUploadProfile } from './api/auth/usePostUploadProfile';

const useImageUpload = (prevImage: string) => {
  const [previewImage, setPreviewImage] = React.useState(prevImage || '');
  const [image, setImage] = React.useState(prevImage || '');

  const {
    mutate: uploadProfile,
    isSuccess,
    data: res,
  } = usePostUploadProfile();

  // handleImageChange 하면서 submit
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(e.target.files);

    const allowedExtensions = [
      'jpg',
      'gif',
      'png',
      'jpeg',
      'bmp',
      'tif',
      'heic',
    ];
    const fileExtension = file?.name.split('.').pop()?.toLowerCase();

    if (!fileExtension) {
      console.error('파일 확장자를 추출할 수 없습니다.');
      return;
    }

    if (!allowedExtensions.includes(fileExtension)) {
      alert('유효하지 않은 파일 형식입니다.');
      return;
    }

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };

      if (file) {
        // TODO) 이미지 리사이징에 시간이 소요되므로 변환과정 중임을 알리기 위한 Spinner 요소 추가
        const compressedBlob: Blob = await imageCompression(file, options);
        const compressedFile = new File([compressedBlob], file?.name, {
          type: file.type,
        });
        uploadProfile(compressedFile);

        // TODO) 이미지 업로드 성공 토스트 추가
        isSuccess &&
          setImage(process.env.REACT_APP_API_URL + res.data.filename);
        const blobUrl = window.URL.createObjectURL(compressedFile);
        console.log(blobUrl, 'blobUrl임!!!!');
        setPreviewImage(blobUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { image, previewImage, handleImage };
};

export default useImageUpload;
