import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/commons/ErrorPage';
import reportWebVitals from './reportWebVitals';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ErrorPage>
          <App />
        </ErrorPage>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);

reportWebVitals();
