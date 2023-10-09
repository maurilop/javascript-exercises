const fibonacci = function (num) {
  const a = [1, 1];
  if (num < 1) {
    return "OOPS";
  } else if (num <= 2) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      a[i] = a[i - 1] + a[i - 2];
    }
    return a[num - 1];
  }
};

/*
F(n) = F(n-1) + F(n-2)


*/

// Do not edit below this line
module.exports = fibonacci;
