import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/Main.scss';
import { JournalProvider } from './context/JournalContext';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <JournalProvider>
      <App />
    </JournalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
