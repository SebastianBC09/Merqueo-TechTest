import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { ItemPage } from "./Pages/Item Page/";
import { ShoppingCartPage } from "./Pages/Shopping Cart Page/index"
import { Provider } from './Context';
import './index.css';

const rootElement = document.getElementById("root");
render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='item' element={<ItemPage />}>
          <Route path=':itemId' element={<ItemPage />} />
        </Route>
        <Route path='shopping-cart' element={<ShoppingCartPage />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);


