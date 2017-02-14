import React from 'react';

import './menu.less';

const Menu = props => {

	return (
		<div className="text-center">
			<div className="main-menu btn-group">
				{props.sections.map(section => <button className={props.section === section.id ? 'btn btn-primary active' : 'btn'} 
												        key={section.id} 
												        onClick={() => props.navigate(section.id)}>
													{section.text}
												</button>)}
			</div>
		</div>
	);

};

export default Menu;