import "./Introduction.css";
import QRScanner from "./QRScanner";

const Introduction = (props) => {
	return (
		<div className="Introduction">
			<div className="welcome">Welcome to Scavanger Hunt!</div>
			<QRScanner app={props.app}></QRScanner>
		</div>
	);
};

export default Introduction;
