import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    </NextUIProvider>
  );
}

export default App;
