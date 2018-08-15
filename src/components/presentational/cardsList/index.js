import React from "react";
import Card from '../card'

const CardsList = data => (
    <div className="hh_cocktails">
        <h2 className="hh_cocktails__subheading">{data.alcohol ? 'ALCOHOLIC COCKTAILS' : 'NON-ALCOHOLIC MOCKTAILS'}</h2>
        <p className="hh_cocktails__description">{data.alcohol ? 'Greatest collection of the most delightful and daring drinks of all time.' : 'Delicious and hydrating drinks for all ages, perfect for any ocassion.'}</p>
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