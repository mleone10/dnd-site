import React from 'react';
import TopMatter from './TopMatter';
import Stats from './Stats';
import Abilities from './Abilities';

class BasicStats extends React.Component {
    render() {
        return (
            <div class="flex-item">
            <TopMatter details={this.props.details} />
            <Stats stats={this.props.details.stats} />
            <Abilities details={this.props.details} />
            </div>
        )
    }
}

export default BasicStats
