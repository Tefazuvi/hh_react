import React from 'react'

class Banner extends React.Component {
    render() {
        return (
            <div className="hh-banner">
                <div className="hh-banner__container">
                    <h1 className="hh-banner__title">Happy Hour</h1>
                    <p className="hh-banner__description">... is the best hour</p>
                </div>
            </div>
        );
    }
}

export default Banner