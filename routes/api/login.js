const keystone = require('keystone');

exports = module.exports = function (req, res) {
	if (!req.body.signin_email || !req.body.signin_password) {
	}


	const onSuccess = () => {
		if (req.query && req.query.from) {
			res.redirect(req.query.from);
		} else {
			res.redirect('/');
		}
	};

	const onFail = () => {
	};

	keystone.session.signin(
		{ email: req.body.signin_email, password: req.body.signin_password }
		, req, res, onSuccess, onFail);

};
