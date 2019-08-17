function palindrome(str) {
  let strUpperCase = str.toLowerCase();
  let regex = /[\W_]/g;
  let strReplaced = strUpperCase.replace(regex, "");
  let strArr = strReplaced.split("");
  let strArrReverse = strArr.reverse();
  if (strArrReverse.join('') === strReplaced) {
    return true;
  }
  return false;
}

console.log(palindrome("0_0 (: /- :) 0-0"));
