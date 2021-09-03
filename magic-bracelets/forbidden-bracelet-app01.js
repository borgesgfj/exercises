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
    forbiddenSequence: "haskell",
    braceletSequence: "lleksah",
  },
  {
    forbiddenSequence: "isitfriday",
    braceletSequence: "ohnoitisnt",
  },
  {
    forbiddenSequence: "itsfriday",
    braceletSequence: "fridaygottagetdownonfriday",
  },
  {
    forbiddenSequence: "yyt",
    braceletSequence: "ttyttyttyytty",
  },
  {
    forbiddenSequence: "avava",
    braceletSequence: "av",
  },
];

function analysisOfCases(obejectCase) {
  const forbiddenSequenceLenght = obejectCase.forbiddenSequence.length;
  const braceletSequenceLenght = obejectCase.braceletSequence.length;
  let numOfRepetition = 2;
  if (braceletSequenceLenght < forbiddenSequenceLenght) {
    numOfRepetition =
      Math.floor(forbiddenSequenceLenght / braceletSequenceLenght) +
      (forbiddenSequenceLenght % braceletSequenceLenght);
  }
  const circularSequence = obejectCase.braceletSequence.repeat(numOfRepetition);
  const inverseSequence = circularSequence.split("").reverse("").join("");
  const isForbidden =
    circularSequence.includes(obejectCase.forbiddenSequence) ||
    inverseSequence.includes(obejectCase.forbiddenSequence)
      ? "S"
      : "N";
  return isForbidden;
}

for (let i = 0; i < testCases.length; i++) {
  console.log(testCases[i].braceletSequence);
  console.log(analysisOfCases(testCases[i]));
}
