'use client'
import React from "react";
import '@mantine/carousel/styles.css';
import styles from "./Carousel.module.css";

import { Carousel } from '@mantine/carousel';
import SliderCard from "@/components/Cards/SliderCard/SliderCard";
import { MantineProvider } from "@mantine/core";
import { SliderCardProps } from "@/utils/types";

 const CarouselTheme = ({cards}:{cards: SliderCardProps[] | undefined}) => {
	 if (!(!!cards)) return null;
	 return (
		 <MantineProvider>
			<div className={`${styles.Carousel} `} data-content={"section-carousel"}>
					<Carousel
						slideSize="25%"
						slideGap="sm"
						emblaOptions={{ dragFree: true, align: 'start' }}
						controlsOffset="md"
						controlSize={26}
						classNames={{
							indicators: styles.indicators,
							indicator: styles.indicator
						}}
						withIndicators height={"auto"}>
						{cards?.map((c) => (
							<Carousel.Slide key={c.key} >
								<SliderCard key={c.key}  label={c.label} color={c.color} subheading={c.subheading} description={c.description} className={c.className} heading={c.heading} image={c.image} stars={c.stars}>{c.children}</SliderCard>
							</Carousel.Slide>
						))}
					</Carousel>

			</div>
		 </MantineProvider>
	);
};

export default CarouselTheme;