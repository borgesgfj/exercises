const testCases = [
  {
    forbiddenSequence: "patapon",
    braceletSequence: "npatapatapatapo",
  },
  {
    forbiddenSequence: "ava",
    braceletSequence: "av",
  },
  {
    forbiddenSequence: 'haskell',
    braceletSequence: 'lleksah'
  },
  {
    forbiddenSequence: 'isitfriday',
    braceletSequence: 'ohnoitisnt'
  },
  {
    forbiddenSequence: 'itsfriday',
    braceletSequence: 'fridaygottagetdownonfriday'
  },
  {
    forbiddenSequence: 'yyt',
    braceletSequence: 'ttyttyttyytty'
  }
];

for (let i = 0; i < testCases.length; i++) {
  const sequence = testCases[i].braceletSequence.repeat(2);
  const inverseSequence = sequence.split("").reverse("").join("");
  const isForbidden =
    sequence.includes(testCases[i].forbiddenSequence) ||
    inverseSequence.includes(testCases[i].forbiddenSequence)
      ? "S"
      : "N";
  console.log(testCases[i].braceletSequence);
  console.log(isForbidden);
}

