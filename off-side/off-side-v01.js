const atk_pos = [200, 400]
const defd_pos = [200, 1000]
const numericalOrdering = (a, b) => a-b
atk_pos.sort(numericalOrdering)
defd_pos.sort(numericalOrdering)
function isOffSide (attakers, defenders) {
  if (attakers[0] < defenders[1]) {
    return true
  } else {
    return false
  }
}
console.log(`Is in off-side position?\n${isOffSide(atk_pos, defd_pos) ? "Y" : "N"}`)