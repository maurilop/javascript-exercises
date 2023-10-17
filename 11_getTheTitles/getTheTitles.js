const getTheTitles = function (a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr[i] = a[i].title;
  }
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
