import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const BottomNavigation = () => {
  return (
    <nav style={{background:'#fff'}} className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
                <NavItem>
                  <NavLink to='/home' className="nav-link" activeclassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <span><img src='https://i.ibb.co/b6JxkGm/home.png' alt='logo home'/></span>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to='/search' className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <span><img src='https://i.ibb.co/2qjPZdT/Search.png' alt='logo search'/></span>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to='/recents' className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <span><img src='https://i.ibb.co/Jv8bS4Q/recents.png' alt='logo recents'/></span>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to='/perfil' className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <span><img src='https://i.ibb.co/VWxFdYT/Profile.png' alt='logo perfil'/></span>
                    </div>
                  </NavLink>
                </NavItem>
          </div>
        </Nav>
      </nav>
  )
}

export default BottomNavigation