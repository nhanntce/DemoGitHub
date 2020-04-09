function dog(arguments) {
	
}


dog.prototype.jump = function () {
	console.log("Jump..");
}

dog.prototype.run = function() {
	console.log('Running..');
};


module.exports = dog;