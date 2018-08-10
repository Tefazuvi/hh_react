import React from "react";
import Modal from "../../presentational/modal";

const API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

class Details extends React.Component {

  /*state = {
    details: []
  }*/
  
  constructor(props) {
    super(props);

    this.state = { details: [] };
  }

  componentDidMount() {
    const ID = this.props.id;
    if(ID != null){
    fetch(API + ID)
      .then(response => response.json())
      .then(data => this.setState({ details: data }));
    }
  }

  getIngredients() {
    var Ingredients = [];
    for(var i = 1; i <= 15; i++){
      var ingredient = this.state.details.drinks[0]['strIngredient' + (i)];
      if(ingredient != ''){
        Ingredients.push(ingredient);
      }
    }
    return Ingredients;
  }

  render() {
    if (this.state.details.drinks != undefined) {
      return <Modal
        details={this.state.details.drinks}
        show={this.props.show}
        handleClose ={this.props.handleClose}
        ingredients ={this.getIngredients()}
      />;
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default Details