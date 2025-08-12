import React from "react";
import styles from "./AccorditionCustom.module.css";


export const data = [
	{
		emoji: '🍎',
		value: 'Apples',
		description:
			'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
	},
	{
		emoji: '🍌',
		value: 'Bananas',
		description:
			'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
	},
	{
		emoji: '🥦',
		value: 'Broccoli',
		description:
			'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
	},
];

 const AccorditionCustom = () => {
	 const items = data.map((item) => (
		 <details  key={item.value} >
			 <summary>System configuration</summary>
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