import "./QRScanner.css";
import React, { useState, useEffect } from "react";

const QRScanner = (props) => {
	const exhibits = props.app.state.exhibits;

	// States
	const [displayMap, showDisplayMap] = React.useState(false);

	// OnClick - Show Map button
	const onClickShowMap = () => {
		showDisplayMap(!displayMap);
	};

	// OnClick - Exhibition link
	const onClickExhibitionLink = (e) => {
		console.log(e.target);
		props.app.setState({
			displayState: { current: "exhibit", exhibitId: e.target.dataset.id },
		});
	};

	return (
		<div className="qrScanner">
			<div className="steps">
				<div>
					<b>Step-1:</b> Visit an exhibition hall of your interest.
				</div>
				<br></br>
				<div>
					<b>Step-2:</b>
					<button className="btn scanBtn">Scan QR Code</button>
				</div>
			</div>
			<br></br>
			<div>Need helping finding an exhibition hall?</div>
			<button className="btn showMapBtn" onClick={(e) => onClickShowMap(e)}>
				Show map
			</button>
			<div
				className="hint map"
				style={{ display: displayMap ? "block" : "none" }}
			>
				<img className="oscMap" src="./img/osc-map.png"></img>
				<br></br>
				All available exhibitions are:
				<div className="exhibitionList">
					{exhibits.map((exhibit) => {
						return (
							<div>
								<a
									className="exhibitionLink"
									href="#"
									data-id={exhibit.id}
									onClick={(e) => onClickExhibitionLink(e)}
								>
									{exhibit.name}
								</a>
								<br></br>
							</div>
						);
					})}
				</div>
				<br></br>
				Visit the exhibition. Then, either click the link, or scan QR code.
			</div>
		</div>
	);
};

export default QRScanner;
