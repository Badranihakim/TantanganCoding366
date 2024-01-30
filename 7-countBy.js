// function countBy(x, n) {
//     let z = [];
//     for (let i=1; i <= n; i++){
//         z.push(i*x)
//     }
//     return z;
// }

// function countBy(x, n){
//     return [...Array(n)].map((el,i)=>(i+1)*x)
//     //* el = element
// }

const countBy = (x, n) =>[...Array(n)].map((_,i)=>(i+1)*x)
    //* el / _ = element

console.log(countBy(2,5));