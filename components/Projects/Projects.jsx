import React from 'react';

import afp from '../../assets/afp.jpg';

import './projects.less';

const Projects = props => {
	return (
		<div className="col-md-12 text-center section section-title">
			<h1>Projects</h1>
			<a href="http://github.com/alienfacepalm" target="_blank"><img className="project" src={afp}/></a>
		</div>
	);
}

export default Projects;