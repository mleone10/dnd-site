import React from "react";

class QuantatativeStats extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-item" id="overview">
          <TopMatter charInfo={this.props.charInfo} />
          <Stats
            abilities={this.props.abilities}
            charInfo={this.props.charInfo}
          />
          <Abilities abilities={this.props.abilities} />
        </div>
        <Skills
          abilities={this.props.abilities}
          skills={this.props.skillProf}
        />
      </div>
    );
  }
}

function TopMatter(props) {
  return (
    <div id="topmatter">
      <TopMatterItem
        value={props.charInfo.class + " " + props.charInfo.level}
      />
      <TopMatterItem
        value={props.charInfo.gender + " " + props.charInfo.race}
      />
      <TopMatterItem value={props.charInfo.background} />
    </div>
  );
}

function TopMatterItem(props) {
  return (
    <p>
      <b>{props.value}</b>
    </p>
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
          <Stat
            name="Proficiency Bonus"
            value={prependSignChar(props.charInfo.profBonus)}
          />
          <Stat name="Inspiration" value={0} />
          <Stat
            name="Armor Class"
            value={11 + calculateAbilityMod(props.abilities.dex.score)}
          />
          <Stat
            name="Initiative"
            value={prependSignChar(
              calculateAbilityMod(props.abilities.dex.score)
            )}
          />
          <Stat
            name="Hit Points"
            value={props.charInfo.hpCur + "/" + props.charInfo.hpMax}
          />
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
      <td className="num">
        {prependSignChar(calculateAbilityMod(props.ability.score))}
      </td>
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
          <Skill
            name="Acrobatics"
            ability={props.abilities.dex}
            prof={props.skills.acrobatics}
          />
          <Skill
            name="Animal Handling"
            ability={props.abilities.wis}
            prof={props.skills.animalhandling}
          />
          <Skill
            name="Arcana"
            ability={props.abilities.int}
            prof={props.skills.arcana}
          />
          <Skill
            name="Athletics"
            ability={props.abilities.str}
            prof={props.skills.athletics}
          />
          <Skill
            name="Deception"
            ability={props.abilities.cha}
            prof={props.skills.deception}
          />
          <Skill
            name="History"
            ability={props.abilities.int}
            prof={props.skills.history}
          />
          <Skill
            name="Insight"
            ability={props.abilities.wis}
            prof={props.skills.insight}
          />
          <Skill
            name="Intimidation"
            ability={props.abilities.cha}
            prof={props.skills.intimidation}
          />
          <Skill
            name="Investigation"
            ability={props.abilities.int}
            prof={props.skills.investigation}
          />
          <Skill
            name="Medicine"
            ability={props.abilities.wis}
            prof={props.skills.medicine}
          />
          <Skill
            name="Nature"
            ability={props.abilities.int}
            prof={props.skills.nature}
          />
          <Skill
            name="Perception"
            ability={props.abilities.wis}
            prof={props.skills.perception}
          />
          <Skill
            name="Performance"
            ability={props.abilities.cha}
            prof={props.skills.performance}
          />
          <Skill
            name="Persuasion"
            ability={props.abilities.cha}
            prof={props.skills.persuasion}
          />
          <Skill
            name="Religion"
            ability={props.abilities.int}
            prof={props.skills.religion}
          />
          <Skill
            name="Sleight of Hand"
            ability={props.abilities.dex}
            prof={props.skills.sleightofhand}
          />
          <Skill
            name="Stealth"
            ability={props.abilities.dex}
            prof={props.skills.stealth}
          />
          <Skill
            name="Survival"
            ability={props.abilities.wis}
            prof={props.skills.survival}
          />
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
      <td className="num">
        {prependSignChar(calculateAbilityMod(props.ability.score))}
      </td>
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

function calculateAbilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function prependSignChar(n) {
  return (n < 0 ? "" : "+") + n;
}

export default QuantatativeStats;
