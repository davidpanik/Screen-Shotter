var webshot  = require('webshot');
var mkdirp   = require('mkdirp');
var moment   = require('moment');
var btoa     = require('btoa');

var settings = require('./settings/settings');


function takeMultipleScreenshots(sites, profiles, callback) {
	if (!Array.isArray(sites)) {
		sites = [sites];
	}

	if (!Array.isArray(profiles)) {
		profiles = [profiles];
	}

	callback = callback || function() {};

	var queue = [];
	var fileStamp = '/' + moment().format('DD_MM_YYYY') + '/' + moment().format('hh_mm') + '/';
	var newFolders = [];

	// Queue up all sites and profiles
	sites.forEach(function(site) {
		site.cookies = site.cookies || [];
		site.login = site.login || false;

		profiles.forEach(function(profile) {
			var filePath = settings.rootFolderName + '/' + site.name + fileStamp + profile.name + '/';
			newFolders.push(filePath);

			for (var id in site.urls) {
				queue.push({
					id       : id,
					url      : site.urls[id],
					filePath : filePath,
					profile  : profile,
					cookies  : site.cookies,
					login    : site.login
				});
			}
		});
	});

	function processQueue(err) {
		if (err) {
			console.log(err);
		}

		// Check if there's more URLs to process
		if (queue.length) {
			// Put a delay to avoid spamming servers
			setTimeout(function() {
				var item = queue.shift();
				takeIndividualScreenshot(item.id, item.url, item.filePath, item.profile, item.cookies, item.login, processQueue);
			}, settings.throttleDelay);
		} else {
			console.log('Finished taking screenshots.');
			callback(newFolders);
		}
	}

	processQueue();
}


function takeIndividualScreenshot(id, url, path, profile, cookies, login, callback) {
	console.log('Capturing ' + id + ' ' + url + ' on ' + profile.name);

	// Create a nice filename based on the URL
	var fileName = (id.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png');

	// Create the new folder path first
	mkdirp(path, function (err) {
		if (err) {
			console.log(path, err);
		} else {
			var options = {
				screenSize: {
					width:  profile.width,
					height: profile.height
				},
				shotSize: {
					width:  profile.width,
					height: 'all'
				}
			};

			if (profile.userAgent) {
				options.userAgent = profile.userAgent;
			}

			if (cookies) {
				options.cookies = cookies;
			}

			if (login) {
				options.customHeaders = {
					'Authorization': 'Basic '+ btoa(login.username + ':' + login.password)
				};
			}

			// Take the actual screenshot
			webshot(
				url,
				path + fileName,
				options,
				callback || function() {}
			);
		}
	});
}

module.exports = takeMultipleScreenshots;