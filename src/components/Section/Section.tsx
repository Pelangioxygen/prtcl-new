import React from "react";
import styles from "./Section.module.css";
import Button, { ButtonComponentProps } from "@/components/Button/Button";
import { ScreenSection, CardProps } from "@/utils/types";
import Image, { ImageProps } from "next/image";
import ImageResp from "@/components/ImageResp/ImageResp";
import Card from "@/components/Cards/Card/Card";
import CarouselTheme from "@/components/Carousel/Carousel";


type SectionProps = {
	children?: React.ReactNode | string;
	className?: string;
	leading?: string | React.ReactNode;
	image?: ImageProps;
	cards?: CardProps[];
	link?: ButtonComponentProps;
	links?: ButtonComponentProps[];
} & ScreenSection

 const Section = ({ children, image, className = "", headingOrder, links, link, leading, slider, cards, heading, background, type}:SectionProps) => {

	const TitleSection = () => (type === 'hero' || headingOrder) ? <h1>{heading}</h1> : heading ? <h2>{heading}</h2> : null;

	return (
		<section className={`${styles.Section} ${className}`} data-type={type}>

			{background ? <ImageResp image={{fill:true, style:{
				zIndex: 0
			},  src:background.src, srcMobile: background.srcMobile, srcTablet: background.srcTablet, alt:''}}/> : null}
			{(heading || leading || links && links.length) ? <div className={styles.contentWrapper} data-content="section-wrapper">
			{(heading || leading) ?<hgroup>
				<TitleSection/>
				{leading ? !(typeof leading === "string") ? leading : <p>{ leading }</p> : null}
			</hgroup> : null}

			{(links && links.length) ? <div className={styles.links} data-content={'section-links'}>
				{links?.map((l, index: number) => (
					<Button key={l.href as string + index} {...l}>{l.children}</Button>
				))}
			</div> : null}
			</div>: null}
			{image ? <div className={styles.image} data-content={'section-image'}>
				<Image src={image.src} width={image.width} height={image.height} alt={''}/>
			</div>: null}


			{(cards && cards.length) ? <div className={styles.cards} data-content={'section-cards'}>
				{cards?.map((c) => (
					<Card key={c.key} links={c.links} description={c.description}  leading={c.leading} subtitle={c.subtitle} className={c.className} heading={c.heading} image={c.image}>{c.children}</Card>
				))}
			</div> : null}
			<CarouselTheme cards={slider}/>
			{children ? <div className={styles.children}  data-content={'section-children'}>
				{children}
			</div> : null}

			{link ? <div className={styles.link}  data-content={'section-link'}>
				<Button {...link}>{link.children}</Button>
			</div> : null}

		</section>
	);
};

export default Section;