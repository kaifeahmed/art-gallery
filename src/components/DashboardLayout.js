import React from 'react'
import LeftMenu from './LeftMenu'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import AppHeader from './AppHeader';

export default function DashboardLayout() {

  const Navigate = useNavigate();

    const [isSidebarHidden, setIsSidebarHidden] = useState(false); // New state

    // useEffect(() => {
    //     const fetchCurrentUser = async () => {
    //       try {
    //         var currentUser = await getCurrentUserDetails();
          
    //         if(currentUser.status == "Reject"){
    //           navigate('/approval-rejected');
    //         }
    //         setCurrentUser(currentUser);
    //       } catch (error) {
    //         console.error('Error fetching current user:', error);
    //       }
    //     };
    
    //     fetchCurrentUser();
    //   }, []);

    const toggleSidebar = () => {
      setIsSidebarHidden((prev) => !prev);
    };

    
    return (
        <>
            <div className={`app align-content-stretch d-flex flex-wrap ${
              isSidebarHidden ? 'sidebar-hidden' : ''
            }`}>
              <div className="app-sidebar">
                <div className="logo">
                  <Link to="/dashboard" className="logo-icon">
                    <span className="logo-text">BBR</span>
                  </Link>
                  <div className="sidebar-user-switcher user-activity-online">
                    <Link to="/dashboard/setting">
                      <span className="activity-indicator"></span>
                      <span className="user-info-text">
                        Kaif Ahmed
                        <br />
                        <span className="user-state-info">Online</span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="app-menu">
                  <LeftMenu onSidebarToggle={toggleSidebar}/>
                </div>
              </div>
              <div className="app-container">
                <div className="search">
                  <form>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Type here..."
                      aria-label="Search"
                    />
                  </form>
                </div>
                <div className="app-header">
                  <AppHeader onSidebarToggle={toggleSidebar} />
                </div>
                <div className="app-content">
                  <div className="content-wrapper">
                    <div className="container">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
      );
          }
      