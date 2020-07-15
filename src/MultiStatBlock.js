import React from 'react';
import BasicStats from './BasicStats';
import Skills from './Skills';

class MultiStatBlock extends React.Component {
    render() {
        return (
            <div class="flex-container">
            <BasicStats details={this.props.details} />
            <Skills skills={this.props.details.skillproficiencies} />
            </div>
        )
    }
}

export default MultiStatBlock
