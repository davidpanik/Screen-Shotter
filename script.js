var takeScreenshots    = require('./takeScreenshots');
var compareScreenshots = require('./compareScreenshots');
var profiles           = require('./settings/profiles');
var sites              = require('./settings/sites');

// takeScreenshots(
// 	sites.realise,
// 	[profiles.desktop, profiles.desktop, profiles.iphone6_landscape]
// );

compareScreenshots(
	'.\\screenshots\\realise\\22_01_2016\\12_17\\iphone6_landscape\\',
	'.\\screenshots\\realise\\22_01_2016\\12_23\\iphone6_landscape\\'
);