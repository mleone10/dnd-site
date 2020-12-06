import React from "react";

import FlavorText from "./FlavorText";
import QuantatativeStats from "./QuantatativeStats";
import Spells from "./Spells";
import Features from "./Features";
import Personality from "./Personality";
import Invocations from "./Invocations";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CharacterName name="Letheryl" />
        <FlavorText />
        <QuantatativeStats />
        <Features />
        <Personality />
        <Invocations />
        <Spells />
        <Footer />
      </div>
    );
  }
}

function CharacterName(props) {
  return <h1>{props.name}</h1>;
}

function Footer(props) {
  return (
    <footer>
      Copyright &copy; 2020 Mario Leone &middot; Hosted on{" "}
      <a href="https://github.com/mleone10/dnd-site">GitHub</a>
    </footer>
  );
}

export default App;
