import React from 'react'

class Card extends React.Component {
    render() {
        const imageClick = () => {
            console.log('Click');
        }
        return (
            <div className="hh-card">
                <img className="hh-card__image"
                    src={this.props.imageUri}
                    alt={this.props.title}
                    onClick={() => imageClick()}
                />
                <h2 className="hh-card__title">{this.props.title}</h2>
            </div>
        );
    }
}

export default Card