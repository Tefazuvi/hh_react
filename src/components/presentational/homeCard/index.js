import React from 'react'
import non_alcohol_image from '../../../assets/images/non-alcoholic1.jpg';
import alcohol_image from '../../../assets/images/alcoholic_bottles.jpg';

class HomeCard extends React.Component {
    render() {
        return (
            <div>
                <div className="hh-home_card">
                    <div className="hh-home_card__content hh-home_card__content--left">
                        <span className="fhh-home_card__title">Non-Alcoholic</span>
                        <p className="hh-home_card__description">Add description.</p>
                        <button className="hh-button hh-button--secondary">COCKTAILS</button>
                    </div>
                    <img src={non_alcohol_image} className="hh-home_card__image hh-home_card__image--right" />
                </div>
                <div className="hh-home_card">
                    <img src={alcohol_image} className="hh-home_card__image hh-home_card__image--left" />
                    <div className="hh-home_card__content">
                        <span className="fhh-home_card__title">Alcoholic</span>
                        <p className="hh-home_card__description">Add description.</p>
                        <button className="hh-button hh-button--secondary">COCKTAILS</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard