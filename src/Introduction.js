import "./Introduction.css";
import QRScanner from "./QRScanner";

function Introduction() {
	return (
		<div className="Introduction">
			<div className="welcome">Welcome to Scavanger Hunt!</div>
			{/* <img className="map" src="./img/osc-map.png"></img>
			<div>Some description</div>
			<div>
				<a href="#">Click here to begin</a>
			</div> */}
			<QRScanner></QRScanner>
		</div>
	);
}

export default Introduction;
