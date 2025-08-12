import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { Card as CardP } from "@/content/pages";

export type CardProps = CardP

const Card = ({ children, leading, subtitle, className = "", heading, description, image }: CardProps) => {
	return (
		<div className={`${styles.Card} ${className}`}>
			{heading ? <h4>{heading}</h4> : null}
			{subtitle ? <h6>{subtitle}</h6> : null}
			{leading ? <p data-card={'leading'}>{leading}</p> : null}
			{description ? <p>{description}</p> : null}
			{image ? <Image src={image.src} alt={''} width={image.width} height={image.height} /> : null}
			{children}
		</div>
	);
};

export default Card;