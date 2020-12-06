import React from "react";

import FlavorText from "./FlavorText";
import QuantatativeStats from "./QuantatativeStats";
import Spells from "./Spells";
import Features from "./Features";
import Personality from "./Personality";
import Invocations from "./Invocations";
import Equipment from "./Equipment";

class App extends React.Component {
  state = {
    charInfo: {},
  };

  componentDidMount() {
    // TODO: Retrieve character info from API
    fetch(process.env.PUBLIC_URL + "/data/charInfo.json")
      .then((res) => res.json())
      .then((charInfo) => this.setState({ charInfo: charInfo }));
  }
  render() {
    return (
      <div className="App">
        <CharacterName name={this.state.charInfo.name} />
        <FlavorText />
        <QuantatativeStats charInfo={this.state.charInfo} />
        <Features />
        <Personality />
        <LangsAndProfs
          langs={this.state.charInfo.languages}
          profs={this.state.charInfo.proficiencies}
        />
        <Invocations />
        <Spells />
        <Equipment />
        <Footer />
      </div>
    );
  }
}

function CharacterName(props) {
  return <h1>{props.name}</h1>;
}

function LangsAndProfs(props) {
  if (
    !props.langs ||
    props.langs.length === 0 ||
    !props.profs ||
    props.profs.length === 0
  )
    return <div></div>;
  return (
    <div id="profiencies">
      <h3>Languages and Proficiencies</h3>
      <ul>
        <li key="languages">
          <b>Languages</b>
          <ul>
            {props.langs.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </li>
        {props.profs.map((prof) => (
          <li key={prof}>{prof}</li>
        ))}
      </ul>
    </div>
  );
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
