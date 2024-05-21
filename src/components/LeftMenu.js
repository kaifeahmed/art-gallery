import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import NavLink
import { useNavigate } from 'react-router-dom';

export default function LeftMenu({ onSidebarToggle }) {
  const Navigate = useNavigate();
  const location = useLocation();
  
  const [role, setRole] = useState('Boat Owner');

  const openSidebar = () => {
    console.log('Clicked');
    if (isMobileDevice()) {
        onSidebarToggle();
    }
  };

  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Adjust the threshold as needed
  };


  return (
    <>
        <ul className="accordion-menu">
        <li className="sidebar-title">Apps</li>
        <li onClick={openSidebar}>
            <Link to="/dashboard"  exact className={location.pathname === '/dashboard' ? 'active' : ''}>
            <i className="material-icons-two-tone">dashboard</i> <span>Dashboard</span>
            </Link>
        </li>
        <li onClick={openSidebar}>
            <Link to="/dashboard/setting" exact className={location.pathname === '/dashboard/setting' ? 'active' : ''}>
            <i className="material-icons-two-tone">settings</i><span>Settings</span>
            </Link>
        </li>
        
        <li className="sidebar-title">Listings</li>
        <li onClick={openSidebar}>
        <Link to="/dashboard/my-listings">
            <i className="material-icons-two-tone">draw</i>Courses
            <i className="material-icons has-sub-menu">keyboard_arrow_right</i>
        </Link>
        <ul className="sub-menu">
            <li>
            <Link to="/dashboard/my-courses" exact className={location.pathname === '/dashboard/my-listings' ? 'active' : ''}><span>My Courses</span></Link>
            </li>
            {role === 'Boat Owner' && (
                <>
                    <li>
                    <Link to="/dashboard/add-course" exact className={location.pathname === '/dashboard/add-listing' ? 'active' : ''}><span>Add Course</span></Link>
                    </li>
                </>
            )}
        </ul>
        </li>

        <li onClick={openSidebar}>
        <Link to="/dashboard/my-artwork" exact className={location.pathname === '/dashboard/my-artwork' ? 'active' : ''}>
            <i className="material-icons-two-tone">draw</i>Artwork
            <i className="material-icons has-sub-menu">keyboard_arrow_right</i>
        </Link>
        <ul className="sub-menu">
            <li onClick={openSidebar}>
            <Link onClick={openSidebar} to="/dashboard/my-artwork" exact className={location.pathname === '/dashboard/my-artwork' ? 'active' : ''}><span>My Artwork</span></Link>
            </li>
            <li onClick={openSidebar}>
            <Link onClick={openSidebar} to="/dashboard/add-artwork" exact className={location.pathname === '/dashboard/add-artwork' ? 'active' : ''}><span>Add Artwork</span></Link>
            </li>
        </ul>
        </li>
        <li>
            <Link>
            <i className="material-icons-two-tone">logout</i>Logout
            </Link>
        </li>
        </ul>
    </>
  );
}