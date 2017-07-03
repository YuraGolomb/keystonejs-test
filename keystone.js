// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();
var scmp = require('scmp');
var crypto = require('crypto');
var _ = require('lodash');

// Require keystone
var keystone = require('keystone');
// Require the react engine
var renderer = require('react-engine');

var engine = renderer.server.create({
	performanceCollector: function (stats) {
		console.log(stats);
	},
	// your options here
});

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Adviser',
	'brand': 'React-example',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',

	'views': 'templates/views',
	'view engine': 'jsx',
	'custom engine': engine,
	'view': renderer.expressView,
	'host': '127.0.0.1',
	'signin url': '/signin',
	'signin redirect': '/',
	'signout url': '/signout',
	'signout redirect': '/',
	'auth': true,
	'auto update': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');


// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// keystone.set('auth', function (req, res, next) {
// 	if (!req.user || !req.user.canAccessKeystone) {
// 		if (req.headers.accept === 'application/json') {
// 			return req.user
// 				? res.status(403).json({ error: 'not authorised' })
// 				: res.status(401).json({ error: 'not signed in' });
// 		}
// 		var regex = new RegExp('^\/' + keystone.get('admin path') + '\/?$', 'i');
// 		var from = regex.test(req.originalUrl) ? '' : '?from=' + req.originalUrl;
// 		return res.redirect(keystone.get('signin url') + from);
// 	}
// 	next();
// });

// Load your project's Routes
keystone.set('routes', require('./routes'));
keystone.set('cookie secret', '123');
// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
