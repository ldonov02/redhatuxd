/* Exercise 1 - mocha.js unit test
 * Due 7/11/18
 * Laura Donovan
 */

var assert = require('assert');
describe('Exercise 1', function(){

	describe('remoteMathService', function(){
		//i.e. the function call at the end of the working Exercise 1 code
		it('should return 3 when callOneService and callTwoService return successfully', function(){
			assert.equal(3, remoteMathService(function(err, answer) {
								if (err) console.log("error ", err);
								if (answer !== 3) {
									console.log("wrong answer", answer);
								} else {
									console.log("correct");
								}
								});
								);
		});

		it('should return "error undefined" if callOneService and/or callTwoService returns undefined', function(){
			assert.equal(undefined, remoteMathService(function(err, answer){return err;}));
		});
	});

	describe('callOneService', function(){

		it('should return 1 when passed a function that completes within 1s', function(){
			assert.equal(1, callOneService(function(err, num) {return num;}));
		});

		it('should return undefined otherwise', function(){
			assert.equal(undefined, callOneService(function(err, num) {return err;}));
		});
	});

	describe('callTwoService', function(){

		it('should return 2 when passed a function that completes within 1s', function(){
			assert.equal(2, callTwoService(function(err, num) {return num;}));
		});

		it('should return undefined otherwise', function(){
			assert.equal(undefined, callTwoService(function(err, num) {return err;}));
		});
	});
});