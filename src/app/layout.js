'use client';

import { Provider } from 'react-redux';

import Header from './components/Header.jsx';
import './globals.css';
// import { PersistGate } from 'redux-persist/integration/react';
import {
  // persistor,
  store,
} from './redux/store.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          <Header />
          {children}
          {/* </PersistGate> */}
        </Provider>
      </body>
    </html>
  );
}
