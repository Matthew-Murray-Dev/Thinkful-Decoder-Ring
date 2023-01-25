// Write your tests here!
const expect = require('chai').expect
const {polybius} = require("../src/polybius")

describe("polybius() submission tests written by Matthew Murray",() => {
  
  describe("error handling",() => {
    
    it("should return false for odd length of input while decoding",() => {
const expected = false;
const actual = polybius("5211324",false);
      expect(actual).to.equal(expected);
    });
  });
  
  describe("happy path",() => {
    
    it("should properly encode message by translating each letter into number pairs",() => {
const expected = "44513444";
const actual = polybius("test");
      expect(actual).to.equal(expected);
    });
    
    it("should properly decode message by translating each number pair into letters",() => {
const expected = "test";
const actual = polybius("44513444",false);
      expect(actual).to.equal(expected);
    });
  });
  
  describe("edge cases",() => {
    
    describe("encode",() => {
      
      it("should maintain spaces throughout message",() => {
const expected = "3251131343 2543241341";
const actual = polybius("hello world");
      expect(actual).to.equal(expected);
      });
      
      it("should translate both 'i' and 'j' to '42'",() => {
const expected = "425434444212425141";
const actual = polybius("justified");
      expect(actual).to.equal(expected);
      });
      
      it("should ignore capital letters",() => {
const expected = "4432423352125413";
const actual = polybius("ThInKfUl");
      expect(actual).to.equal(expected);   
      });
    });
    
    describe("decode",() => {
      
      it("should maintain spaces throughout message",() => {
const expected = "hello world";
const actual = polybius("3251131343 2543241341",false);
      expect(actual).to.equal(expected);  
      });
      
      it("should translate '42' to '(i/j)'",() => {
const expected = "(i/j)ust(i/j)f(i/j)ed";
const actual = polybius("425434444212425141",false)
      expect(actual).to.equal(expected);
      });
    });
  });  
});