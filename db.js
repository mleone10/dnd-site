import {Character, Abilities} from './character.js'

export default class Database {
    constructor() {
    }

    getCharacter() {
        return new Character(
            new Abilities(12, 10,12, 14, 13, 8)
        )
    }
}
