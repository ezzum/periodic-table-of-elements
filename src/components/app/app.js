import React, {Component} from 'react';

import Table from '../table/table';
import './app.scss';

class App extends Component {

    state = {
        db: {
          "elements": [
            {
              "symbol": "H",
              "number": 1,
              "name": "водород",
              "atomicMass": 1.007,
              "column": 1,
              "row": 1
            },
            {
              "symbol": "He",
              "number": 2,
              "name": "гелий",
              "atomicMass": 4.002,
              "column": 18,
              "row": 1
            },
            {
              "symbol": "Li",
              "number": 3,
              "name": "литий",
              "atomicMass": 6.941,
              "column": 1,
              "row": 2
            },
            {
              "symbol": "Be",
              "number": 4,
              "name": "берилий",
              "atomicMass": 9.012,
              "column": 2,
              "row": 2
            },
            {
              "symbol": "B",
              "number": 5,
              "name": "бор",
              "atomicMass": 10.811,
              "column": 13,
              "row": 2
            },
            {
              "symbol": "C",
              "number": 6,
              "name": "углерод",
              "atomicMass": 12.0107,
              "column": 14,
              "row": 2
            },
            {
              "symbol": "N",
              "number": 7,
              "name": "азот",
              "atomicMass": 14.0067,
              "column": 15,
              "row": 2
            },
            {
              "symbol": "O",
              "number": 8,
              "name": "кислород",
              "atomicMass": 15.9994,
              "column": 16,
              "row": 2
            },
            {
              "symbol": "F",
              "number": 9,
              "name": "фтор",
              "atomicMass": 18.998,
              "column": 17,
              "row": 2
            },
            {
              "symbol": "Ne",
              "number": 10,
              "name": "неон",
              "atomicMass": 20.1797,
              "column": 18,
              "row": 2
            },
            {
              "symbol": "Na",
              "number": 11,
              "name": "натрий",
              "atomicMass": 22.989,
              "column": 1,
              "row": 3
            },
            {
              "symbol": "Mg",
              "number": 12,
              "name": "магний",
              "atomicMass": 24.3050,
              "column": 2,
              "row": 3
            },
            {
              "symbol": "Al",
              "number": 13,
              "name": "алюминий",
              "atomicMass": 26.981,
              "column": 13,
              "row": 3
            },
            {
              "symbol": "Si",
              "number": 14,
              "name": "кремний",
              "atomicMass": 28.0855,
              "column": 14,
              "row": 3
            },
            {
              "symbol": "P",
              "number": 15,
              "name": "фосфор",
              "atomicMass": 30.973,
              "column": 15,
              "row": 3
            },
            {
              "symbol": "S",
              "number": 16,
              "name": "сера",
              "atomicMass": 32.065,
              "column": 16,
              "row": 3
            },
            {
              "symbol": "Cl",
              "number": 17,
              "name": "хлор",
              "atomicMass": 35.453,
              "column": 17,
              "row": 3
            },
            {
              "symbol": "Ar",
              "number": 18,
              "name": "аргон",
              "atomicMass": 39.948,
              "column": 18,
              "row": 3
            },
            {
              "symbol": "K",
              "name": "калий",
              "number": 19,
              "atomicMass": 39.0983,
              "column": 1,
              "row": 4
            },
            {
              "symbol": "Ca",
              "name": "кальций",
              "number": 20,
              "atomicMass": 40.078,
              "column": 2,
              "row": 4
            },
            {
              "symbol": "Sc",
              "name": "скандий",
              "number": 21,
              "atomicMass": 44.955,
              "column": 3,
              "row": 4
            },
            {
              "symbol": "Ti",
              "name": "титан",
              "number": 22,
              "atomicMass": 47.867,
              "column": 4,
              "row": 4
            },
            {
              "symbol": "V",
              "name": "ванадий",
              "number": 23,
              "atomicMass": 50.9415,
              "column": 5,
              "row": 4
            },
            {
              "symbol": "Cr",
              "name": "хром",
              "number": 24,
              "atomicMass": 51.996,
              "column": 6,
              "row": 4
            },
            {
              "symbol": "Mn",
              "name": "марганец",
              "number": 25,
              "atomicMass": 54.938,
              "column": 7,
              "row": 4
            },
            {
              "symbol": "Fe",
              "name": "железо",
              "number": 26,
              "atomicMass": 55.845,
              "column": 8,
              "row": 4
            },
            {
              "symbol": "Co",
              "name": "кобальт",
              "number": 27,
              "atomicMass": 58.933,
              "column": 9,
              "row": 4
            },
            {
              "symbol": "Ni",
              "name": "никель",
              "number": 28,
              "atomicMass": 58.6934,
              "column": 10,
              "row": 4
            },
            {
              "symbol": "Cu",
              "name": "медь",
              "number": 29,
              "atomicMass": 63.546,
              "column": 11,
              "row": 4
            },
            {
              "symbol": "Zn",
              "name": "цинк",
              "number": 30,
              "atomicMass": 65.38,
              "column": 12,
              "row": 4
            },
            {
              "symbol": "Ga",
              "name": "галий",
              "number": 31,
              "atomicMass": 69.723,
              "column": 13,
              "row": 4
            },
            {
              "symbol": "Ge",
              "name": "германий",
              "number": 32,
              "atomicMass": 72.630,
              "column": 14,
              "row": 4
            },
            {
              "symbol": "As",
              "name": "мышьяк",
              "number": 33,
              "atomicMass": 74.922,
              "column": 15,
              "row": 4
            },
            {
              "symbol": "Se",
              "name": "селен",
              "number": 34,
              "atomicMass": 78.971,
              "column": 16,
              "row": 4
            },
            {
              "symbol": "Br",
              "name": "бром",
              "number": 35,
              "atomicMass": 79.904,
              "column": 17,
              "row": 4
            },
            {
              "symbol": "Kr",
              "name": "криптон",
              "number": 36,
              "atomicMass": 83.798,
              "column": 18,
              "row": 4
            },
            {
              "symbol": "Rb",
              "name": "рубидий",
              "number": 37,
              "atomicMass": 85.468,
              "column": 1,
              "row": 5
            },
            {
              "symbol": "Sr",
              "name": "стронций",
              "number": 38,
              "atomicMass": 87.62,
              "column": 2,
              "row": 5
            },
            {
              "symbol": "Y",
              "name": "иттрий",
              "number": 39,
              "atomicMass": 88.906,
              "column": 3,
              "row": 5
            },
            {
              "symbol": "Zr",
              "name": "цирконий",
              "number": 40,
              "atomicMass": 91.224,
              "column": 4,
              "row": 5
            },
            {
              "symbol": "Nb",
              "name": "ниобий",
              "number": 41,
              "atomicMass": 92.906,
              "column": 5,
              "row": 5
            },
            {
              "symbol": "Mo",
              "name": "молибден",
              "number": 42,
              "atomicMass": 95.95,
              "column": 6,
              "row": 5
            },
            {
              "symbol": "Tc",
              "name": "технеций",
              "number": 43,
              "atomicMass": "(98)",
              "column": 7,
              "row": 5
            },
            {
              "symbol": "Ru",
              "name": "рутений",
              "number": 44,
              "atomicMass": 101.07,
              "column": 8,
              "row": 5
            },
            {
              "symbol": "Rh",
              "name": "родий",
              "number": 45,
              "atomicMass": 102.91,
              "column": 9,
              "row": 5
            },
            {
              "symbol": "Pd",
              "name": "палладий",
              "number": 46,
              "atomicMass": 106.42,
              "column": 10,
              "row": 5
            },
            {
              "symbol": "Ag",
              "name": "серебро",
              "number": 47,
              "atomicMass": 107.87,
              "column": 11,
              "row": 5
            },
            {
              "symbol": "Cd",
              "name": "кадмий",
              "number": 48,
              "atomicMass": 112.41,
              "column": 12,
              "row": 5
            },
            {
              "symbol": "In",
              "name": "индий",
              "number": 49,
              "atomicMass": 114.82,
              "column": 13,
              "row": 5
            },
            {
              "symbol": "Sn",
              "name": "олово",
              "number": 50,
              "atomicMass": 118.71,
              "column": 14,
              "row": 5
            },
            {
              "symbol": "Sb",
              "name": "сурьма",
              "number": 51,
              "atomicMass": 121.76,
              "column": 15,
              "row": 5
            },
            {
              "symbol": "Te",
              "name": "теллур",
              "number": 52,
              "atomicMass": 127.60,
              "column": 16,
              "row": 5
            },
            {
              "symbol": "I",
              "name": "иод",
              "number": 53,
              "atomicMass": 126.90,
              "column": 17,
              "row": 5
            },
            {
              "symbol": "Xe",
              "name": "ксенон",
              "number": 54,
              "atomicMass": 131.29,
              "column": 18,
              "row": 5
            },
            {
              "symbol": "Cs",
              "name": "цезий",
              "number": 55,
              "atomicMass": 132.91,
              "column": 1,
              "row": 6
            },
            {
              "symbol": "Ba",
              "name": "барий",
              "number": 56,
              "atomicMass": 137.33,
              "column": 2,
              "row": 6
            },
            {
              "symbol": "57-71",
              "name": "",
              "number": "",
              "atomicMass": "",
              "column": 3,
              "row": 6
            },
            {
              "symbol": "Hf",
              "name": "гафний",
              "number": 72,
              "atomicMass": 178.49,
              "column": 4,
              "row": 6
            },
            {
              "symbol": "Ta",
              "name": "тантал",
              "number": 73,
              "atomicMass": 180.95,
              "column": 5,
              "row": 6
            },
            {
              "symbol": "W",
              "name": "вольфрам",
              "number": 74,
              "atomicMass": 183.84,
              "column": 6,
              "row": 6
            },
            {
              "symbol": "Re",
              "name": "рений",
              "number": 75,
              "atomicMass": 186.21,
              "column": 7,
              "row": 6
            },
            {
              "symbol": "Os",
              "name": "осмий",
              "number": 76,
              "atomicMass": 190.23,
              "column": 8,
              "row": 6
            },
            {
              "symbol": "Ir",
              "name": "иридий",
              "number": 77,
              "atomicMass": 192.22,
              "column": 9,
              "row": 6
            },
            {
              "symbol": "Pt",
              "name": "платина",
              "number": 78,
              "atomicMass": 195.08,
              "column": 10,
              "row": 6
            },
            {
              "symbol": "Au",
              "name": "золото",
              "number": 79,
              "atomicMass": 196.97,
              "column": 11,
              "row": 6
            },
            {
              "symbol": "Hq",
              "name": "ртуть",
              "number": 80,
              "atomicMass": 200.59,
              "column": 12,
              "row": 6
            },
            {
              "symbol": "Tl",
              "name": "таллий",
              "number": 81,
              "atomicMass": 204.38,
              "column": 13,
              "row": 6
            },
            {
              "symbol": "Pb",
              "name": "свинец",
              "number": 82,
              "atomicMass": 207.2,
              "column": 14,
              "row": 6
            },
            {
              "symbol": "Bi",
              "name": "висмут",
              "number": 83,
              "atomicMass": 208.98,
              "column": 15,
              "row": 6
            },
            {
              "symbol": "Po",
              "name": "полоний",
              "number": 84,
              "atomicMass": "(209)",
              "column": 16,
              "row": 6
            },
            {
              "symbol": "At",
              "name": "астат",
              "number": 85,
              "atomicMass": "(210)",
              "column": 17,
              "row": 6
            },
            {
              "symbol": "Rn",
              "name": "радон",
              "number": 86,
              "atomicMass": "(222)",
              "column": 18,
              "row": 6
            },
            {
              "symbol": "Fr",
              "name": "франций",
              "number": 87,
              "atomicMass": "(223)",
              "column": 1,
              "row": 7
            },
            {
              "symbol": "Ra",
              "name": "радий",
              "number": 88,
              "atomicMass": "(226)",
              "column": 2,
              "row": 7
            },
            {
              "symbol": "89-103",
              "name": "",
              "number": "",
              "atomicMass": "",
              "column": 3,
              "row": 7
            },
            {
              "symbol": "Rf",
              "name": "резерфодий",
              "number": 104,
              "atomicMass": "(267)",
              "column": 4,
              "row": 7
            },
            {
              "symbol": "Db",
              "name": "дубний",
              "number": 105,
              "atomicMass": "(268)",
              "column": 5,
              "row": 7
            },
            {
              "symbol": "Sg",
              "name": "сиборгий",
              "number": 106,
              "atomicMass": "(269)",
              "column": 6,
              "row": 7
            },
            {
              "symbol": "Bh",
              "name": "борий",
              "number": 107,
              "atomicMass": "(270)",
              "column": 7,
              "row": 7
            },
            {
              "symbol": "Hs",
              "name": "хассий",
              "number": 108,
              "atomicMass": "(277)",
              "column": 8,
              "row": 7
            },
            {
              "symbol": "Mt",
              "name": "мейтнерий",
              "number": 109,
              "atomicMass": "(278)",
              "column": 9,
              "row": 7
            },
            {
              "symbol": "Ds",
              "name": "дармштадий",
              "number": 110,
              "atomicMass": "(281)",
              "column": 10,
              "row": 7
            },
            {
              "symbol": "Rg",
              "name": "рентгений",
              "number": 111,
              "atomicMass": "(282)",
              "column": 11,
              "row": 7
            },
            {
              "symbol": "Cn",
              "name": "коперниций",
              "number": 112,
              "atomicMass": "(285)",
              "column": 12,
              "row": 7
            },
            {
              "symbol": "Nh",
              "name": "нихоний",
              "number": 113,
              "atomicMass": "(286)",
              "column": 13,
              "row": 7
            },
            {
              "symbol": "Fl",
              "name": "флеровий",
              "number": 114,
              "atomicMass": "(289)",
              "column": 14,
              "row": 7
            },
            {
              "symbol": "Mc",
              "name": "московий",
              "number": 115,
              "atomicMass": "(290)",
              "column": 15,
              "row": 7
            },
            {
              "symbol": "Lv",
              "name": "ливерморий",
              "number": 116,
              "atomicMass": "(293)",
              "column": 16,
              "row": 7
            },
            {
              "symbol": "Ts",
              "name": "теннессин",
              "number": 117,
              "atomicMass": "(294)",
              "column": 17,
              "row": 7
            },
            {
              "symbol": "Og",
              "name": "оганесон",
              "number": 117,
              "atomicMass": "(294)",
              "column": 18,
              "row": 7
            },
          ]
        },
        columnNumber: 18,
        rowNumber: 7,
        incrementStep: 1,
    }

    render() {
        const {elements} = this.state.db;

        return (
            <div className='app'>
                <h1 className='app__title'>Периодическая таблица элементов</h1>
                <Table elements = {elements}/>
            </div>
        );
    };
}

export default App;