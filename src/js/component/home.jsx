import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbo from "./Jumbo.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div className="container">
				<Jumbo />
				<div className="row">
					<Card
						className="Información Importante"
						description="Se ha podido avanzar en el entendimeinto de React 1"
					/>
					<Card
						className="Información Importante"
						description="Se ha podido avanzar en el entendimeinto de React 2"
					/>
					<Card
						className="Información Importante"
						description="Se ha podido avanzar en el entendimeinto de React 3"
					/>
					<Card
						className="Información Importante"
						description="Se ha podido avanzar en el entendimeinto de React 3"
					/>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
