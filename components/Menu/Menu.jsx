import React from 'react';

const Menu = props => {

	return (
		<div className="text-center">
			<div className="btn-group">
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