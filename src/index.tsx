import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/Main.scss';
import { JournalProvider } from './context/JournalContext';
import { UserProvider } from './context/UserContext';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <JournalProvider>
        <App />
      </JournalProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
