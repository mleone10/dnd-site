import React from "react";

class Invocations extends React.Component {
  state = {
    invocations: [],
  };

  componentDidMount() {
    // TODO: Retrieve invocations from API
    fetch(process.env.PUBLIC_URL + "/data/invocations.json")
      .then((res) => res.json())
      .then((data) => this.setState({ invocations: data.invocations }));
  }

  render() {
    if (
      !this.state.invocations ||
      Object.keys(this.state.invocations).length === 0
    )
      return <div></div>;
    return (
      <div id="invocations">
        <h3>Invocations</h3>
        <ul>
          {this.state.invocations.map((invocation) => (
            <li key={invocation.name}>
              <b>{invocation.name}:</b> {invocation.desc}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Invocations;
