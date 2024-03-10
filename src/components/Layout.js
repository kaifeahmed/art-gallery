// Layout.jsx
import React from 'react';
import Header from './Header'; // Replace with the actual path to your Header component
import Footer from './Footer'; // Replace with the actual path to your Footer component
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};

export default Layout;
