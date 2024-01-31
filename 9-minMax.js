//* cara 1 (barbar || pakai pengulangan lalu di berikan if jika index pertama nya lebih besar maka nilainya diganti menggunakan nilai terkecil nya dari index perulangan kali..)

// var min = function(list){
//     let minValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//     if (minValue > list[i]) {
//         minValue = list[i];
//         }
//     }
//     return minValue;
// }

// var max = function(list){
//     let maxValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//     if (maxValue < list[i]) {
//         maxValue = list[i];
//         }
//     }
//     return maxValue;
// }   

//* cara 2 (metode sort || jadi list nya di sortir dari situ kesitu begituu)

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

//! cara 3 (method bawaan js yaitu Math.min & Math.max lalu karena listnya berupa array maka di desctructuring terlebih dahulu menggunakan ... || cara favorit saya)

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));