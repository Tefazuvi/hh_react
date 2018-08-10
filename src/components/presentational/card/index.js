import React from 'react'
import Details from '../../container/details'

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.show = this.show.bind(this);
        this.state = { show: false };
    }

    show(event) {
        this.setState({ show: true });
    }

    handleClose(event) {
        this.setState({ show: false });
    }


    render() {
        return (
            <div className="hh-card">
                <img className="hh-card__image" onClick={this.show}
                    src={this.props.imageUri}
                    alt={this.props.title}
                />
                <h2 className="hh-card__title">{this.props.title}</h2>
                <Details
                    id={this.props.id}
                    show={this.state.show}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

export default Card