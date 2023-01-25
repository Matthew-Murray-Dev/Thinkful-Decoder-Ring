// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input = null, shift = 0, encode = true) {
//initial check for legitimacy of argument values
  if (input === null || shift === 0 || Math.abs(shift)>25) {
    return false
  }
//account for encode/decode and convert shift to right shift
  if (encode === false) { shift *= -1 }
  if (shift < 0) { shift = 26 + shift }
//convert to lowerCase, separate by letter. for each: replace with unicode equivalent, modify if unicode equivalent of [a-z] by shift value (mod function handles wrapping at edge of alphabet), convert back to character and push. Join once complete. 
  return input.toLowerCase().split("").map((letter) => letter.charCodeAt(0)).map((item) => {
    if (item > 96 && item < 123) {
      return String.fromCharCode((item - 97 + shift) % 26 + 97)
    }
    else {
      return String.fromCharCode(item)
    }
  }).join("");
}

  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
