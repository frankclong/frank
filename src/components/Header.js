import React from "react";

function Header() {
    return (
        <header>
        <h1 className="text-3xl font-bold underline">FRANK LONG</h1>
        <nav className="site-nav dark mb-5 site-navbar-target">
            <div className="container">
            <div className="site-navigation">
                <a href="index.html" className="logo m-0">Space<span className="text-primary">.</span></a>
                <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
                <li><a href="#home-section" className="nav-link active">Home</a></li>
                <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                <li><a href="#services-section" className="nav-link">Services</a></li>
                <li className="has-children">
                    <a href="#about-section" className="nav-link">About</a>
                    <ul className="dropdown">
                    <li><a href="elements.html" className="nav-link">Elements</a></li>
                    <li className="has-children">
                        <a href="#hobbies">Menu Two</a>
                        <ul className="dropdown">
                        <li><a href="#chess" className="nav-link">Sub Menu One</a></li>
                        <li><a href="#wine" className="nav-link">Sub Menu Two</a></li>
                        <li><a href="#drawing" className="nav-link">Sub Menu Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#about" className="nav-link">Menu Three</a></li>
                    </ul>
                </li>
                <li><a href="#contact-section" className="nav-link">Contact us</a></li>
                </ul>
                <a href="#about" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block" data-toggle="collapse" data-target="#main-navbar">
                <span />
                </a>
            </div>
            </div>
        </nav>
        </header>
    );
}

export default Header;