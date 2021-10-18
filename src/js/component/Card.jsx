import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	const message = () => {
		alert("Did click on Find out more");
	};
	return (
		<div className="col-3">
			<div className="card-group">
				<div className="card">
					<img
						className="card-img-top"
						src="https://image.shutterstock.com/image-photo/street-white-houses-colonia-shown-600w-1035199813.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.description}</p>
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button"
							onClick={message}>
							Find out more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};

export default Card;
