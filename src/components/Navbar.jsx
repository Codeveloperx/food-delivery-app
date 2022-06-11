import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav style={{background: '#fff'}} className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" 	role="navigation">
    <div className="container-fluid">
        <a className="navbar-brand" href="/home"><span><img src="https://i.ibb.co/LNNrhhq/Logo.png" alt="" /></span> Food Delivey</a>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/search" className="nav-link">
              Search
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </NavItem>
        </Nav>
    </div>
  </nav>
)
};

export default Navbar