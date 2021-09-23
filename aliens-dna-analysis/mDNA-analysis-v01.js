const sample1 = ['AAAB', 'AABA', 'ABAA', 'BAAA']
/* Case 2 */
const sample2 = ['AAA', 'AAB', 'ABC']

function numberOfDiffrtSpecies (specimensArray) {
  const orderedSpeciesBasis = specimensArray.map((species) => species.split('').sort().join(''))
  const typesOfOrderedBasis = new Set(orderedSpeciesBasis)
  return typesOfOrderedBasis.size
}

console.log(numberOfDiffrtSpecies(sample1))
console.log(numberOfDiffrtSpecies(sample2))
