import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react-confirm-alert-css
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// end bootstrap
import ErrorBoundry from './components/seson12/react-error-boundary';
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='React_project'>
      <ErrorBoundary
        fallbackRender={ErrorBoundry}

      >
        <App />
      </ErrorBoundary>;
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
