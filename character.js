var character() = {
    class Character {
        constructor() {
        }

        setAbilities(abilities) {
            this.abilities = abilities
        }
    }

    class Abilities {
        constructor(str, con, dex, wis, intel, cha) {
            this.str = str
            this.con = con
            this.dex = dex
            this.wis = wis
            this.intel = intel
            this.cha = cha
        }
    }
}

export default character
