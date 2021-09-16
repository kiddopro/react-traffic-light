import React, { useState } from "react";

//create your first component
const Home = () => {
	//state
	const [selectedRed, setSelectedRed] = useState(false);
	const [selectedYellow, setSelectedYellow] = useState(false);
	const [selectedGreen, setSelectedGreen] = useState(false);

	function setColor(color) {
		let c = color.toLowerCase();
		if (c === "red") {
			setSelectedRed(true);
			setSelectedYellow(false);
			setSelectedGreen(false);
		} else if (c === "yellow") {
			setSelectedRed(false);
			setSelectedYellow(true);
			setSelectedGreen(false);
		} else {
			setSelectedRed(false);
			setSelectedYellow(false);
			setSelectedGreen(true);
		}
	}

	return (
		<div className="text-center mt-5 ">
			<div
				className="rope m-auto"
				style={{
					width: "10px",
					backgroundColor: "#000000",
					height: "70px"
				}}>
				&nbsp;
			</div>
			<div
				className="cajaTrafico border m-auto"
				style={{
					width: "fit-content",
					backgroundColor: "#000000",
					borderRadius: "15px"
				}}>
				<div
					className={selectedRed ? "selected" : ""}
					onClick={() => {
						setColor("red");
					}}>
					🔴
				</div>
				<div
					className={selectedYellow ? "selected" : ""}
					onClick={() => {
						setColor("yellow");
					}}>
					🟡
				</div>
				<div
					className={selectedGreen ? "selected" : ""}
					onClick={() => {
						setColor("green");
					}}>
					🟢
				</div>
			</div>
		</div>
	);
};

export default Home;
