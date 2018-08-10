import React from "react";
import Navigation from '../navigation';

class Header extends React.Component {
    render() {
        return (
            <header className="hh-header">
                <div className="hh-header__container">
                    <a href="#" className="hh-header__logo">
                        <img src="" className="hh-header__img" />
                    </a>
                </div>
                <Navigation />
            </header>
        );
    }
}

export default Header