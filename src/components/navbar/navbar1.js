import React from 'react';

function A1() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="https://library.livecanvas.com/sections/">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" className="align-middle me-1 img-fluid" alt="My Website" />
                        My Site</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar4" aria-controls="myNavbar4" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="lc-block collapse navbar-collapse" id="myNavbar4">
                        <div lc-helper="shortcode" className="live-shortcode me-auto">
                            {/* <!--  lc_nav_menu -->  */}
                            <ul id="menu-menu-1" className="navbar-nav"><li className="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739"><a href="https://library.livecanvas.com/starters" className="nav-link ">BS5 Page Templates</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738"><a href="https://library.livecanvas.com/sections/" className="nav-link ">BS5 Snippets</a></li>
                            </ul>
                            {/* <!-- /lc_nav_menu --> */}
                        </div>

                        <div lc-helper="shortcode" className="live-shortcode ms-auto">
                            {/* <!--  lc_nav_menu -->  */}
                            <ul id="menu-secondary" className="navbar-nav"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item nav-item-33131"><a href="#" className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Categories</a>
                                <ul className="dropdown-menu  depth_0">
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33132"><a href="https://library.livecanvas.com/sections/category/cta/" className="dropdown-item ">CTA</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33137"><a href="https://library.livecanvas.com/sections/category/contact/" className="dropdown-item ">Contact</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33136"><a href="https://library.livecanvas.com/sections/category/faq/" className="dropdown-item ">FAQ</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33138"><a href="https://library.livecanvas.com/sections/category/flex-layout/" className="dropdown-item ">Flex Layout</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33139"><a href="https://library.livecanvas.com/sections/category/footers/" className="dropdown-item ">Footers</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33140"><a href="https://library.livecanvas.com/sections/category/headers/" className="dropdown-item ">Headers</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33134"><a href="https://library.livecanvas.com/sections/category/pricing/" className="dropdown-item ">Pricing Tables</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33133"><a href="https://library.livecanvas.com/sections/category/team/" className="dropdown-item ">Team</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33135"><a href="https://library.livecanvas.com/sections/category/testimonials/" className="dropdown-item ">Testimonials</a></li>
                                </ul>
                            </li>
                            </ul>
                            {/* <!-- /lc_nav_menu -->  */}
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default A1;