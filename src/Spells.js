import React from "react";

class Spells extends React.Component {
  // TODO: Populate list of spells range, descriptions, etc from an API

  state = {
    spells: {},
  };

  componentDidMount() {
    // TODO: Retrieve spells from API
    fetch(process.env.PUBLIC_URL + "/data/spells.json")
      .then((res) => res.json())
      .then((spells) => this.setState({ spells: spells }));
  }

  render() {
    return (
      <div id="spells">
        <h3>Spells</h3>
        <i>
          {this.props.charInfo.spellSlots} spell slots, regained on short rest
        </i>
        <SpellsList spells={this.state.spells} />
      </div>
    );
  }
}

function SpellsList(props) {
  return (
    <ul>
      {Object.entries(props.spells).map(([level, levelSpells]) => {
        return (
          <li key={level}>
            <b>Level {level}</b>
            <ul>
              {levelSpells.map((spell) => {
                return <Spell spell={spell} key={spell.name} />;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function Spell(props) {
  return (
    <li>
      {props.spell.ritual && <i>(Ritual)</i>} {props.spell.name}{" "}
      {props.spell.source !== undefined && <i>({props.spell.source})</i>}
    </li>
  );
}

export default Spells;
