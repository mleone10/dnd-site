import './character'

var db = {
    getCharacter: function() {
        return new character.Character(new character.Abilities(12, 10,12, 14, 13, 8))
    }
}
