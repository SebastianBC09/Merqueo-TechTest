import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Navbar } from './Components/Navbar/Navbar';
import { CardComponent } from './Components/Card/Card';
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <Navbar />
    </NextUIProvider>
  );
}

export default App;
