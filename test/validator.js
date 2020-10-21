const chai = require('chai')
const expect = chai.expect

const validator = require('../src/validator')

describe("validator isTextValid()", () => {

	it("should return true because the server is running ", ()=> {
		expect(validator.isTextValid("Server is running on Port: ")).to.be.true
    })

    it("should return false because the server is not running", () => {
        expect(validator.isTextValid("The Server is not running :(")).to.be.false
	})

})