const atk_positions = [[700, 500], [400, 200], [530, 510, 490]]
const defd_positions = [[700, 500, 500], [1000, 200], [480, 470, 50, 310]]
const numericalOrdering = (a, b) => a-b
function isOffSide (attakers, defenders) {
  if (attakers[0] < defenders[1]) {
    return "Y"
  } else {
    return "N"
  }
}

for (let i = 0; i < atk_positions.length; i++) {
  atk_positions[i].sort(numericalOrdering)
  defd_positions[i].sort(numericalOrdering)
  console.log(`Situation ${i+1}: is in offside position? ${isOffSide(atk_positions[i],defd_positions[i])}`)
}
