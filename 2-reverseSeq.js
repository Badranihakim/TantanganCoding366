//* Cara 1 

// const reverseSeq = n => {
//     const result = []
//     for(let i=n; i>=1; i--){
//         result.push(i)
//     }
//     return result;
// };

//* Cara 2 (menggunakan fill,map,reverse)
// reverseSeq = (n) => {
//     return [...Array(n)]
//     return Array(n).fill().map((el,i) => i+1).reverse();
// }

//* cara 3 (Dijadikan oneliner)
// const reverseSeq = (n) => [...Array(n)].map((el,i)=>i+1).reverse()

//* cara 4 (lebih efisien tidak menggunakan reverse)
const reverseSeq = (n) => [...Array(n)].map((el,i)=>n-i)
console.log(reverseSeq(5));