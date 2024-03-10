// Layout.jsx
import React from 'react';
import Header from './Header'; // Replace with the actual path to your Header component
import Footer from './Footer'; // Replace with the actual path to your Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
