import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { CardProps } from "@/utils/types";



const Card = ({ children, links, leading, subtitle, className = "", heading, description, image }: CardProps) => {
	return (
		<div className={`${styles.Card} ${className}`}>
			{heading ? <h4>{heading}</h4> : null}
			{subtitle ? <h6>{subtitle}</h6> : null}
			{leading ? <p data-card={'leading'}>{leading}</p> : null}
			{description ? <p>{description}</p> : null}
			{image ? <Image src={image.src} alt={''} width={image.width} height={image.height} /> : null}

			{children}
			{(links && links.length) ? <div className={styles.links} data-content={'section-links'}>
				{links?.map((l, index: number) => (
					<Button key={l.href + index} {...l}>{l.children}</Button>
				))}
			</div> : null}
		</div>
	);
};

export default Card;