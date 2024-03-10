// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { Toaster } from 'react-hot-toast';
import Sell from './components/Sell.js';
import Submission from './components/Submission.js';
import Layout from './components/Layout.js';

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>

            <Route path="/login" element={<Layout />}>
              <Route index element={<Login />} />
            </Route>

            <Route path="/sell/*" element={<Layout />}>
              <Route index element={<Sell />} />
              <Route path="submission" element={<Submission />} />
            </Route>
            
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
