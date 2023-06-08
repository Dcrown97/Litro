import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HomePage from './LandingPage/HomePage';
import Theme from './LandingPage/Component/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
