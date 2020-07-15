import React from 'react';

class Abilities extends React.Component {
    capitalize(key) {
        return key.charAt(0).toUpperCase() + key.slice(1)
    }

    render() {
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
            {Object.keys(this.props.details.abilities).map((key, value) => {
                return (
                    <tr>
                    <td class="str">{this.capitalize(key)}</td>
                    <td class="num">{this.props.details.abilities[key].score}</td>
                    <td class="num">{this.props.details.abilities[key].mod}</td>
                    <td class="check"><input type="checkbox" disabled={true} checked={this.props.details.abilities[key].save} /></td>
                    </tr>
                )
            })}
            </table>
            </div>
        )
    }
}

export default Abilities
