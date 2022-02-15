import React from 'react';
import { AppUI } from './AppUI';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <AppUI />
    </NextUIProvider>
  );
}

export default App;
