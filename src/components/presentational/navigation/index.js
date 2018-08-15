import React from "react";
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <nav className="hh-nav hh-nav--primary">
                <ul className="hh-nav__list">
                    <li className="hh-nav__list-item">
                        <Link to='/' className="hh-nav__link">Home</Link>
                    </li>
                    <li className="hh-nav__list-item">
                        <Link to='/alcoholic_cocktails' className="hh-nav__link">Alcoholic</Link>
                    </li>
                    <li className="hh-nav__list-item">
                    <Link to='/non_alcoholic_cocktails' className="hh-nav__link">Non-Alcoholic</Link>
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