import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from "../Context/index"
import { AppUI } from './AppUI';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <Provider>
        <AppUI />
        <Link to="/item-details">Item Details</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
