import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { CardComponent } from './Components/Card/Card';

function App() {
  return (
    <NextUIProvider>
      <CardComponent />
    </NextUIProvider>
  );
}

export default App;
