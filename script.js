/*
	TODO

	Write difference images to file
*/



var takeScreenshots    = require('./takeScreenshots');
var compareScreenshots = require('./compareScreenshots');
var profiles           = require('./settings/profiles');
var sites              = require('./settings/sites');

takeScreenshots(
	[sites.sli_europe_dev, sites.sli_europe_syst],
	[profiles.desktop, profiles.iphone6_landscape],
	function(newFolders) {
		console.log('Finished taking screenshots - ' + newFolders.length + ' new folders created.');
	}
);

// compareScreenshots(
// 	'.\\screenshots\\realise\\25_01_2016\\09_50\\iphone6_landscape\\',
// 	'.\\screenshots\\realise\\25_01_2016\\09_51\\iphone6_landscape\\',
// 	function(differences) {
// 		console.log('Finished comparing screenshots - ' + differences.length + ' differences found.');
// 	}
// );