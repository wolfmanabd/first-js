// // if ( 1 !== 1) {
// //     console.log(`It's ture`);
// // }

// // example 2 

// // let rating = 5;

// // if (rating === 3) {
// //     console.log("YOU ARE A SUPERSTAR!");
// // } 
// // else if (rating === 2) {
// //     console.log('MEETS EXPECTATIONS');
// // }
// // else if (rating === 1) {
// //     console.log('NEEDS IMPROVMENT');
// // }
// // else {
// //     console.log('INVALID RATING!');
// // }


// // // Example 3 

// // let num = 37;

// // if (num % 2 !== 0) {
// //     console.log("ODD NUMBER!")
// // }

// // Example 4 

// // let highScore = 1470;
// // let userScore = 1600;

// // if (userScore >= highScore) {
// //     console.log(`Congrat you have the new high score of ${userScore}`);
// //     highScore = userScore;
// // }
// // else {
// //     console.log(`Good game you did not beat the high score of ${highScore}`);
// // }


// // Example 5 

// // let password = 'helloi';

// // if (password.length >= 6) {
// //     if (password.indexOf (' ') === -1) {
// //         console.log('Valid Password')
// //     }
// //     else {
// //         console.log('Password long enough, but cannot contain space');
// //     }
// // }
// // else {
// //     console.log('Passowrd must be longer');
// // }

// // Example 6 

// // let password = 'chicisansako';

// // if (password.length>= 8 && password.indexOf(' ') === -1) {
// //     console.log('VALID PASSWORD');
// // }
// // else {
// //     console.log('INVALID PASSWORD')
// // }

// // let age = 20;

// // if (age <= 6 || age >= 65) {
// //     console.log('YOU GET IN FOR FREE')
// // }
// // else {
// //     console.log('YOU MUST PAYYYY!')
// // }

// // for(let i = 1; i <= 10; i++) {
// //     console.log('Hello', i);
// // }


// // for(let num = 1; num <= 20; num++){
// //     console.log(`${num}X${num} = ${num * num}`);
// // }


// // function grumpus(){
// //     console.log('LEAVE ME ALONE')
// // }

// // grumpus()


// // function rollDie(){
// //     let roll = Math.floor(Math.random() * 6) + 1;
// //     console.log(`Rolled: ${roll}`);
// // }

// // function throwDice(numRolls) {
// //     for (let i = 0; i < numRolls; i++) {
// //         rollDie();
// //     } 
// // }


// // Write a function to find the average value in an array of numbers
// //avg([0,50]) //25
// //avg([75,76,80,95,100]) //85.2

// // function avg(arr) {
// //     let total = 0;
// //     //loop over each num
// //     for(let num of arr) {
// //         //sum them together
// //         total += num;
// //     }
// //     return total / arr.length;
// // }


// // function add(x, y) {
// //     return x + y;
// // }

// // function subtract(x, y) {
// //     return x - y;
// // }

// // function divide(x, y) {
// //     return x / y;
// // }

// // function mutiple(x, y) {
// //     return x * y;
// // }

// // const operations = [add, subtract, divide, mutiple];

// // const btn = document.querySelector('button');
// // btn.addEventListener('click', function() {
// //     alert("WHY DID YOU CLICK ME!!!??");
// // })

// // function multiply(x, y = 1) {
// //     return x * y; 
// // }

// // const greet = (person, greeting = 'hi') => {
// //     console.log(`${greeting}, ${person}!`)
// // }

// // const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant suttlefish'];

// // const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
// // const cnidaria = ['fire coral', 'moon jelly'];

// // const mullusca = [...cephalopods, ...gastropods]

// // const annoyer = {
// //     phrases: ['literallly', 'cry cry', 'stop', 'Totes', 'Yolo', `Won't stop`],
// //     pickPhrase() {
// //         const {
// //             phrases
// //         } = this;
// //         const idx = Math.floor(Math.random() * phrases.length);
// //         return phrases[idx]
// //     },
// //     start() {
// //         setInterval(() => {
// //             console.log(this.pickPhrase())
// //         }, 3000)
// //     } 
// // }

// function makeDeck() {
//     const deck = [];
//     const suits = [`Hearts`, `Diamond`, `Spades`, `Clus`];
//     const values = '2,3,4,5,6,7,8,9,10,J,K,Q,A';
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }

const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');
    for (let game of games) {
        const {homeTeam, awayTeam} = game;
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game);
        gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
        ulParent.appendChild(gameLi);
    }
    return ulParent;
};

const isWinner = ({ homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner
}
const getScoreLine = ({ homeTeam, awayTeam}) => {
    const {team: hTeam, points: hPoints} = homeTeam;
    const {team: aTeam, points: aPoints} = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
        // const scoreLine = `${aPoints}-${hPoints}`;
    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`
    }
    return `${teamNames} ${scoreLine}`;
}

const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);