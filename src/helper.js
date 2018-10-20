const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
}

const generateProposedAnswer = (value1, value2, value3) => {
  return Math.floor(Math.random() * 3) + value1 + value2 + value3;
}

const calculateSum = (value1, value2, value3) => {
  return value1 + value2 + value3;
}

const compareNumbers = (number1, number2) => {
  return number1 === number2;
}

module.exports.generateRandomNumber = generateRandomNumber;
module.exports.generateProposedAnswer = generateProposedAnswer;
module.exports.calculateSum = calculateSum;
module.exports.compareNumbers = compareNumbers;
