import React from "react";

class QuantatativeStats extends React.Component {
  render() {
    return (
      <div class="flex-container">
        <div class="flex-item" id="overview">
          <TopMatter content={getTopMatter()} />
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
        <b>{props.content.class} {props.content.level}</b>
      </p>
      <p>
        <b>{props.content.gender} {props.content.race}</b>
      </p>
      <p>
        <b>{props.content.background}</b>
      </p>
    </div>
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

export default QuantatativeStats;
