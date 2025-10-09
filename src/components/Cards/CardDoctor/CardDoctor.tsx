import styles from './CardDoctor.module.css';
import ImageResp from "@/components/ImageResp/ImageResp";
import React from "react";

const CardDoctor = () => {
	return (
		<div className={styles.root}>
			<div className={styles.image}>
				<ImageResp
					image={{
						width: 300,
						height: 300,
						alt: "",
						src: "/images/what-is-hbat/cards/doctor.jpg",
					}}
				/>
			</div>
			<div className={styles.content}>
				<hgroup>
					<h3>Dr. B. Monte Stewart, MD, FACS</h3>
					<h4>Medical Director</h4>
					<p className={"text-lead"}>Leading clinical strategy with a human-first mindset</p>
				</hgroup>

				<p>
					Dr. Stewart is a board-certified general surgeon with over 25 years of experience in surgery, trauma, and hyperbaric medicine. A graduate of Loma Linda University, he completed advanced training in trauma surgery and critical care in Los Angeles.</p>
				<p>Before founding and directing multiple hyperbaric programs, Dr. Stewart served as a U.S. Army surgeon, achieving the rank of Major and teaching medical residents at William Beaumont Army Medical Center in Texas.</p>
				<p>
					As a practicing surgeon, Dr. Stewart has treated thousands of patients and integrated Hyperbaric Oxygen Therapy (HBOT) into surgical recovery to reduce swelling, scarring, and
					complications. He is widely respected for applying HBOT to complex cases such as failed grafts, non-healing wounds, and radiation injuries.
				</p></div>
		</div>
	);
}
export default CardDoctor