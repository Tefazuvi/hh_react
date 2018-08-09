import React from "react";
import CardsList from "../../presentational/cardsList";

const API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

class Cocktails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cocktails: [] };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ cocktails: data.drinks.slice(0, 20) }));
  }

  render() {
    if (this.state.cocktails.length > 0) {
      return <CardsList cocktails={this.state.cocktails} />;
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default Cocktails