import "./Exhibit.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

class Clue extends React.Component {
	constructor(props) {
		super(props);
		const { clue } = props;
		this.state = {
			clue: clue,
			showHint: false,
		};
	}

	onClickArrow(e) {
		this.setState({ showHint: !this.state.showHint });
	}

	render() {
		var clue = this.state.clue;
		return (
			<div className="clue">
				<div className="clueWrapper">
					<div className="clueContent">
						<input
							className="cBox"
							type="checkbox"
							name={"challenge" + clue.challengeid}
							value="Bike"
						/>
						<label for={"challenge" + clue.challengeid}>{clue.name}</label>
					</div>
					<div className="arrow" onClick={(e) => this.onClickArrow(e)}>
						<img src="./img/down-chevron.png"></img>
					</div>
				</div>
				{this.state.showHint ? (
					<div className="hint">{clue.description}</div>
				) : null}
			</div>
		);
	}
}

class Exhibit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exhibits: props.app.state.exhibits,
			id: props.app.state.displayState.exhibitId,
			challenges: null,
		};
	}

	componentDidMount() {
		fetch("https://oscapi.herokuapp.com/api/challenges?id=" + this.state.id)
			.then((response) => response.json())
			.then((data) => this.setState({ challenges: data }));
	}

	onClickNextButton() {
		let visitedExhibits = this.props.app.state.visitedExhibits;
		visitedExhibits.push(this.state.id);
		this.props.app.setState({
			visitedExhibits: visitedExhibits,
			displayState: {
				current: "next",
			},
		});
	}

	render() {
		// var exhibit = this.state.exhibits[this.state.id];
		var exhibit = this.state.exhibits.find((i) => {
			return i.id == this.state.id;
		});

		return (
			<div className="Exhibit">
				<div className="exhibitName">{exhibit.name}</div>
				<div className="shortDesc">{exhibit.description}</div>
				<img
					className="exhibitPhoto"
					src={"./img/" + exhibit.photoid + ".jpg"}
				></img>
				<div>You are currently here! Complete the below challanges.</div>
				<br></br>
				{this.state.challenges == null ? (
					<Loading></Loading>
				) : (
					<div className="clues">
						{this.state.challenges.map((challange) => {
							return <Clue clue={challange}></Clue>;
						})}
					</div>
				)}

				<div className="continue">
					<div>
						After you complete the challanges, you can see what is waiting for
						you next!.
					</div>
					<button
						className="btn nextBtn"
						onClick={(e) => this.onClickNextButton()}
					>
						Continue
					</button>
				</div>
			</div>
		);
	}
}

export default Exhibit;
