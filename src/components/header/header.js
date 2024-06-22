import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

const Header = () => {
    return (
        <header className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <Link className="navbar-brand" to="/home">
                                <img src="images/kris-log-min.png" alt="Logo" className="header-logo" />
                            </Link>

                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="ion-android-menu"></span>
                            </button>

                            <div className="collapse navbar-collapse ml-auto" id="navbarsExample09">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio <span className="ion-ios-arrow-down"></span></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><Link className="dropdown-item" to="/portfolio">Latest Projects</Link></li>
                                            <li><Link className="dropdown-item" to="/portfolio-single">Project Details</Link></li>
                                            <li className="dropdown dropdown-submenu dropright">
                                                <Link className="dropdown-item dropdown-toggle" to="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</Link>
                                                <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                                                    <li><Link className="dropdown-item" to="/submenu01">Submenu 01</Link></li>
                                                    <li><Link className="dropdown-item" to="/submenu02">Submenu 02</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <span className="ion-ios-arrow-down"></span></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                            <li><Link className="dropdown-item" to="/blog-grid">Blog Grid</Link></li>
                                            <li><Link className="dropdown-item" to="/blog-single">Blog Single</Link></li>
                                            <li><Link className="dropdown-item" to="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                                            <li><Link className="dropdown-item" to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                            <li><Link className="dropdown-item" to="/blog-full-width">Blog Full Width</Link></li>
                                            <li className="dropdown dropdown-submenu dropleft">
                                                <Link className="dropdown-item dropdown-toggle" to="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</Link>
                                                <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                    <li><Link className="dropdown-item" to="/submenu01">Submenu 01</Link></li>
                                                    <li><Link className="dropdown-item" to="/submenu02">Submenu 02</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                     {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <span className="ion-ios-arrow-down"></span></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                            <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                                            <li><Link className="dropdown-item" to="/coming-soon">Coming Soon</Link></li>
                                            <li><Link className="dropdown-item" to="/404">404 Page</Link></li>
                                            <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                            <li><Link className="dropdown-item" to="/pricing">Pricing Table</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
