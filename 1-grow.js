// Cara 1

function grow(x){
    let result = x[0]
    for (let i = 1; i < x.length; i++) {
        result *= x[i]
        
    }
    return x
}

console.log(grow([1,2,3,4]));

// cara 2 (higher order function reduce)

function grow2(y){
    const result2 = y.reduce((acc, curr) => acc*curr, 1)
    //fungsi reduce menerima 2 nilai yaitu, acc (nilai hasil) & curr (nilai ketika ditelusuri array)
    return result2
}

console.log(grow2([2,2,2,2,2,2]));

// cara 3 (one liner)

const grow3 = (z) => z.reduce((acc, curr) => acc * curr, 1)
// function expression yang menerima arrow function
// bisa juga ga pake initial value(1), karena nilai defaultnya 1
console.log(grow3([4,1,1,1,4]));