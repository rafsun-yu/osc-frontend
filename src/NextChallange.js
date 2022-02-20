import "./NextChallange.css";
import QRScanner from "./QRScanner";
import React, { useState, useEffect } from "react";

class NextChallange extends React.Component {
	constructor(props) {
		super(props);
	}

	onClickExhibitionLink = (e) => {
		this.props.app.setState({
			displayState: {
				current: "exhibit",
				exhibitId: parseInt(e.target.getAttribute("data-id")),
			},
		});
	};

	render() {
		return (
			<div className="NextChallange">
				<div className="welcome">Let's visit another exhibition hall!</div>
				<div>
					Hope you learned something new from the last exhibition hall.
					<br></br>
					<br></br>
					<div>I bet you will enjoy the other exhibitions as well:</div>
					<div className="exhibitionList">
						{this.props.app.state.exhibits
							.filter((i) => {
								return !this.props.app.state.visitedExhibits.includes(i.id);
							})
							.map((exhibit) => {
								return (
									<div>
										<a
											className="exhibitionLink"
											href="#"
											data-id={exhibit.id}
											onClick={(e) => this.onClickExhibitionLink(e)}
										>
											{exhibit.name}
										</a>
										<br></br>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		);
	}
}

export default NextChallange;
