import React from "react";
import styles from "./Section.module.css";
import Button, { ButtonComponentProps } from "@/components/Button/Button";
import { ScreenSection } from "@/content/pages";
import Image, { ImageProps } from "next/image";
import Card, { CardProps } from "@/components/Cards/Card/Card";
import CarouselTheme from "@/components/Carousel/Carousel";

type SectionProps = {
	children?: React.ReactNode | string;
	className?: string;
	leading?: string;
	image?: ImageProps;
	cards?: CardProps[];
	link?: ButtonComponentProps;
	links?: ButtonComponentProps[];
} & ScreenSection

 const Section = ({ children, image, className = "", links, link, leading, slider, cards, heading, background, type}:SectionProps) => {

	const TitleSection = () => type === 'hero' ? <h1>{heading}</h1> : heading ? <h2>{heading}</h2> : null;

	return (
		<section className={`${styles.Section} ${className}`} data-type={type}>

			{background ? <Image fill style={{
				zIndex: 0
			}} src={background.src} alt={''}/> : null}

			<hgroup>
				<TitleSection/>
				{leading ? <p>{ leading }</p> : null}
			</hgroup>
			{image ? <div className={styles.image} data-content={'section-image'}>
				<Image src={image.src} width={image.width} height={image.height} alt={''}/>
			</div>: null}
			{(links && links.length) ? <div className={styles.links} data-content={'section-links'}>
				{links?.map((l) => (
					<Button key={l.href} {...l}>{l.children}</Button>
				))}
			</div> : null}

			{(cards && cards.length) ? <div className={styles.cards} data-content={'section-cards'}>
				{cards?.map((c) => (
					<Card key={c.key} description={c.description}  leading={c.leading} subtitle={c.subtitle} className={c.className} heading={c.heading} image={c.image}>{c.children}</Card>
						))}
			</div> : null}
			<CarouselTheme cards={slider}/>
			{children}

			{link ? <div className={styles.link}  data-content={'section-link'}>
				<Button {...link}>{link.children}</Button>
			</div> : null}

		</section>
	);
};

export default Section;