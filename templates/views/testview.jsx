import React from 'react';
import Default from '../layouts/default';

const TestView = (props) => {
	return (
		<Default {...props}>
			<div>
				Hello there.
			</div>
		</Default>
	);
};


// React Engine needs exports, don't export default
module.exports = TestView;
