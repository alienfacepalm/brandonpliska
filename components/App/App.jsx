import React from 'react';
import {Component} from 'react';
import Loader from 'react-loader';

import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';
import Home from '../Home/Home.jsx';
import Resume from '../Resume/Resume.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';

import './app.less';

class App extends Component {

	constructor(){
		super();

		this.state = {
			loaded: false,
			section: 'home'
		};
		this.content = null;
		this.sections = [];
		this.sectionMap = {
			home: <Home />,
			resume: <Resume />,
			projects: <Projects />,
			contact: <Contact />
		};

		this.initialize();
	}

	initialize(){
		this.fetchSections(sections => {
			this.sections = sections;
			this.content = this.sectionMap[this.state.section];
			this.navigate = this.navigate.bind(this);
			this.setState({loaded: true});
		});
	}

	fetchSections(callback){
		fetch('./sections.json')
			.then(response => response.json())
			.then(data => callback(data.sections))
			.catch(error => error);
	}

	navigate(section){
		this.content = this.sectionMap[section];
		this.setState({section: section});
	}

	render(){
		return (
	 		<div className="row">
	 			<Loader loaded={this.state.loaded} radius={50} width={30} length={50}>
		 			<Header />
		 			<Menu section={this.state.section} sections={this.sections} navigate={this.navigate} />
		 			<div className="row">{this.content}</div>
		 			<Footer section={this.state.section} sections={this.sections} navigate={this.navigate} />
		 		</Loader>
	 		</div> 		
	 	);
	}

}

export default App;
