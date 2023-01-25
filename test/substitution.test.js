// Write your tests here!
const expect = require('chai').expect
const {substitution} = require("../src/substitution")

describe("substitution() tests written by Matthew Murray",() => {
  
  describe("error handling",() => {
    
    it("should return false when substitution alphabet is missing",() => {
const expected = false;
const actual = substitution("thinkful");
      expect(actual).to.equal(expected);
    });
    
    it("should return false when substitution alphabet is not 26 characters long",() => {
const expected = false;
const actual = substitution("thinkful","ialdkjfmworpxbc")
      expect(actual).to.equal(expected);
    });
    
    it("should return false when substitution alphabet contains duplicate characters",() => {
const expected = false;
const actual = substitution("thinkful","ialdkjfmworpxbcmvnzqyhegut");
      expect(actual).to.equal(expected);
    });
  });
  
  describe("happy path",() => {
    
    it("should properly encode message using substitution alphabet",() => {
const expected = "jrufscpw";
const actual = substitution("thinkful","xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    
    it("should properly decode message using substitution alphabet",() => {
const expected = "thinkful"
const actual = substitution("jrufscpw","xoyqmcgrukswaflnthdjpzibev",false);
      expect(actual).to.equal(expected);
    });
  });
  
  describe("edge cases",() => {
    
    describe("encode",() => {
      
      it("should retain spaces",() => {
const expected = "im xhm jmdjufg dnxymd";
const actual = substitution("we are testing spaces","xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
      });
      
      it("should work with alphabet containing any kind of unique characters",() => {
const expected = "y&ii$r&"
const actual = substitution("message","$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
      });
      
      it("should ignore capital letters",() => {
const expected = "jrufscpw";
const actual = substitution("ThInKfUl","xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
      });
    });
    
    describe("decode",() => {
      
        it("should retain spaces",() => {
const expected = "we are testing spaces";
const actual = substitution("im xhm jmdjufg dnxymd","xoyqmcgrukswaflnthdjpzibev",false);
      expect(actual).to.equal(expected);
      });
      
      it("should work with alphabet containing any kind of unique characters",() => {
const expected = "message"
const actual = substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl",false);
      expect(actual).to.equal(expected);
      });
      
      it("should ignore capital letters",() => {
const expected = "thinkful";
const actual = substitution("JrUfScPw","xoyqmcgrukswaflnthdjpzibev",false);
      expect(actual).to.equal(expected);
      });
    });
  });
});