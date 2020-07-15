import React from 'react';

class TopMatter extends React.Component {
    render() {
        return (
            <div id="topmatter">
                {this.props.details.classes.map((value, index) => {
                    return <p><b>{value.name} {value.levels}</b></p>
                })}
                <p><b>{this.props.details.gender} {this.props.details.race}</b></p>
                <p><b>{this.props.details.background}</b></p>
            </div>
        )
    }
}

export default TopMatter
