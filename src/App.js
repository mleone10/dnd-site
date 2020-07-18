import React from "react";
import QuantatativeStats from "./QuantatativeStats";

const FLAVOR_TEXT =
  "\"No, I can't say this is exactly my 'comfort zone' - we departed <b>that</b> happy Grove quite some time ago. But I suppose it's all fallen on me, hmm? 'An elf bleeds the same as anyone,' as they say, so I've got quite a weight on my shoulders...\"";
const ABILITIES = {
  str: {
    name: "Strength",
    abr: "Str",
    score: 9,
    save: false,
  },
  con: {
    name: "Constitution",
    abr: "Con",
    score: 14,
    save: false,
  },
  dex: {
    name: "Dexterity",
    abr: "Dex",
    score: 14,
    save: false,
  },
  wis: {
    name: "Wisdom",
    abr: "Wis",
    score: 13,
    save: true,
  },
  int: {
    name: "Intelligence",
    abr: "Int",
    score: 10,
    save: false,
  },
  cha: {
    name: "Charisma",
    abr: "Cha",
    score: 18,
    save: true,
  },
};
const CHAR_INFO = {
  class: "Warlock",
  level: 6,
  gender: "Male",
  race: "Pallid Elf",
  background: "Sage (Researcher)",
  profBonus: 3,
  hpMax: 45,
  hpCur: 45,
};
const SKILL_PROF = {
  acrobatics: false,
  animalhandling: false,
  arcana: true,
  athletics: false,
  deception: true,
  history: true,
  insight: false,
  intimidation: true,
  investigation: false,
  medicine: false,
  nature: false,
  perception: true,
  performance: false,
  persuasion: false,
  religion: false,
  sleightofhand: false,
  stealth: false,
  survival: false,
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CharacterName name="Letheryl" />
        <FlavorText />
        <QuantatativeStats
          abilities={ABILITIES}
          charInfo={CHAR_INFO}
          skillProf={SKILL_PROF}
        />
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
