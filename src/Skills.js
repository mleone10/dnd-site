import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div id="skills" class="flex-item">
            <h3>Skills</h3>
            <table>
            <tr>
            <th>Skill</th>
            <th>Ability</th>
            <th>Mod</th>
            <th>Prof</th>
            </tr>
            <tr>
            <td class="str">Acrobatics</td>
            <td class="str">Dex</td>
            <td class="num">+2</td>
            <td class="check"><input type="checkbox" onclick="return false;" /></td>
            </tr>
            </table>
            </div>
        )
    }
}

export default Skills
