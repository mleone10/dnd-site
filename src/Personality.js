import React from "react";

class Personality extends React.Component {
  state = {
    personality: {},
  };

  componentDidMount() {
    // TODO: Retrieve personality from API
    fetch(process.env.PUBLIC_URL + "/data/personality.json")
      .then((res) => res.json())
      .then((data) => this.setState({ personality: data }));
  }

  render() {
    if (
      !this.state.personality ||
      Object.keys(this.state.personality).length === 0
    )
      return <div></div>;
    return (
      <div id="personality">
        <h3>Personality</h3>
        <ul>
          <Aspect name="Ideals" items={this.state.personality.ideals} />
          <Aspect name="Flaws" items={this.state.personality.flaws} />
          <Aspect name="Traits" items={this.state.personality.traits} />
          <Aspect name="Bonds" items={this.state.personality.bonds} />
        </ul>
      </div>
    );
  }
}

function Aspect(props) {
  return (
    <li key={props.name}>
      <b>{props.name}:</b>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default Personality;
