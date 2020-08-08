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
          profBonus={this.props.charInfo.profBonus}
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
          <Stat
            name="Armor Class"
            value={
              props.charInfo.baseAC +
              calculateAbilityMod(props.abilities.dex.score)
            }
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
        <StaticCheck checked={props.ability.save} />
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
            <th>Adv</th>
            <th>Roll</th>
          </tr>
          {Object.entries(props.skills).map(([key, skill]) => (
            <Skill key={key} ability={props.abilities[skill.modKey]} skill={skill} profBonus={props.profBonus} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Skill(props) {
  return (
    <tr>
      <td className="str">{props.skill.name}</td>
      <td className="str">{props.ability.abr}</td>
      <td className="num">
        {prependSignChar(calculateAbilityMod(props.ability.score))}
      </td>
      <td className="check">
        <StaticCheck checked={props.skill.prof} />
      </td>
      <td className="check">
        <StaticCheck checked={props.skill.adv} />
      </td>
      <td className="check">
        <RollButton initLabel="#" d={20} mod={calculateAbilityMod(props.ability.score) + (props.skill.prof ? props.profBonus : 0)} adv={props.skill.adv} />
      </td>
    </tr>
  );
}

function StaticCheck(props) {
  return (
    <input
      type="checkbox"
      checked={props.checked && "checked"}
      readOnly={true}
    />
  );
}

class RollButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.initLabel,
      // TODO: Figure out styling for button; clicked/unclicked classes?
      style: {}
    };
  }

  handleClick = () => {
    console.info(`Rolling ${this.props.d} sided die ${this.props.adv ? "with" : "without"} advantage, mod of ${this.props.mod}`)
    let result = (this.props.adv ? Math.max(this.roll(), this.roll()) : this.roll()) + this.props.mod
    console.info(`Final result of die roll: ${result}`)
    this.setState(() => ({ label: result }));
  };

  roll = () => {
    let r = Math.ceil(Math.random()*this.props.d)
    console.info(`Rolled ${this.props.d} sided die, got ${r}`)
    if (r === 20) {
      this.setState(() => ({style: {backgroundColor: "#ffe03a"}}))
    } else if (r === 1) {
      this.setState(() => ({style: {backgroundColor: "#ff3a3a"}}))
    } else {
      this.setState(() => ({style: {}}))
    }
    return r
  }

  render() {
    return <button onClick={this.handleClick} style={this.state.style}>{this.state.label}</button>;
  }
}

function calculateAbilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function prependSignChar(n) {
  return (n < 0 ? "" : "+") + n;
}

export default QuantatativeStats;
