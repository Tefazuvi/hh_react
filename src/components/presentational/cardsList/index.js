import React from "react";
import Card from '../card'

const CardsList = data => (
    <div className="hh_cocktails">
        <h2 className="hh_cocktails__subheading">ALCOHOLIC COCKTAILS</h2>
        <div className="hh_cocktails__container">
        <div className="hh_cocktails__container__overlay"></div>
            {data.cocktails.map(({ strDrinkThumb, strDrink, idDrink }) =>
                <Card key={idDrink}
                    imageUri={strDrinkThumb}
                    title={strDrink}
                    id={idDrink}
                />
            )}
        </div>
    </div>
)

export default CardsList