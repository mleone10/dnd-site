import React from "react";

class Equipment extends React.Component {
  state = {
    uncategorized: [],
    categories: [],
  };

  componentDidMount() {
    // TODO: Retrieve equipment from API
    fetch(process.env.PUBLIC_URL + "/data/equipment.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          uncategorized: data.uncategorized,
          categories: data.categories,
        })
      );
  }

  render() {
    if (
      !this.state.uncategorized ||
      Object.entries(this.state.uncategorized) === 0
    )
      return <div></div>;
    return (
      <div id="equipment">
        <h3>Equipment</h3>
        <ul>
          {this.state.uncategorized.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {this.state.categories.map((category) => (
            <Category category={category} key={category.name} />
          ))}
        </ul>
      </div>
    );
  }
}

function Category(props) {
  return (
    <li>
      <b>{props.category.name}</b>
      <ul>
        {props.category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default Equipment;
