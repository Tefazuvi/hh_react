import React from 'react'
import non_alcohol_image from '../../../assets/images/non-alcoholic1.jpg';
import alcohol_image from '../../../assets/images/alcoholic_bottles.jpg';
import { Link } from 'react-router-dom'

class HomeCard extends React.Component {
    render() {
        return (
            <div>
                <div className="hh-home_card">
                    <div className="hh-home_card__content hh-home_card__content--left">
                        <span className="hh-home_card__title">NON-ALCOHOLIC COCKTAILS</span>
                        <p className="hh-home_card__description">Delicious and hydrating drinks for all ages, perfect for any ocassion.</p>
                        <Link to='/non_alcoholic_cocktails'><button className="hh-button hh-button--secondary">VIEW COCKTAILS</button></Link>
                    </div>
                    <img src={non_alcohol_image} className="hh-home_card__image hh-home_card__image--right" />
                </div>
                <div className="hh-home_card">
                    <img src={alcohol_image} className="hh-home_card__image hh-home_card__image--left" />
                    <div className="hh-home_card__content">
                        <span className="hh-home_card__title">ALCOHOLIC COCKTAILS</span>
                        <p className="hh-home_card__description">Greatest collection of the most delightful and daring drinks of all time.</p>
                        <Link to='/alcoholic_cocktails'><button className="hh-button hh-button--secondary">VIEW COCKTAILS</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard