import React from "react";
import Modal from "../../presentational/modal";

const API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const ID = '14029';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = { details: [] };
  }

  componentDidMount() {
    fetch(API + ID)
      .then(response => response.json())
      .then(data => this.setState({ details: data.drinks }));
  }

  render() {
    if (this.state.details.length > 0) {
      return <Modal details={this.state.details} />;
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default Details