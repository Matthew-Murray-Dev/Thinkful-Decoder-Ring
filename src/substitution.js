// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input = null, alphabet = false, encode = true) {
//initial check for legitimacy of argument values    
  if (input === null || alphabet === false || alphabet.length !== 26 || /(.).*\1/.test(alphabet)===true) { return false };
    //    /(.).*\1/ is RegExp for if a string contains a duplicate character
    
//generate sorted alphabet array
  let aThroughZ = [...Array(26)].map((e, i) => (i + 10).toString(36));
//switch values of sorted alphabet array and substitution alphabet if encode === false
  if (encode === false) { let temp = alphabet; alphabet = aThroughZ.join(""); aThroughZ = temp.split(""); };
//generate object containing keys equivalent to sorted alphabet and keyPairs equivalent to substitution alphabet. (keys and keypairs are reversed if encode === false)
  let conversionObject = { " ": " " };
  let i = 0;
  aThroughZ.forEach((letter) => { conversionObject[letter] = alphabet[i]; i++; });
//split,map value using conversionObject to translate message,join
  return input.toLowerCase().split("").map((item) => conversionObject[item]).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
