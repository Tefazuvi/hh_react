import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <nav class="hh-nav hh-nav--primary">
                <ul class="hh-nav__list">
                <li class="hh-nav__list-item">
                        <a href="#" class="hh-nav__link">Home</a>
                    </li>
                    <li class="hh-nav__list-item">
                        <a href="#" class="hh-nav__link">Alcoholic</a>
                    </li>
                    <li class="hh-nav__list-item">
                        <a href="#" class="hh-nav__link">Non-Alcoholic</a>
                    </li>
                    <li class="hh-nav__list-item">
                        <a href="#" class="fo-nav__link">About</a>
                    </li>
                    <li class="hh-nav__list-item">
                        <a href="#" class="fo-nav__link">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation