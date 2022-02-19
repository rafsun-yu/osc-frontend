import "./QRScanner.css";

function QRScanner() {
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
			<button className="btn showMapBtn">Show map</button>
		</div>
	);
}

export default QRScanner;
