const start_position = [3, 1, 2, 5, 4]
const finish_position = [5, 3, 2, 1, 4]
const numOfparticipants = start_position.length

function calculateOvrtkngs (initial_positions, final_positions) {
  let num_ovtk = 0
  for (let i = 0; i < numOfparticipants; i++) {
    for (let j = i+1; j < numOfparticipants; j++) {
      if (initial_positions.indexOf(final_positions[i]) > initial_positions.indexOf(final_positions[j])){
        num_ovtk++
      }
    }
  }
  return num_ovtk
}

console.log(calculateOvrtkngs(start_position, finish_position))