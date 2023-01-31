const findSum = function (array) {
  return array.reduce((a, b) => a + b);
};

const findFrequency = function (array) {
  let most = 0;
  let mostID = "";
  let least = array.length + 1;
  let leastID = "";
  const countElement = (element) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == element) {
        total++;
      }
    }
    if (total > most) {
      most = total;
      mostID = element;
    }
    if (total < least) {
      least = total;
      leastID = element;
    }
  };
  array.forEach((element) => countElement(element));
  const answer = { most: mostID, least: leastID };
  return answer;
};

const isPalindrome = function (str) {
  let reversed = str.split("").reverse().join("");
  return str.toLowerCase() == reversed.toLowerCase();
};

const largestPair = function (array) {
  let largestProduct = array[0] * array[1];
  for (let i = 0; i < array.length; i++) {
    testProduct = array[i] * array[i + 1];
    if (testProduct > largestProduct) largestProduct = testProduct;
  }
  return largestProduct;
};

const removeParenth = function (str) {
  const openIndex = str.indexOf("(");
  const closeIndex = str.indexOf(")");
  return str.substring(0, openIndex) + str.substring(closeIndex + 1);
};

const scoreScrabble = function (str) {
  const onePoints = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  const twoPoints = ["d", "g"];
  const threePoints = ["b", "c", "m", "p"];
  const fourPoints = ["f", "h", "v", "w", "y"];
  const fivePoints = ["k"];
  const eightPoints = ["j", "x"];
  const tenPoints = ["q", "z"];
  let pointTotal = 0;

  const pointCounter = (element) => {
    if (onePoints.includes(element)) {
      pointTotal += 1;
    } else if (twoPoints.includes(element)) {
      pointTotal += 2;
    } else if (threePoints.includes(element)) {
      pointTotal += 3;
    } else if (fourPoints.includes(element)) {
      pointTotal += 4;
    } else if (fivePoints.includes(element)) {
      pointTotal += 5;
    } else if (eightPoints.includes(element)) {
      pointTotal += 8;
    } else if (tenPoints.includes(element)) {
      pointTotal += 10;
    }
  };
  str.split("").forEach((element) => pointCounter(element));
  return pointTotal;
};
