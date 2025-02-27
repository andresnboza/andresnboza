import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./serverless_solutions_llc_logo.jpeg"
								alt="Serverless Solutions LLC"
								className="work-image"
							/>
							<div className="work-title">
								Serverless Solutions
							</div>
							<div className="work-subtitle">
								Senior Sofware Engineer
							</div>
							<div className="work-duration">
								August 2022 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./ibm_logo.jpeg"
								alt="IBM"
								className="work-image"
							/>
							<div className="work-title">IBM</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								Dicembar 2021 - August 2022
							</div>
						</div>

						<div className="work">
							<img
								src="./midware_logo.jpg"
								alt="Midware"
								className="work-image"
							/>
							<div className="work-title">Midware</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								September 2020 - February 2021
							</div>
						</div>

						<div className="work">
							<img
								src="./ucr.jpeg"
								alt="UCR"
								className="work-image"
							/>
							<div className="work-title">
								University Of Costa Rica.
							</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								July 2018 - July 2019
							</div>
						</div>

						<div className="work">
							<img
								src="./tekexperts_logo.jpeg"
								alt="TekExperts"
								className="work-image"
							/>
							<div className="work-title">Tek Experts</div>
							<div className="work-subtitle">
								Software Specialist
							</div>
							<div className="work-duration">
								January 2018 - July 2018
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
