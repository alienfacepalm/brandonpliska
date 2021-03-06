import React from 'react';
import moment from 'moment';

import github from '../../assets/github.png';

import './footer.less';

const Footer = props => {
	let year = moment(new Date()).format('YYYY');

	return (
		<footer>
			<div className="row">	
				<div className="col-md-6 text-left github">
					<a href="http://github.com/alienfacepalm/brandonpliska/" target="_blank"><img src={github} /></a>				
				</div>
				<div className="col-md-6 text-right footer-nav">
					<ul className="list-inline">
					{props.sections.map(section => 
  				<li key={section.id} 
  				    className={section.id === props.section ? 'underline' : ''}
  				    onClick={() => props.navigate(section.id)}>
					  {section.text}
					</li>)}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
