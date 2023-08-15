import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Swarm AI</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/" className="nav-link">Dashboard</NavLink>
          <NavLink to="/sessions" className="nav-link">Sessions</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/profile" className="nav-link">{this.props.token}</NavLink>
        </Nav>
      </Navbar>
    );
  }
}
