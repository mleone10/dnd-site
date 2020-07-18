import React from "react";

class QuantatativeStats extends React.Component {
  render() {
    return (
      <div class="flex-container">
        <div class="flex-item" id="overview">
          <TopMatter content={getTopMatter()} />
          <Stats stats={getStats()} />
          <Abilities abilities={getAbilities()} />
        </div>
        <div class="flex-item" id="skills"></div>
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
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
        {props.stats.map((stat) => (
          <Stat name={stat.name} value={stat.value} />
        ))}
      </table>
    </div>
  );
}

function Stat(props) {
  return (
    <tr>
      <td class="str">{props.name}</td>
      <td class="num">{props.value}</td>
    </tr>
  );
}

function Abilities(props) {
  return (
    <div id="abilities">
      <h3>Abilities</h3>
      <table>
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
      </table>
    </div>
  );
}

function Ability(props) {
  return (
    <tr>
      <td class="str">{props.ability.name}</td>
      <td class="num">{props.ability.score}</td>
      <td class="num">{calculateAbilityMod(props.ability.score)}</td>
      <td class="check">
        <input
          type="checkbox"
          onclick="return false;"
          checked={props.ability.save && "checked"}
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
      score: 9,
      save: false,
    },
    con: {
      name: "Constitution",
      score: 14,
      save: false,
    },
    dex: {
      name: "Dexterity",
      score: 14,
      save: false,
    },
    wis: {
      name: "Wisdom",
      score: 13,
      save: true,
    },
    int: {
      name: "Intelligence",
      score: 10,
      save: false,
    },
    cha: {
      name: "Charisma",
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
