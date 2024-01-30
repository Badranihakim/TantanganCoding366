//* cara 1 (Pengkondisian If&Else)

// function hero(bullets, dragons){
//     if (bullets/2 >= dragons){
//         return true
//     }else{
//         return false
//     }
// }

//* cara 2 (ternary operator)

// function hero(bullets,dragons){
//     // return (bullets /2 >= dragons) ? true : false
//     return (bullets /2 >= dragons)
//     // menghasilkan nilai truthy / falsy juga
// }

//* cara 3 (function expression)

const hero = (bullets,dragons) => bullets/2 >= dragons;

console.log(hero(10,5));