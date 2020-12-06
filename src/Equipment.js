import React from "react";

class Equipment extends React.Component {
  state = {
    equipment: [],
  };

  componentDidMount() {
    // TODO: Retrieve equipment from API
    fetch(process.env.PUBLIC_URL + "/data/equipment.json")
      .then((res) => res.json())
      .then((data) => this.setState({ features: data.features }));
  }

  render() {
    return (
      <div id="equipment">
        <h3>Equipment</h3>
      </div>
    );
  }
}

export default Equipment;
