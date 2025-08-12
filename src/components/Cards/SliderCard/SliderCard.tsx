import React from "react";
import styles from "./SliderCard.module.css";
import Image from "next/image";
import { StarIcon } from "@/components/Icons/Icons";
import { SliderCardProps } from "@/utils/types";

const Stars = ({ stars }: { stars:number }) => {

	const result = [];
	const totalStars = 5;

	for (let i = 0; i < totalStars; i++) {
		result.push(<StarIcon key={i+'star'} width={"1.25rem"} fill={stars > i ? 'var(--color-primary)' : 'none'} height={"1.25rem"}/>);
	}
	return result;
};

 const SliderCard = ({ children, className = "", heading, description, image, stars, color, label, subheading }: SliderCardProps) => {
	 return (
		 <div className={`${styles.SliderCard} ${className}`} data-card-color={color}>
			 {label ? <span className={styles.label}>{label}</span> : null}
			 {heading ? <h4>{heading}</h4> : null}
			 {subheading ? <span className={styles.subheading}>{subheading}</span> : null}
			 {stars ? <span className={styles.stars}>
				 <Stars stars={stars}/>
			 </span> : null}
			 {description ? <p className={'mt-16'}>{description}</p> : null}
			 {image ? <Image src={image.src} alt={''} width={image.width} height={image.height} /> : null}
			 {children}
		 </div>
	 );
};

export default SliderCard;