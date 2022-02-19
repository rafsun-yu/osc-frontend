import "./NextChallange.css";
import QRScanner from "./QRScanner";

function NextChallange() {
	return (
		<div className="NextChallange">
			<div className="welcome">Let's visit another exhibition hall!</div>
			<div>
				You've been playing around %EXHIBIT NAME%. Hope you learned something
				new.
				<br></br>
				<br></br>I bet you will enjoy %SUGGESTED_EXHIBIT1%, or
				%SUGGESTED_EXHIBIT1%.
			</div>
			<QRScanner></QRScanner>
		</div>
	);
}

export default NextChallange;
