import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const LETHERYL = {"name": "Letheryl",
    "race": "Pallid Elf",
    "gender": "Male",
    "background": "Sage (Researcher)",
    "flavortext": "\"No, I can't say this is exactly my 'comfort zone' - we departed that happy Grove quite some time ago. But I suppose it's all fallen on me, hmm? 'An elf bleeds the same as anyone,' as they say, so I've got quite a weight on my shoulders...\"",
    "classes": [
        {
            "name": "Warlock",
            "levels": 3
        }
    ],
     "stats": {
        "proficiencybonus": 2,
        "inspiration": 0,
        "armorclass": 13,
        "initiative": 2,
        "hitpoints": {
            "current": 24,
            "max": 24
        }
    },
    "abilities": {
        "strength": {
            "score": 9,
            "mod": -1,
            "save": false
        },
        "constitution": {
            "score": 14,
            "mod": 2,
            "save": false
        },
        "dexterity": {
            "score": 14,
            "mod": 2,
            "save": false
        },
        "wisdom": {
            "score": 13,
            "mod": 1,
            "save": true
        },
        "intelligence": {
            "score": 10,
            "mod": 0,
            "save": false
        },
        "charisma": {
            "score": 16,
            "mod": 3,
            "save": true
        }
    },
    "skillproficiencies": {
        "acrobatics": false,
        "animalhandling": false,
        "arcana": true,
        "athletics": false,
        "deception": true,
        "history": true,
        "insight": false,
        "intimidation": true,
        "investigation": false,
        "medicine": false,
        "nature": false,
        "perception": true,
        "performance": false,
        "persuasion": false,
        "religion": false,
        "sleightofhand": false,
        "stealth": false,
        "survival": false
    },
}

ReactDOM.render(
    <React.StrictMode>
    <App characterDetails={LETHERYL} />
    </React.StrictMode>,
    document.getElementById('root')
);

