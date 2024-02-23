// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     getAverage = marks => Math.floor(marks.reduce((a,b)=> a + b)) / marks.length
// }

getAverage = marks => Math.round(marks.reduce((a,b)=> a + b)/ marks.length) 

console.log(getAverage([1,1,1,1,1,1,1,2]));