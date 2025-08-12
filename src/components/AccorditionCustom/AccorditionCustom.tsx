import React from "react";
import styles from "./AccorditionCustom.module.css";

export type AccorditionCustomItemProps = {
	key: string,
	heading: string | React.ReactNode,
	description: string | React.ReactNode
}
const AccorditionCustom = ({ itemss }:{itemss: AccorditionCustomItemProps[]}) => {
	 const items = itemss.map((item) => (
		 <details key={item.key}>
			 <summary>{item.heading}</summary>
			 <div>
				 {item.description}
			 </div>
		 </details>
	 ));

	return (
		<div className={`${styles.Accordition} `} data-card={"accordition"}>
			{items}
		</div>
	);
};

export default AccorditionCustom;