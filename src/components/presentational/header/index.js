import React from "react";
import Navigation from '../navigation';
import logo from '../../../assets/images/logo_HH.png';

class Header extends React.Component {
    render() {
        return (
            <header className="hh-header">
                <div className="hh-header__container">
                    <a href="#" className="hh-header__logo">
                        <img src={logo} className="hh-header__img" />
                    </a>
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header