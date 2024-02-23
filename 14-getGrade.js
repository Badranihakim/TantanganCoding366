function getGrade (...s) {
    let a = Math.round(s.reduce((a,b)=> a + b)) / s.length
    const grade = a >= 90 ? 'A' : a >= 80 ? 'B' : a >=70 ? 'C' : a >=60 ? 'D' : 'F'
    // (average >= 90 && average <=100) ? 'A' :
    // (average >= 80 && average <90) ? 'B' :
    // (average >= 70 && average <80) ? 'C' :
    // (average >= 60 && average <70) ? 'D' :
    // (average >= 0 && average <60) ? 'F' :
    // null
    return grade
}

//* I'M VERY LIKE THIS ONE

console.log(getGrade(82,85,87));