import "./App.css";
import React, { useState, useEffect } from "react";
import Introduction from "./Introduction";
import NextChallange from "./NextChallange";
import Exhibit from "./Exhibit";
import Conclusion from "./Conclusion";
import Loading from "./Loading";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exhibits: null,
			displayState: {
				current: "intro", // intro, next, concl, exhibit
				exhibitId: null,
			},
			visitedExhibits: [],
		};
	}

	// const [exhibits, setExhibits] = React.useState(null);

	componentDidMount() {
		fetch("https://oscapi.herokuapp.com/api/exhibit")
			.then((response) => response.json())
			.then((data) => this.setState({ exhibits: data }));
	}

	renderAppContent() {
		if (this.state.exhibits == null) {
			return <Loading></Loading>;
		} else {
			switch (this.state.displayState.current) {
				case "intro":
					return <Introduction app={this}></Introduction>;
				case "exhibit":
					return <Exhibit app={this}></Exhibit>;
				case "next":
					return <NextChallange app={this}></NextChallange>;
				case "concl":
					return <Conclusion app={this}></Conclusion>;
			}
		}
	}

	render() {
		return (
			<div className="App">
				<div className="AppHeader">
					<img className="logo" src="./img/osc-logo.png"></img>
					<div className="pattern"></div>
				</div>
				<div className="AppContent">
					{/* {this.state.exhibits == null ? (
						<Loading></Loading>
					) : (
						
					)} */}
					{this.renderAppContent()}
				</div>
			</div>
		);
	}
}

export default App;
