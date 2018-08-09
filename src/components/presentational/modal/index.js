import React from "react";

const Modal = ({ details, show, handleClose, ingredients }) => (
    <div style={{ display: show ? 'block' : 'none' }}>
        <div className="hh_modal">
            <h2 className="hh_modal__title">{details[0].strDrink}</h2>
            <div className="hh_modal__container">
                <img className="hh_modal__image"
                    src={details[0].strDrinkThumb}
                    alt={details[0].strDrink}
                />
                <div className="hh_modal__Content">
                    <div className="hh_modal__Ingredients">
                        <h3 className="hh_modal__title">Ingredients</h3>
                        <ul>
                            {ingredients.map((ingredient, index) =>
                                <li key={index}>{ingredient}</li>
                            )}
                        </ul>
                    </div>
                    <div className="hh_modal__Instructions">
                        <h3 className="hh_modal__title">Instructions</h3>
                        <p>{details[0].strInstructions}</p>
                    </div>
                </div>
            </div>
            <button className="hh_modal__button" onClick={handleClose} type="button">CLOSE</button>
        </div>
    </div>
)

export default Modal