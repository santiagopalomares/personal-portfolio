import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LogoImg from './assets/Logo.png'

// Set favicon dynamically
const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = LogoImg;
document.getElementsByTagName('head')[0].appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
