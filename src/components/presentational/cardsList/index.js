import React from "react";
import Card from '../card'

const CardsList = data => (
    <div className="hh_cocktails">
        <h2 className="hh_cocktails__subheading">All cocktails</h2>
        <div className="hh_cocktails__container">
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