import React from 'react';

import toastr from 'toastr';
import '../../node_modules/toastr/build/toastr.min.css';
import Clipboard from 'clipboard';

import './contact.less';

const Contact = props => {
	return (
		<div className="col-md-12 text-center section">
			<h1>Contact</h1>
			<p className="email" 
			   data-clipboard-action="copy"
			   data-clipboard-text="brandon.pliska+resume@gmail.com" 
			   onClick={copyEmail}>brandon.pliska+resume@gmail.com</p>
		</div>
	);
};

const copyEmail = props => {
	let clipboard = new Clipboard('.email');
	console.log(clipboard);
	clipboard.on('success', (event) => {
		console.log('success');
		toastr.success("My email address has been copied to your clipboard, send me something!");
	});
	clipboard.on('error', (error) => {
		console.log('error');
	});
	clipboard.destroy();	
}

export default Contact;