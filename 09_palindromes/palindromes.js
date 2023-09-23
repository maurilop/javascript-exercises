const palindromes = function (s) {
  let fs = s.split(" ").join("").toLowerCase().replace(/\W/g, "");
  let sl = fs.length - 1;
  console.log(fs);
  for (i = 0; i <= sl; i++) {
    if (fs[i] == fs[sl - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
