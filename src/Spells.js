import React from "react";

const SPELLS = {
  cantrips: [
    {
      name: "Eldritch Blast",
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
      name: "Guidance",
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
  return <div></div>;
}

export default Spells;
