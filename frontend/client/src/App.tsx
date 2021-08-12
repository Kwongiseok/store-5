import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from './lib/CustomRouter';
import Cart from './pages/Cart/CartPage';
import Order from './pages/Order/OrderPage';
import Main from './pages/Main/Main';
import Header from '@src/components/Header/Header';
import theme from './theme/theme';
import Goods from './pages/GoodsDetail/GoodsDetailPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes exact>
        <Route path='/'>
          <Main />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/order'>
          <Order />
        </Route>
        <Route path='/detail/:id'>
          <Goods />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}
