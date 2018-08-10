import React from "react";

const Modal = ({ details, show, handleClose, ingredients }) => (
    <div className="hh_modal" style={{ display: show ? 'block' : 'none' }}>
    <div className="hh_modal__overlay"></div>
        <div className="hh_modal__main">
            <h2 className="hh_modal__title">{details[0].strDrink}</h2>
            <div className="hh_modal__container">
                <img className="hh_modal__image"
                    src={details[0].strDrinkThumb}
                    alt={details[0].strDrink}
                />
                <div className="hh_modal__Content">
                    <div className="hh_modal__Ingredients">
                        <h3 className="hh_modal__subtitle">INGREDIENTS</h3>
                        <ul>
                            {ingredients.map((ingredient, index) =>
                                <li key={index}>{ingredient}</li>
                            )}
                        </ul>
                    </div>
                    <div className="hh_modal__Instructions">
                        <h3 className="hh_modal__subtitle">INSTRUCTIONS</h3>
                        <p>{details[0].strInstructions}</p>
                    </div>
                </div>
            </div>
            <button className="hh_modal__button hh-button" onClick={handleClose} type="button">CLOSE</button>
        </div>
    </div>
)

export default Modal