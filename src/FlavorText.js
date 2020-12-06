import React from "react";

import ReactMarkdown from "react-markdown";

class FlavorText extends React.Component {
  state = {
    flavorText: "",
  };

  componentDidMount() {
    // TODO: Retrieve flavor text from API
    fetch(process.env.PUBLIC_URL + "/data/flavorText.md")
      .then((res) => res.text())
      .then((flavorText) => this.setState({ flavorText: flavorText }));
  }

  render() {
    return (
      <ReactMarkdown source={this.state.flavorText} className="flavortext" />
    );
  }
}

export default FlavorText;
