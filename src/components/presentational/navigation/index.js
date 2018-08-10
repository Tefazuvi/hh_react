import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="hh-nav hh-nav--primary">
                <ul className="hh-nav__list">
                <li className="hh-nav__list-item">
                        <a href="#" className="hh-nav__link">Home</a>
                    </li>
                    <li className="hh-nav__list-item">
                        <a href="#" className="hh-nav__link">Alcoholic</a>
                    </li>
                    <li className="hh-nav__list-item">
                        <a href="#" className="hh-nav__link">Non-Alcoholic</a>
                    </li>
                    <li className="hh-nav__list-item">
                        <a href="#" className="fo-nav__link">About</a>
                    </li>
                    <li className="hh-nav__list-item">
                        <a href="#" className="fo-nav__link">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation