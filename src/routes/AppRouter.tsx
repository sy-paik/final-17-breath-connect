import React from 'react';

import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../atoms/StylesAtom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Theme, { darkColors } from '../styles/Theme';

import SplashPage from '../pages/SplashPage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/EmailJoinPage/EmailJoinPage';
import ProfileSettingPage from '../pages/SignupPage/ProfileSettingPage/ProfileSettingPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import PostDetailPage from '../pages/PostPage/PostDetailPage/PostDetailPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage/ProfilePage';
import ProfileEditPage from '../pages/ProfilePage/ProfileEditPage/ProfileEditPage';
import FollowerListPage from '../pages/FollowListPage/FollowerListPage/FollowerListPage';
import FollowingListPage from '../pages/FollowListPage/FollowingListPage/FollowingListPage';
import UploadPage from '../pages/UploadPage/UploadPage';
import UploadMap from '../pages/UploadPage/UploadMap';
import SearchPage from '../pages/SearchPage/SearchPage';
import ChatListPage from '../pages/ChatPage/ChatListPage/ChatListPage';
import ChatRoomPage from '../pages/ChatPage/ChatRoomPage/ChatRoomPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import UploadEditPage from '../pages/UploadPage/UploadEditPage/UploadEditPage';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = () => {
    // 로그인 여부를 확인할 수 있는 조건을 작성합니다.
    const token = localStorage.getItem('token');
    return !!token;
  };

  if (isAuthenticated()) {
    return Element;
  } else {
    return <Navigate to='/login' />;
  }
};

const AppRouter = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const selectedTheme = isDarkMode ? { colors: darkColors } : {};
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signup/profile' element={<ProfileSettingPage />} />
        <Route
          path='/home'
          element={<PrivateRoute element={<FeedPage theme={Theme} />} />}
        />
        {/* Post */}
        <Route path='/post/:id/edit' element={<UploadEditPage />} />
        <Route
          path='/post'
          element={<PostPage data={Theme} showModal={true} />}
        />
        <Route path='/post/:id' element={<PostDetailPage />} />
        <Route path='/post/upload' element={<UploadPage editData={Theme} />} />
        <Route path='/post/upload/map' element={<UploadMap />} />

        <Route path='/profile/:accountname'>
          <Route index element={<ProfilePage />} />
          <Route path='editProfile' element={<ProfileEditPage />} />
          <Route path='follower' element={<FollowerListPage />} />
          <Route path='following' element={<FollowingListPage />} />
        </Route>

        <Route path='/search' element={<SearchPage />} />
        <Route path='/chat' element={<ChatListPage theme={selectedTheme} />} />
        <Route
          path='/chat/:id'
          element={<ChatRoomPage theme={selectedTheme} />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
