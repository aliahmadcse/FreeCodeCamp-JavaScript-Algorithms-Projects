function rot13(str) {
  // LBH QVQ VG!
  const regex = /[A-Z]/;
  let newArr = [];
  for (let index = 0; index < str.length; index++) {
    if (str.charCodeAt(index) > "M".charCodeAt(0) && regex.test(str[index])) {
      newArr.push(String.fromCharCode(str.charCodeAt(index) - 13));
    } else if (regex.test(str[index])) {
      newArr.push(String.fromCharCode(str.charCodeAt(index) + 13));
    } else {
      newArr.push(str[index]);
    }
  }
  return newArr.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
