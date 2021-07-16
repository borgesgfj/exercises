const letters = ["A", "B", "C", "D", "E"];
const test1 = ["1739085624BCEAEB", "9075846231ECCBDA"];
const association1 = {};
const association2 = {};
let c = 0;
for (const item of letters) {
  const correspondentNumbers_association1 = new Set();
  const correspondentNumbers_association2 = new Set();
  correspondentNumbers_association1.add(test1[0][c]);
  correspondentNumbers_association1.add(test1[0][c + 1]);
  correspondentNumbers_association2.add(test1[1][c]);
  correspondentNumbers_association2.add(test1[1][c + 1]);
  association1[item] = correspondentNumbers_association1;
  association2[item] = correspondentNumbers_association2;
  c += 2;
}

function intersection(set1, set2) {
  for (const num of set1) {
    if (set2.has(num)) {
      return num;
    }
  }
}

let password = "";
for (let i = 10; i < 16; i++) {
  password +=
    intersection(association1[test1[0][i]], association2[test1[1][i]]) + " ";
}
console.log(`Teste 1\nA senha é: ${password}`);
