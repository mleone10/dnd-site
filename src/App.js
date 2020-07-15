import React from 'react';
import FlavorText from './FlavorText';
import MultiStatBlock from './MultiStatBlock';

class App extends React.Component  {
    render() {
        return (
            <div className="App">
            <h1>Letheryl</h1>
            <FlavorText text={this.props.characterDetails.flavortext} />
            <MultiStatBlock details={this.props.characterDetails} />
            </div>
        );
    }
}

export default App;
