const findTheOldest = function (arr) {
  let d = new Date();
  let currentYear = d.getFullYear();
  let arrSorted = arr.sort(function (a, b) {
    if (a.yearOfDeath == undefined) {
      a.yearOfDeath = currentYear;
    }
    if (b.yearOfDeath == undefined) {
      b.yearOfDeath = currentYear;
    }
    if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return arrSorted[0];

  /* const arrReduced = arr.reduce((total, people) => {
    return total + (people.yearOfDeath - people.yearOfBirth);
  }, 0); */
};

// Do not edit below this line
module.exports = findTheOldest;
