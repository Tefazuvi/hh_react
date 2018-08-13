import React from 'react'

class Alcoholic_Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            currentIndex : 0,
            positions : ['top', 'center', 'bottom']
        };
      }

    componentDidMount() {
        this.timer = setInterval(this.tick(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        if(this.state.currentIndex == 2){
            this.setState(currentIndex = 0);
        }else{
            this.state.currentIndex++;
        }
    }

    render() {
        const styles = {
            backgroundPosition: this.state.positions[this.state.currentIndex]
        };
        return (
            <div className="hh-alcoholic_banner" style={styles}>
                <div className="hh-alcoholic_banner__container">
                </div>
            </div>
        );
    }
}

export default Alcoholic_Banner