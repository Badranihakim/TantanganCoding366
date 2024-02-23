// function arrayPlusArray(arr1, arr2) {
//     let total = 0
//     for(let i = 0; i < arr1.length; i++){
//         total += arr1[i]
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         total += arr2[i];
//     }
//     return total
// }

// function arrayPlusArray(arr1, arr2) {
//     let total = 0
//     for(let i = 0; i < arguments.length; i++){
//         for(let z = 0; z < arguments[i].length; z++){
//             total += arguments[i][z]
//         }
//     }
//     return total
// }

// function arrayPlusArray(arr1, arr2) {
//     return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
// }

const arrayPlusArray = (arr1,arr2) => [...arr1, ...arr2].reduce((acc,curr) => acc+curr)

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
