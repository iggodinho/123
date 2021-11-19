import React from 'react';

import './App.css';
import { AuthContextProvider } from './storage/auth-context';
import Routes from './routes/routes.js';

function App() {
  

  return (
    <>
    
    <AuthContextProvider>
    
    <Routes/>
    </AuthContextProvider>
    
    </>
  )
}

export default App
