// remotemathservice_fixed.js, modified so the mocha.js unit tests can run on it

let convert = {};

var one, two;
convert.remoteMathService = function(cb) {
	callOneService(function(err, num) {one = num;});
	callTwoService(function(err, num) {two = num;});
	return cb(undefined, one + two);
}

convert.callOneService = function(cb) {
	return setTimeout(function() {return cb(undefined, 1);}, 1000);
}

convert.callTwoService = function(cb) {
	return setTimeout(function() {return cb(undefined, 2);}, 1500);
}

convert.remoteMathService(function(err, answer) {
	if (err) console.log("error ", err);
	if (answer !== 3) {
		console.log("wrong answer", answer);
	} else {
		console.log("correct");
	}
});


module.exports = convert;