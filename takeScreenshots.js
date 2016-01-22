var webshot  = require('webshot');
var mkdirp   = require('mkdirp');
var moment   = require('moment');

var settings = require('./settings/settings');


function takeMultipleScreenshots(sites, profiles, callback) {
	if (!Array.isArray(sites)) {
		sites = [sites];
	}

	if (!Array.isArray(profiles)) {
		profiles = [profiles];
	}

	var queue = [];
	var fileStamp = '/' + moment().format('DD_MM_YYYY') + '/' + moment().format('hh_mm') + '/';

	// Queue up all sites and profiles
	sites.forEach(function(site) {
		profiles.forEach(function(profile) {
			site.urls.forEach(function(url) {
				var filePath = settings.rootFolderName + '/' + site.name + fileStamp + profile.name + '/';

				queue.push({
					url: url,
					filePath: filePath,
					profile: profile
				});
			});
		});
	});

	function processQueue() {
		// Check if there's more URLs to process
		if (queue.length) {
			// Put a delay to avoid spamming servers
			setTimeout(function() {
				var item = queue.shift();
				takeIndividualScreenshot(item.url, item.filePath, item.profile, processQueue);
			}, settings.throttleDelay);
		} else {
			console.log('Finished taking screenshots.');
		}
	}

	processQueue();
}


function takeIndividualScreenshot(url, path, profile, callback) {
	console.log('Capturing ' + url + ' on ' + profile.name);

	// Create a nice filename based on the URL
	var fileName = (url.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png');

	// Create the new folder path first
	mkdirp(path, function (err) {
		if (err) {
			console.log(path, err);
		} else {
			// Take the actual screenshot
			webshot(
				url,
				path + fileName,
				{
					screenSize: {
						width:  profile.width,
						height: profile.height
					},
					shotSize: {
						width:  profile.width,
						height: 'all'
					},
					userAgent: profile.userAgent
				},
				callback || function() {}
			);
		}
	});
}

module.exports = takeMultipleScreenshots;