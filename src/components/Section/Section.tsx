import React from "react";
import styles from "./Section.module.css";
import Button, { ButtonComponentProps } from "@/components/Button/Button";
import { ScreenSection } from "@/content/pages";
import Image from "next/image";

type SectionProps = {
	children?: React.ReactNode | string;
	className?: string;
	leading?: string;
	links?: ButtonComponentProps[];
} & ScreenSection

 const Section = ({ children, className = "", links, leading, heading, background, type}:SectionProps) => {
	const TitleSection = () => type === 'hero' ? <h1>{heading}</h1> : <h2>{heading}</h2>;

	return (
		<section className={`${styles.Section} ${className}`} data-type={type}>
			{background ? <Image fill style={{
				zIndex: 0
			}} src={background.src} alt={''}/> : null}
			<hgroup>
				<TitleSection/>
				{leading ? <p>{ leading }</p> : null}
			</hgroup>
			<div className={styles.links}>
				{links?.map((l) => (
					<Button key={l.href} {...l}>{l.children}</Button>
				))}
			</div>

			{children}
		</section>
	);
};

export default Section;