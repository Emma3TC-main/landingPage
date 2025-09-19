import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Asegura que el root esté listo para ocupar toda la pantalla
const rootElement = document.getElementById('root');
rootElement.style.minHeight = '100vh';
rootElement.style.display = 'flex';
rootElement.style.flexDirection = 'column';

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);