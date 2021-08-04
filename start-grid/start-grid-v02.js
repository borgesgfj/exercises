const startArray = [1, 2, 3, 4, 5]
const finishArray = [3, 1, 2, 5, 4]

function createPatialGrid (array, instantPosition, finalPosition) {
  const element = array[instantPosition]
  array.splice(instantPosition,1)
  array.splice(finalPosition, 0, element)
}

function calculateOvrtkngs (partialPositArray, finalPositArray) {
  let num_ovtk = 0
  for (let i = 0; i < finalPositArray.length; i++) {
    const competitorInstantPosit = partialPositArray.indexOf(finalPositArray[i])
    if (i < competitorInstantPosit) {
      num_ovtk += (competitorInstantPosit - i)
      createPatialGrid(partialPositArray, competitorInstantPosit, i)
    }
  }
  return num_ovtk
}

console.log(`We had at leat ${calculateOvrtkngs(startArray, finishArray)} overtakes`)
