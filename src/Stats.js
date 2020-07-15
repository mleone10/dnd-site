import React from 'react';

class Stats extends React.Component {
    render() {
        return (
            <div id="stats">
            <h3>Stats</h3>
            <table>
            <tr>
            <th>Stat</th>
            <th>Value</th>
            </tr>
            <tr>
            <td class="str">Proficiency Bonus</td>
            <td class="num">{this.props.stats.proficiencybonus}</td>
            </tr>
            <tr>
            <td class="str">Inspiration</td>
            <td class="num">{this.props.stats.inspiration}</td>
            </tr>
            <tr>
            <td class="str">Armor Class</td>
            <td class="num">{this.props.stats.armorclass}</td>
            </tr>
            <tr>
            <td class="str">Initiative</td>
            <td class="num">{this.props.stats.initiative}</td>
            </tr>
            <tr>
            <td class="str">Hit Points</td>
            <td class="num">{this.props.stats.hitpoints.current}/{this.props.stats.hitpoints.max}</td>
            </tr>
            </table>
            </div>
        )
    }
}

export default Stats
