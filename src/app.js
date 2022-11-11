import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { PasswordPage } from './pages/PasswordPage/PasswordPage.js';

const MainContainer = document.getElementById('main');
const Main = ReactDOM.createRoot(MainContainer);

Main.render(
  <PasswordPage />
);