// Write your tests here!
const expect = require('chai').expect
const {caesar} = require("../src/caesar")

describe("caesar() subission tests written by Matthew Murray", () => {

  describe("error handling", () => {

    it("should return false for shift of 0", () => {
const expected = false;
const actual = caesar("thinkful",0);
      expect(actual).to.equal(expected);
    });
    
    it("should return false for shift > 25", () => {
const expected = false;
const actual = caesar("thinkful",26);
      expect(actual).to.equal(expected);
    });
    
    it("should return false for shift < -25", () => {
const expected = false;
const actual = caesar("thinkful",-26);
      expect(actual).to.equal(expected);
    });
  });

  describe("happy path", () => {

    describe("encode", () => {
      
      it("should encode for positive shift", () => {
const expected = "wklqnixo";
const actual = caesar("thinkful",3);
      expect(actual).to.equal(expected);
      });
      
      it("should encode for negative shift", () => {
const expected = "qefkhcri";
const actual = caesar("thinkful",-3);
      expect(actual).to.equal(expected);
      });
    });
    
   describe("decode", () => {
     
      it("should decode for positive shift", () => {
const expected = "thinkful";
const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
      });
     
      it("should decode for negative shift", () => {
const expected = "thinkful";
const actual = caesar("qefkhcri", -3, false);
      expect(actual).to.equal(expected);
      });
    });
  });
  
  describe("edge cases", () => {
    
    describe("encode", () => {
      
      it("should ignore capital letters", () => {
const expected = "wklqnixo";
const actual = caesar("ThInKfUl",3);
      expect(actual).to.equal(expected);
      });
      
      it("should maintain spaces and other nonalphabetic symbols in the message", () => {
const expected = "bpqa qa i amkzmb umaaiom!";
const actual = caesar("This is a secret message!", 8);
      expect(actual).to.equal(expected);
      });
      
      it("should appropriately wrap shift at the edge of the alphabet", () => {
const expected = "cheud";
const actual = caesar("zebra",3);
      expect(actual).to.equal(expected);
      });
    });
    
      describe("decode", () => {     
        
      it("should ignore capital letters", () => {
const expected = "thinkful";
const actual = caesar("WkLqNiXo",3,false);
      expect(actual).to.equal(expected);
      });
        
      it("should maintain spaces and other nonalphabetic symbols in the message", () => {
 const expected = "this is a secret message!";
const actual = caesar("BPQA qa i amkzmb umaaiom!", 8,false);
      expect(actual).to.equal(expected);
      });
        
      it("should appropriately wrap shift at the edge of the alphabet", () => {
const expected = "wbyox";
const actual = caesar("zebra",-3);
      expect(actual).to.equal(expected);
      });
    });
  });
});
  