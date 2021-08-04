const start_array = [1, 2, 3, 4, 5]
const finish_array = [3, 1, 2, 5, 4]

function createPatialGrid (array, instantPosition, finalPosition) {
  const element = array[instantPosition]
  array.splice(instantPosition,1)
  array.splice(finalPosition, 0, element)
  return array
}

function calculateOvrtkngs (partialPosit_array, finalPosit_array) {
  let num_ovtk = 0
  const numOfparticipants = finalPosit_array.length
  for (let i = 0; i < numOfparticipants; i++) {
    const competitor = finalPosit_array[i]
    const competitor_instantPosit = partialPosit_array.indexOf(competitor)
    let posit_gain = competitor_instantPosit - i
    if (i < competitor_instantPosit) {
      num_ovtk += posit_gain
      createPatialGrid(partialPosit_array, competitor_instantPosit, i)
    }
  }
  return num_ovtk
}

console.log(`We had at leat ${calculateOvrtkngs(start_array, finish_array)} overtakes`)
