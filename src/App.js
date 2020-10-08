import React from "react";

import QuantatativeStats from "./QuantatativeStats";
import Spells from "./Spells";
import ReactMarkdown from "react-markdown";

const FLAVOR_TEXT =
  "\"No, I can't say this is exactly my 'comfort zone' - we departed **that** happy Grove quite some time ago. But I suppose it's all fallen on me, hmm? 'An elf bleeds the same as anyone,' as they say, so I've got quite a weight on my shoulders...\"";
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
    score: 20,
    save: true,
  },
};
const CHAR_INFO = {
  class: "Warlock",
  level: 9,
  gender: "Male",
  race: "Pallid Elf",
  background: "Sage (Researcher)",
  profBonus: 4,
  hpMax: 66,
  hpCur: 66,
  baseAC: 11,
  spellSlots: 3,
};
const SKILLS = {
  acrobatics: { name: "Acrobatics", prof: false, adv: false, modKey: "dex" },
  animalhandling: {
    name: "Animal Handling",
    prof: false,
    adv: false,
    modKey: "wis",
  },
  arcana: { name: "Arcana", prof: true, adv: false, modKey: "int" },
  athletics: { name: "Athletics", prof: false, adv: false, modKey: "str" },
  deception: { name: "Deception", prof: true, adv: false, modKey: "cha" },
  history: { name: "History", prof: true, adv: false, modKey: "int" },
  insight: { name: "Insight", prof: false, adv: true, modKey: "wis" },
  intimidation: { name: "Intimidation", prof: true, adv: false, modKey: "cha" },
  investigation: {
    name: "Investigation",
    prof: false,
    adv: true,
    modKey: "int",
  },
  medicine: { name: "Medicine", prof: false, adv: false, modKey: "wis" },
  nature: { name: "Nature", prof: false, adv: false, modKey: "int" },
  perception: { name: "Perception", prof: true, adv: false, modKey: "wis" },
  performance: { name: "Performance", prof: false, adv: false, modKey: "cha" },
  persuasion: { name: "Persuasion", prof: false, adv: false, modKey: "cha" },
  religion: { name: "Religion", prof: false, adv: false, modKey: "int" },
  sleightofhand: {
    name: "Sleight of Hand",
    prof: false,
    adv: false,
    modKey: "dex",
  },
  stealth: { name: "Stealth", prof: false, adv: false, modKey: "dex" },
  survival: { name: "Survival", prof: false, adv: false, modKey: "wis" },
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CharacterName name="Letheryl" />
        <FlavorText text={FLAVOR_TEXT} />
        <QuantatativeStats
          abilities={ABILITIES}
          charInfo={CHAR_INFO}
          skillProf={SKILLS}
        />
        <Spells charInfo={CHAR_INFO} />
        <Footer />
      </div>
    );
  }
}

function CharacterName(props) {
  return <h1>{props.name}</h1>;
}

function FlavorText(props) {
  return <ReactMarkdown source={props.text} className="flavortext" />;
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
