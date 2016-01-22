// Configure different "profiles" here for capturing different screensizes / useragents

module.exports = {
	'desktop': {
		'name'      : 'desktop',
		'width'     : 1680,
		'height'    : 1050,
		'userAgent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36'
	},

	'laptop': {
		'name'      : 'laptop',
		'width'     : 1280,
		'height'    : 950,
		'userAgent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36'
	},

	'ipad_portrait': {
		'name'      : 'ipad_portrait',
		'width'     : 768,
		'height'    : 1024,
		'userAgent' : 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	},

	'ipad_landscape': {
		'name'      : 'ipad_landscape',
		'width'     : 1024,
		'height'    : 768,
		'userAgent' : 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	},

	'iphone6_portrait': {
		'name'      : 'iphone6_portrait',
		'width'     : 375,
		'height'    : 627,
		'userAgent' : 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	},

	'iphone6_landscape': {
		'name'      : 'iphone6_landscape',
		'width'     : 667,
		'height'    : 375,
		'userAgent' : 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	}
};