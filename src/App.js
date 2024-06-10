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
import Classes from './components/Classes.js';
import DashboardLayout from './components/DashboardLayout.js';
import AddCourse from './components/AddCourse.js';
import DashboardHome from './components/DashboardHome.js';
import MyArtwork from './components/MyArtwork.js';
import MyCourses from './components/MyCourses.js';
import SingleArt from './components/SingleArt.js';
import PaymentFormParent from './components/PaymentFormParent.js';
import PaymentFormParentSingleCourse from './components/PaymentFormParentSingleCourse.js';
import UpdateCourseDashboard from './components/SingleCourseDashboard.js';
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
            <Route path="/single-art/:id" element={<Layout />}>
              <Route index element={<PaymentFormParent />} />
            </Route>
            <Route path="/single-course/:id" element={<Layout />}>
              <Route index element={<PaymentFormParentSingleCourse />} />
            </Route>
            
            <Route path="/contact" element={<Layout />}>
              <Route index element={<ContactUs />} />
            </Route>

            <Route path="/about" element={<Layout />}>
              <Route index element={<AboutUs />} />
            </Route>
            
            <Route path="/classes" element={<Layout />}>
              <Route index element={<Classes />} />
            </Route>

            <Route path="/artwork" element={<Layout />}>
              <Route index element={<PaymentFormParent />} />
            </Route>

            <Route path="/marketplace/*" element={<Layout />}>
              <Route index element={<Marketplace />} />
              <Route path="sell" element={<Sell />} />
              <Route path="submission" element={<Submission />} />
            </Route>

            <Route path="/dashboard/*" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="add-course" element={<AddCourse/>}/>
              <Route path="my-courses" element={<MyCourses/>}/>
              <Route path="my-artwork" element={<MyArtwork/>}/>
              <Route path="listing/:id" element={<UpdateCourseDashboard/>}/>
              <Route path="add-artwork" element={<Submission/>}/>
            </Route>
            
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
