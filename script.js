var takeScreenshots = require('./takeScreenshots');
var profiles        = require('./settings/profiles');
var sites           = require('./settings/sites');

takeScreenshots(
	sites.realise,
	[profiles.desktop, profiles.desktop, profiles.iphone6_landscape]
);