// cara 1 (barbar || If&Else)

// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i=0; i< dna.length; i++){
//         // if(dna[i] === 'T'){
//         //     rna += 'U'
//         // }else {
//         //     rna += dna[i]
//         // }
//         rna += dna[i] === 'T' ? 'U' : dna[i]
//     }
//     return rna
// }

//* cara 2 (split, map, join)

// function DNAtoRNA(dna){
//     return dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('')
// }

//* cara 3 (oneLiner)

// const DNAtoRNA=(dna)=>dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('')

//! cara 4 (REGEX||replace)

// const DNAtoRNA=(dna)=>dna.replace(/T/g,'U')
// const DNAtoRNA=(dna)=>dna.replaceAll('T','U')

//? cara 5 (split, join || cerdik)

const DNAtoRNA=(dna)=>dna.split('T').join('U')


console.log(DNAtoRNA('GCATT'));