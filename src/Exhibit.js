import "./Exhibit.css";

function Clue() {
	return (
		<div className="clue">
			<div className="clueWrapper">
				<div className="clueContent">
					<input
						className="cBox"
						type="checkbox"
						name="vehicle1"
						value="Bike"
					/>
					<label for="vehicle1"> I have a bike</label>
				</div>
				<div className="arrow">
					<img src="./img/down-chevron.png"></img>
				</div>
			</div>
			<div className="hint">hey</div>
		</div>
	);
}

function Exhibit() {
	return (
		<div className="Exhibit">
			<div className="exhibitName">Exhibit name</div>
			<div className="shortDesc">Short description goes here</div>
			<img className="exhibitPhoto" src="./img/osc-map.png"></img>
			<div>You are currently here! Complete the below challanges.</div>
			<br></br>
			<div className="clues">
				<Clue></Clue>
				<Clue></Clue>
				<Clue></Clue>
			</div>
			<div className="continue">
				<div>Congratulations on finishing the challanges.</div>
				<button className="btn nextBtn">Continue</button>
			</div>
		</div>
	);
}

export default Exhibit;
