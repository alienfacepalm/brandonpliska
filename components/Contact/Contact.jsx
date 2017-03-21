import React from 'react';

import toastr from 'toastr';
import '../../node_modules/toastr/build/toastr.min.css';
import ClipboardButton from 'react-clipboard.js';

import './contact.less';

const Contact = props => {
	return (
		<div className="col-md-12 text-center section section-title">
			<h1>Contact</h1>
			<ClipboardButton className="copy-email" data-clipboard-text="brandon.pliska+resume@gmail.com" onSuccess={copyEmail}>
		     	<p className="email">brandon.pliska+resume@gmail.com</p>	
		    </ClipboardButton>
		</div>
	);
};

const copyEmail = event => {
	toastr.success("My email address has been copied to your clipboard. Send me a message!");
};

export default Contact;