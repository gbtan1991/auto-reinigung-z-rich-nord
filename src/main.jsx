import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Normalize direct editor URLs before HashRouter reads its initial location.
const directPath = window.location.pathname.replace(/\/$/, '').toLowerCase();
const hashPath = window.location.hash.split('?')[0].toLowerCase();
if ((directPath === '/autoreinigung-buchen' || directPath === '/bookinglanding') && ['', '#', '#/', '#/home'].includes(hashPath)) {
  window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search + '#/autoreinigung-buchen');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)