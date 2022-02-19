import "./App.css";
import Introduction from "./Introduction";
import NextChallange from "./NextChallange";
import Exhibit from "./Exhibit";
import Conclusion from "./Conclusion";

function App() {
	return (
		<div className="App">
			<div className="AppHeader">
				<img className="logo" src="./img/osc-logo.png"></img>
				<div className="pattern"></div>
			</div>
			<div className="AppContent">
				<Conclusion />
			</div>
		</div>
	);
}

export default App;
