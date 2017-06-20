const keystone = require('keystone');


exports = module.exports = function (req, res) {

	const User = keystone.list('User');
	const newUser = User.model({
		email: 'hello@a.a',
		name: { first: 'aa', last: 'bb' },
		password: 'hello',
		isAdmin: false,
	})
	
	newUser.save((err) => {
		
	});
	
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

};
