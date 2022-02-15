import React from 'react';
import { AppUI } from './AppUI';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from "../Context/index"
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <Provider>
        <AppUI />
      </Provider>
    </NextUIProvider>
  );
}

export default App;
