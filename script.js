/*
	TODO

	Comparison doing desktop twice?
	Screenshot grabbing firing callbacks multiple times
*/



var takeScreenshots    = require('./takeScreenshots');
var compareScreenshots = require('./compareScreenshots');
var profiles           = require('./settings/profiles');
var sites              = require('./settings/sites');

takeScreenshots(
	sites.realise,
	[profiles.desktop, profiles.desktop, profiles.iphone6_landscape],
	function(newFolders) {
		console.log('Finished taking screenshots - ' + newFolders.length + ' new folders created.');
	}
);

compareScreenshots(
	'.\\screenshots\\realise\\22_01_2016\\12_17\\iphone6_landscape\\',
	'.\\screenshots\\realise\\22_01_2016\\12_23\\iphone6_landscape\\',
	function(differences) {
		console.log('Finished comparing screenshots - ' + differences.length + ' differences found.');
	}
);