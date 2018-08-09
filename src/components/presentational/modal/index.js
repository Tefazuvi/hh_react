import React from "react";
import Card from '../card'

const CardsList = data => (
    <div className="hh_cocktails">
        <h2 className="hh_cocktails__subheading">Details</h2>
        <div className="hh_cocktails__container">
        <div className="hh-card">
                <img className="hh-card__image"
                    src={data.details[0].strDrinkThumb}
                    alt={data.details[0].strDrink}
                />
                <h2 className="hh-card__title">{data.details[0].strDrink}</h2>
            </div>
        </div>
    </div>
)

export default CardsList