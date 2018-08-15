import React from "react";
import CardsList from "../../presentational/cardsList";

const ALC_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
const NALC_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

class Cocktails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      cocktails: [],
      API: this.props.alcohol ? ALC_API : NALC_API
     };
  }

  componentDidMount() {
    fetch(this.state.API)
      .then(response => response.json())
      .then(data => this.setState({ cocktails: data.drinks.slice(1, 22) }));
  }

  render() {
    if (this.state.cocktails.length > 0) {
      return <CardsList 
      cocktails={this.state.cocktails}
      alcohol={this.props.alcohol}
      />;
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default Cocktails