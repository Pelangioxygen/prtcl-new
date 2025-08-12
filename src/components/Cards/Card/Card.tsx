import React from "react";
import styles from "./Card.module.css";
import Image, { ImageProps } from "next/image";

export interface CardProps {
	key: string;
	children?: React.ReactNode;
	className?: string;
	subtitle?: string;
	leading?: string;
	heading?: string | React.ReactNode;
	description?: string | React.ReactNode;
	image?: ImageProps;
}

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