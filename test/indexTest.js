const { expect } = require("chai"); 
const { add } = require("../index");

describe("Addition Function", function () {
    it("should return 5 when adding 2 and 3", function () {
        expect(add(2, 3)).to.equal(5);
    });

    it("should return 10 when adding 4 and 6", function () {
        expect(add(4, 6)).to.equal(10);
    });
});