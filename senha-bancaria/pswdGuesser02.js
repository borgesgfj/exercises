const letters = ["A", "B", "C", "D", "E"];
const test = ["1739085624BCEAEB", "9075846231ECCBDA"];

function creatSets(string, index) {
  const setsOfAssociation = new Set();
  setsOfAssociation.add(string[index]);
  setsOfAssociation.add(string[index + 1]);
  return setsOfAssociation;
}

function intersection(set1, set2) {
  for (const num of set1) {
    if (set2.has(num)) {
      return num;
    }
  }
}

for (let i = 0; i < test.length; i++) {
  let charIndex = 0;
  eval("association_" + i + "= {}");
  for (const item of letters) {
    eval(
      "association_" + i + "." + item + "=" + "creatSets(test[i], charIndex)"
    );
    charIndex += 2;
  }
}

let password = "";
for (let i = 10; i < 16; i++) {
  password +=
    intersection(association_0[test[0][i]], association_1[test[1][i]]) + " ";
}
console.log(`Teste 1\nA senha é: ${password}`);
