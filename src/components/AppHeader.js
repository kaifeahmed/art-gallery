import React from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom';

export default function AppHeader({ onSidebarToggle }) {

    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
      navigate(-1); // Navigate back one step in history
    };

    const openSidebar = () => {
        console.log('Clicked');
        onSidebarToggle();
    };

  return (
    <>
    <nav class="navbar navbar-light navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-nav" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link hide-sidebar-toggle-button" to="#" onClick={goBack}><i class="material-icons">first_page</i></Link>
                                </li>
                                <li class="nav-item mobile-only">
                                    <Link class="nav-link hide-sidebar-toggle-button" onClick={openSidebar}><i class="material-icons">menu_open</i></Link>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex">
                            <ul class="navbar-nav">
                                <li class="nav-item hidden-on-mobile">
                                    <Link to='/' class="nav-link" exact className={location.pathname === '/' ? 'active' : ''}><span>Back to website</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </>
  )
}
