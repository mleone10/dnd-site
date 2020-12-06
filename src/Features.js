import React from "react";

class Features extends React.Component {
  state = {
    features: [],
  };

  componentDidMount() {
    // TODO: Retrieve features from API
    fetch(process.env.PUBLIC_URL + "/data/features.json")
      .then((res) => res.json())
      .then((data) => this.setState({ features: data.features }));
  }

  render() {
    return (
      <div id="features">
        <h3>Features and Traits</h3>
        <FeaturesList features={this.state.features} />
      </div>
    );
  }
}

function FeaturesList(props) {
  return (
    <ul>
      {props.features.map((feature) => (
        <li key={feature.name}>
          <b>{feature.name}:</b> <i>({feature.source})</i> {feature.desc}
        </li>
      ))}
    </ul>
  );
}

export default Features;
