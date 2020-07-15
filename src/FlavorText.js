import React from 'react';

class FlavorText extends React.Component {
    render() {
        return (
            <div id="flavortext">
            <p>{this.props.text}</p>
            </div>
        );
    }
}

export default FlavorText
