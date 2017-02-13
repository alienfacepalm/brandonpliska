import React from 'react';
import moment from 'moment';

import './footer.less';

const Footer = props => {
	let year = moment(new Date()).format('YYYY');

	return (
		<footer>
			<div className="row">	
				<div className="col-md-6 text-left copyright">
					&copy; {year}
				</div>
				<div className="col-md-6 text-right footer-nav">
					<ul className="list-inline">
					{props.sections.map(section => <li key={section.id} onClick={() => props.navigate(section.id)}>{section.text}</li>)}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;