var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'signin';
	locals.form = req.body;
	locals.bla = 'asdasdasdasdasd';

	view.on('post', (next) => {
		if (req.userr) {
			return res.redirect('/testview');
		}

		if (!req.body.signin_email || !req.body.signin_password) {
			console.log('error fields missing');
			return next();
		}


		const onSuccess = (userr) => {
			locals.userr = userr;
			req.userr = userr;
			if (req.query && req.query.from) {
				res.redirect(req.query.from);
			} else {
				locals.userr = userr;
				res.redirect('/');
			}

		};

		const onFail = () => {
			return next();
		};

		keystone.session.signin(
			{ email: req.body.signin_email, password: req.body.signin_password },
			req, res, onSuccess, onFail
		);

	});
	// Render the view
	view.render('signin');
};
