function telephoneCheck(str) {
  // this based oon the all the test cases provided in the challenge
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(-|\s)?(\d{4}$)/;
  return regex.test(str);
}

console.log(telephoneCheck("1 (555) 555-5555"));
