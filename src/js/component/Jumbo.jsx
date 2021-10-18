import React from "react";

const Jumbo = () => {
	const mens = () => {
		alert("Did click on Call to action");
	};

	let styleCss = {
		backgroundColor: "lightgrey"
	};

	return (
		<div className="jumbotron" style={styleCss}>
			<h1 className="display-4">Hello, planet!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="#"
				role="button"
				onClick={mens}>
				Call to action
			</a>
		</div>
	);
};

export default Jumbo;
