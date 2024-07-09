import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "./header.scss";
import * as constants from "../../constants/commonConstant";

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleNavClick = () => setExpanded(false);

    return (
        <div className="ova2-header">
            <header className="navigation p-0">
                <div className="container">
                    <Navbar expand="lg" expanded={expanded}>
                        <Link className="navbar-brand text-left" to="/home">
                            <img src="images/ova2_logo.png" alt={constants.companyName} className="header-logo" />
                        </Link>
                        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item>
                                    <Link className="nav-link" to="/home" onClick={handleNavClick}>Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/projects" onClick={handleNavClick}>Projects</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/service" onClick={handleNavClick}>Service</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/contact" onClick={handleNavClick}>Contact</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/login" onClick={handleNavClick}>Login</Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </div>
    );
};

export default Header;
