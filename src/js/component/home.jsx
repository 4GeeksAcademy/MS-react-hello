import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./MyNavbar";
import Jumbotron from "./MyJumbotron";
import Card from "./MyCard";
import Footer from "./MyFooter";

//create your first component
const Home = () => {
	return (
	<div> 
	<Navbar />	
	<Jumbotron />
	<Card />
	<br></br>
	<br></br>
	<Footer />

	</div>	
	);
};

export default Home;
