// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (distanceToPump/mpg <= fuelLeft){
//         return true
//     } else {
//         return false
//     }
// };

//! oneLiner 

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump/mpg <= fuelLeft;

console.log(zeroFuel(50,25,3));