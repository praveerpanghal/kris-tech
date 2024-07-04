import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./header.scss";

const Header = () => {
    return (
        <header className="navigation">
            <div className="container">
                <Navbar expand="lg">
                    <Link className="navbar-brand" to="/home">
                        <img src="images/kris-log-min1.png" alt="OVA" className="header-logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link className="nav-link" to="/home">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/service">Service</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;
