import React from "react";

class QuantatativeStats extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-item" id="overview">
          <TopMatter content={getTopMatter()} />
          <Stats stats={getStats()} />
          <Abilities abilities={getAbilities()} />
        </div>
        <Skills abilities={getAbilities()} />
      </div>
    );
  }
}

function TopMatter(props) {
  return (
    <div id="topmatter">
      <p>
        <b>
          {props.content.class} {props.content.level}
        </b>
      </p>
      <p>
        <b>
          {props.content.gender} {props.content.race}
        </b>
      </p>
      <p>
        <b>{props.content.background}</b>
      </p>
    </div>
  );
}

function Stats(props) {
  return (
    <div id="stats">
      <h3>Stats</h3>
      <table>
        <tbody>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
          {props.stats.map((stat) => (
            <Stat name={stat.name} value={stat.value} key={stat.name}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Stat(props) {
  return (
    <tr>
      <td className="str">{props.name}</td>
      <td className="num">{props.value}</td>
    </tr>
  );
}

function Abilities(props) {
  return (
    <div id="abilities">
      <h3>Abilities</h3>
      <table>
        <tbody>
          <tr>
            <th>Ability</th>
            <th>Score</th>
            <th>Mod</th>
            <th>Save</th>
          </tr>
          <Ability ability={props.abilities.str} />
          <Ability ability={props.abilities.con} />
          <Ability ability={props.abilities.dex} />
          <Ability ability={props.abilities.wis} />
          <Ability ability={props.abilities.int} />
          <Ability ability={props.abilities.cha} />
        </tbody>
      </table>
    </div>
  );
}

function Ability(props) {
  return (
    <tr>
      <td className="str">{props.ability.name}</td>
      <td className="num">{props.ability.score}</td>
      <td className="num">{calculateAbilityMod(props.ability.score)}</td>
      <td className="check">
        <input
          type="checkbox"
          checked={props.ability.save && "checked"}
          readOnly={true}
        />
      </td>
    </tr>
  );
}

function Skills(props) {
  return (
    <div className="flex-item" id="skills">
      <h3>Skills</h3>
      <table>
        <tbody>
          <tr>
            <th>Skill</th>
            <th>Ability</th>
            <th>Mod</th>
            <th>Prof</th>
          </tr>
          <Skill name="Acrobatics" ability={props.abilities.dex} prof={false} />
          <Skill
            name="Animal Handling"
            ability={props.abilities.wis}
            prof={false}
          />
          <Skill name="Arcana" ability={props.abilities.int} prof={true} />
          <Skill name="Athletics" ability={props.abilities.str} prof={false} />
          <Skill name="Deception" ability={props.abilities.cha} prof={true} />
          <Skill name="History" ability={props.abilities.int} prof={true} />
          <Skill name="Insight" ability={props.abilities.wis} prof={false} />
          <Skill
            name="Intimidation"
            ability={props.abilities.cha}
            prof={true}
          />
          <Skill
            name="Investigation"
            ability={props.abilities.int}
            prof={false}
          />
          <Skill name="Medicine" ability={props.abilities.wis} prof={false} />
          <Skill name="Nature" ability={props.abilities.int} prof={false} />
          <Skill name="Perception" ability={props.abilities.wis} prof={true} />
          <Skill
            name="Performance"
            ability={props.abilities.cha}
            prof={false}
          />
          <Skill name="Persuasion" ability={props.abilities.cha} prof={false} />
          <Skill name="Religion" ability={props.abilities.int} prof={false} />
          <Skill
            name="Sleight of Hand"
            ability={props.abilities.dex}
            prof={false}
          />
          <Skill name="Stealth" ability={props.abilities.dex} prof={false} />
          <Skill name="Survival" ability={props.abilities.wis} prof={false} />
        </tbody>
      </table>
    </div>
  );
}

function Skill(props) {
  return (
    <tr>
      <td className="str">{props.name}</td>
      <td className="str">{props.ability.abr}</td>
      <td className="num">{calculateAbilityMod(props.ability.score)}</td>
      <td className="check">
        <input
          type="checkbox"
          checked={props.prof && "checked"}
          readOnly={true}
        />
      </td>
    </tr>
  );
}

function getTopMatter() {
  return {
    class: "Warlock",
    level: 6,
    gender: "Male",
    race: "Pallid Elf",
    background: "Sage (Researcher)",
  };
}

function getStats() {
  return [
    {
      name: "Proficiency Bonus",
      value: 3,
    },
    {
      name: "Inspiration",
      value: 0,
    },
    {
      name: "Armor Class",
      value: 13,
    },
    {
      name: "Initiative",
      value: 2,
    },
    {
      name: "Hit Points",
      value: "45/45",
    },
  ];
}

function getAbilities() {
  return {
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
}

function calculateAbilityMod(score) {
  let mod = Math.floor((score - 10) / 2);
  return (mod < 0 ? "" : "+") + mod;
}

export default QuantatativeStats;
