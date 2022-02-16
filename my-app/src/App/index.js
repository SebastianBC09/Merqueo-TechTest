import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from "../Context/index"
import { AppUI } from './AppUI';
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
