import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
// pages
import MainPage from './chapter_16/components/page/MainPage';
import PostWritePage from './chapter_16/components/page/PostWritePage';
import PostViewPage from './chapter_16/components/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>taerang의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='post-write' element={<PostWritePage />} />
        <Route path='post/:postId' element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
