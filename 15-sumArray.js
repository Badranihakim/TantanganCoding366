// function sumArray(array){
//     // Check if the input array is empty
//     if (array == null || !array.length) return 0

//     return array.sort((a,b) => a-b).slice(1,-1).reduce((a,c)=>a+c,0)
// }

sumArray = a => a ? a.sort((x,y) => x-y).slice(1,-1).reduce((a,c)=>a+c, 0) : 0

//* I like this

console.log(sumArray([ 0, 1, 6, 10, 10 ]));