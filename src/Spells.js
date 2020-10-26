import React from "react";

const SPELLS = {
  0: [
    {
      name: "Eldritch Blast",
    },
    {
      name: "Guidance",
    },
    {
      name: "Mage Hand",
    },
    {
      name: "Prestidigitation",
    },
    {
      name: "Light",
      source: "Blessing of the Moon Weaver",
    },
    {
      name: "Message",
      source: "Pact of the Tome",
    },
    {
      name: "Minor Illusion",
      source: "Pact of the Tome",
    },
    {
      name: "Shocking Grasp",
      source: "Pact of the Tome",
    },
  ],
  1: [
    { name: "Armor of Agathys" },
    { name: "Hellish Rebuke" },
    { name: "Hex" },
    {
      name: "Sleep",
      source: "Blessing of the Moon Weaver; once per long rest",
    },
    { name: "Detect Magic", ritual: true },
    { name: "Find Familiar", ritual: true },
  ],
  2: [
    { name: "Darkness" },
    { name: "Hold Person" },
    { name: "Misty Step" },
    {
      name: "Invisibility",
      source: "Blessing of the Moon Weaver; once per long rest",
    },
  ],
  3: [
    {
      name: "Counterspell",
    },
    { name: "Dispel Magic" },
    { name: "Fly" },
  ],
  4: [{ name: "Dimension Door" }],
};

function Spells(props) {
  // TODO: Display list of spells
  // TODO: Populate list of spells range, descriptions, etc from an API
  const spellsList = Object.entries(SPELLS).map(([level, levelSpells]) => {
    return (
      <li>
        Level {level}
        <ul>
          {levelSpells.map((spell) => {
            return (
              <li>
                {spell.ritual && <i>(Ritual)</i>} {spell.name}{" "}
                {spell.source !== undefined && <i>({spell.source})</i>}
              </li>
            );
          })}
        </ul>
      </li>
    );
  });
  return (
    <div id="spells">
      <h3>Spells</h3>
      <i>{props.charInfo.spellSlots} spell slots, regained on short rest</i>
      <ul>{spellsList}</ul>
    </div>
  );
}

export default Spells;
