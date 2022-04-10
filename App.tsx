import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import { Catalog } from './src/components/Catalog';

export default function App() {
  return (
    <Provider store={store}>
      <Catalog/>
    </Provider>
  );
}
