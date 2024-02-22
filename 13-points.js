// function points(games){
//     let result = 0
//     for (let i=0; i<games.length; i++){
//         if (games[i][0] > games[i][0]){
//             result += 3
//         }else if (games[i][0] === games[i][0]){
//             result += 1
//         }
//     }
//     return result;
// }

//* HIGHER ORDER FUNCTION REDUCE

function points(games){
    const result = games.reduce((a,[x,_,y])=>a + (x > y ? 3 : x == y),0)
    return result;
}



console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));