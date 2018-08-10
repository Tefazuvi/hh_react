import React from "react";
import Navigation from '../navigation';

class Header extends React.Component {
    render() {
        return (
            <header class="hh-header">
                <div class="hh-header__container">
                    <a href="#" class="hh-header__logo">
                        <img src="" class="hh-header__img" />
                    </a>
                </div>
                <Navigation />
            </header>
        );
    }
}

export default Header