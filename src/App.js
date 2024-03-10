// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { Toaster } from 'react-hot-toast';
import Sell from './components/Sell.js';
import Layout from './components/Layout.js'; // Import the Layout component

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Routes>
                    <Route index element={<Home />} />
                  </Routes>
                </Layout>
              }
            />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/sell" element={<Layout><Sell /></Layout>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
