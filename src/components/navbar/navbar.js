import React from 'react';
import { Link } from 'react-router-dom';
import routes from "../../routes"
import "../styles/navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/portfolio/">
                        <img src="/img/mmm.jpg" className="align-middle me-1 img-fluid logo" alt="My Website" /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar4" aria-controls="myNavbar4" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="lc-block collapse navbar-collapse" id="myNavbar4">
                        <div lc-helper="shortcode" className="live-shortcode me-auto">
                            <ul id="menu-menu-1" className="navbar-nav">
                            {routes.map((route) => (
                            route.children ? (
                                <li key={route.name} className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {route.name}
                                    </a>
                                    <ul className="dropdown-menu">
                                        {route.children.map((child) => (
                                            <li key={child.path}>
                                                <Link to={child.path} className="dropdown-item" 
                                                target={child.ltype === "outside" ? "_blank": "_self"}>
                                                    {child.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={route.path} className="nav-item">
                                    <Link to={route.path} className="nav-link">
                                        {route.name}
                                    </Link>
                                </li>
                            )
                        ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;