import React from 'react';
import Default from '../layouts/default';

const SignIn = (props) => {
	console.log('!!!!!!!!!!');
	console.log(props);
	return (
		<Default {...props}  >
	<div className="container">
		<form method="post">
			<input name="signin_email" type="email" placeholder="email..."/>
			<input name="signin_password" type="password" placeholder="email..."/>
			<input type="submit" />
		</form>
	</div>
	</Default>
)};

module.exports = SignIn;
