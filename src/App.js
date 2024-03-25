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
import Marketplace from './components/Marketplace.js';
import ContactUs from './components/ContactUs.js';
import AboutUs from './components/AboutUs.js';

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
            
            <Route path="/contact" element={<Layout />}>
              <Route index element={<ContactUs />} />
            </Route>

            <Route path="/about" element={<Layout />}>
              <Route index element={<AboutUs />} />
            </Route>

            <Route path="/marketplace/*" element={<Layout />}>
              <Route index element={<Marketplace />} />
              <Route path="sell" element={<Sell />} />
              <Route path="submission" element={<Submission />} />
            </Route>
            
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
