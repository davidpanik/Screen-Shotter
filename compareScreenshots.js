var resemble = require('node-resemble-js');
var fs = require('fs');

var settings = require('./settings/settings');


function compareDirectories(alpha, beta, callback) {
	callback = callback || function() {};

	var files = fs.readdirSync(alpha).filter(function(fileName) {
		return (fileName.endsWith('.png') || fileName.endsWith('.jpg'));
	});

	var queue = files;
	var differences = [];

	function processQueue(difference) {
		if (difference) {
			differences.push(difference);
		}

		// Check if there's more files to process
		if (queue.length) {
			var file = queue.shift();
			compareScreenshots(alpha + file, beta + file, processQueue);
		} else {
			console.log('Finished comparing screenshots.');
			callback(differences);
		}
	}

	processQueue();
}

function compareScreenshots(alpha, beta, callback) {
	console.log('Comparing ' + alpha + ' with ' + beta);

	callback = callback || function() {};

	resemble(fs.readFileSync(alpha))
	.compareTo(fs.readFileSync(beta))
	.onComplete(function(data) {
		if (Number(data.misMatchPercentage) > settings.differenceThreshold) {
			// data.getDiffImage().pack().pipe(fs.createWriteStream('diff.png'));

			callback({
				alpha:      alpha,
				beta:       beta,
				difference: data.getDiffImage().pack()
			});
		}

		callback();
	});
}

module.exports = compareDirectories;