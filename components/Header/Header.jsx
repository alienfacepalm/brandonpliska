import React from 'react';
import capitalize from 'capitalize';

const Header = props => {

	return (
		<header>
			<div className="text-center">
				<h1>Brandon Pliska</h1>
				<h3>{capitalize(props.section)}</h3>
			</div>
		</header>
	);

};

export default Header;