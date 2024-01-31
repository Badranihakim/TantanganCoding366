//* cara waktu itu gue

const l = 'Player 1 won!'
const w = 'Player 2 won!'

const rps = (p1,p2) => {
    if (p2 == p1) return 'Draw!';
    if (p2 == 'rock') return (p1=='scissors') ? w : l ;
    if (p2 == 'scissors') return (p1=='rock') ? l : w ;
    if (p2 == 'paper') return (p1=='scissors') ? l : w ;
}

//* cara wpu

// const rps = (p1, p2) => {
//     const rules = {
//         rock: 'scissors',
//         scissors: 'paper',
//         paper: 'rock',
//     };

//     return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`;
// };

console.log(rps('Rock', 'paper'));