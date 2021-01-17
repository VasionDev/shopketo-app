import React from 'react'
import Sidebar from "react-sidebar";
function Header(props) {
    return (
        <header>
            <div className="color-black-bg text-center">
                <div className="container-fluid sk-header__offer">
                    <a href="#" className="sk-header__offer--link disclaimer-reg">💸 Save 22% on Ketones and Reboot Systems <span className="font-bold br-mobile">Offer ends in 12d 4h 10m 53s</span></a>
                </div>
            </div>
            <nav className="sk-header__navbar border-bottom-1 sk-header__nav-desktop">
                <div className="container">
                    <div className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar sk-header__navbar-padding">
                        <a className="navbar-brand sk-header__logo-box" href="/index.html" aria-label="Bootstrap">
                            <img src="/assets/images/pruvitnow-logo-d.png" className="img-fluid sk-header__logo-d" alt="Logo desktop"/>
                        </a>
                        <ul className="navbar-nav ml-md-auto text-right">
                            <li className="nav-item">
                                <a className="nav-link sk-header__nav-link pointer" onClick={()=>props.onClickSidebar('country')}><img src="/assets/images/country.png" className="img-fluid sk-header__country-icon" alt="country"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link sk-header__nav-link" href="#"><img src="/assets/images/user.png" className="img-fluid retina-img sk-header__icon" alt="user"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link sk-header__nav-link cart-has-product pointer" onClick={()=>props.onClickSidebar('cart')}><img src="/assets/images/cart.png" className="img-fluid retina-img sk-header__icon" alt="cart"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="sk-header__navbar border-bottom-1 sk-header__nav-mobile">
                <div className="container">
                    <div className="navbar navbar-expand flex-md-row bd-navbar">

                        <a className="nav-link p-2" href="#"><img src="/assets/images/country.png" className="img-fluid country__mobile" alt="country"/></a>

                        <a className="m-auto" href="/index.html" aria-label="Bootstrap">
                            <img src="/assets/images/pruvitnow-logo-m.png" className="img-fluid  sk-header__nav-mobile--logo" alt="Logo desktop"/>
                        </a>
                
                        <ul className="navbar-nav ml-md-auto text-right">
                            <li className="nav-item">
                                <a className="nav-link p-2" href="#"><img src="/assets/images/user.png" className="img-fluid sk-header__user-m sk-header__icon" alt="user"/></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link p-2 cart-has-product" href="#"><img src="/assets/images/cart.png" className="img-fluid sk-header__icon" alt="cart"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
