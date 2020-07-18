import React from "react";
import QuantatativeStats from "./QuantatativeStats";

const FLAVOR_TEXT =
  "\"No, I can't say this is exactly my 'comfort zone' - we departed <b>that</b> happy Grove quite some time ago. But I suppose it's all fallen on me, hmm? 'An elf bleeds the same as anyone,' as they say, so I've got quite a weight on my shoulders...\"";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CharacterName name="Letheryl" />
        <FlavorText />
        <QuantatativeStats />
        <Footer />
      </div>
    );
  }
}

function CharacterName(props) {
  return <h1>{props.name}</h1>;
}

function FlavorText(props) {
  return (
    <div id="flavortext">
      <p dangerouslySetInnerHTML={{ __html: getFlavorText() }} />
    </div>
  );
}

function Footer(props) {
  return <footer>Copyright &copy; 2020 Mario Leone</footer>;
}

function getFlavorText() {
  return FLAVOR_TEXT;
}

export default App;
