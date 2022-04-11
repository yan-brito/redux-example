import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import { Catalog } from './src/components/Catalog';
import { Cart } from './src/components/Cart';

export default function App() {
  return (
    <Provider store={store}>
      <Catalog/>
      <Cart />
    </Provider>
  );
}
