// Configure different sites/URL collections to capture here

module.exports = {
	'example_site': {
		'name': 'example_site',
		'urls': {
			'home': 'http://www.your-domain.com',
			'other_page': 'http://www.your-domain.com/other/page',
		},
		'cookies': [ // Optional
			{
				'name': 'cookie-name',
				'value': 'cookie-value',
				'path': '/',
				'domain': 'your-domain.com'
			},
		],
		'login': { // Optional
			'username': 'your-username',
			'password': 'your-password',
		}
	},

	'realise': {
		'name': 'realise',
		'urls': {
			'home': 'http://www.realise.com/',
			'about': 'http://www.realise.com/about/',
			'careers': 'http://www.realise.com/careers/',
			'blog': 'http://www.realise.com/blog/'
		}
	}
};