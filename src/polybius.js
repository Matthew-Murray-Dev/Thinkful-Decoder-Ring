// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input = null, encode = true) {
//initial check for legitimacy of argument values 
  if (input === null || (encode === false && input.split(" ").join("").length % 2 !== 0)) { return false };
//generate sorted alphabet array
  let aThroughZ = [...Array(26)].map((e, i) => (i + 10).toString(36));
//generate polybiusSquare Coordinate array
  let polybiusSquare = [];
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
      //enable both I and J from the Polybius Square to return 42
      if (j === 4 && i === 2) { polybiusSquare.push(`${j}${i}`) };
      polybiusSquare.push(`${j}${i}`);
    };
  };
 //initialize PolybiusSquare Coordinate Conversion Object
  let conversionObject = { " ": " " };
  let i = 0;
  if (encode === true) {
    //map letters to keys and coordinates to keypairs
    aThroughZ.forEach((letter) => { conversionObject[letter] = polybiusSquare[i]; i++; });
    //convert to LowerCase, split, map value using conversionObject to translate message, join
    return input.toLowerCase().split("").map((item) => conversionObject[item]).join("");
  }
  else {
     //accout for "(i/j)" conversion when decoding
     aThroughZ.push("(i/j)");
     polybiusSquare.push("42");
     //map letters to keys and coordinates to keypairs
    polybiusSquare.forEach((letter) => { conversionObject[letter] = aThroughZ[i]; i++; });
//convert to LowerCase, split(" ") by space, map every two characters, map value using conversionObject to translate message, join("") (this joins each pair of characters), join(" ") (this joins each array of (now joined) pairs of characters which were previously separated by a space)
    return input.toLowerCase().split(" ").map((entry) => entry.match(/(..)/g)).map((word) => word.map((duo) => conversionObject[duo]).join("")).join(" ");
  };
};

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
