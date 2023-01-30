const findSum = function (array) {
  return array.reduce((a, b) => a + b);
};

const findFrequency = function (array) {
  let most = 0;
  let mostID = "";
  let least = 999;
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
  // your code here - don't forget to return a boolean!
};

const largestPair = function (array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function (str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function (str) {
  // your code here - don't forget to return a number!
};
