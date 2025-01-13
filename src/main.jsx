import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './App.css'
import { AdminFlagProvider } from './components/providers/AdminFlagProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AdminFlagProvider>
      <App />
  </AdminFlagProvider>
);