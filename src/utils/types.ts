import { ButtonComponentProps } from "@/components/Button/Button";
import React from "react";
import { ImageProps } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CardProps = Card
export interface SliderCardProps extends CardProps{
	children?: React.ReactNode;
	className?: string;
	subheading?: string;
	label?: string,
	color: 'blue' | 'yellow' | 'green' | string,
	stars: number,
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export interface Button  extends ButtonComponentProps  {
	children: string;
	href: string;
	variant?: string;
	size?: string;
	component: string;
	shadow?: boolean;
}
export interface Card {
	key: string;
	className?: string;
	heading?: string | React.ReactNode;
	subtitle?: string | React.ReactNode;
	leading?: string | React.ReactNode;
	image?: ImageProps;
	description?: string;
	children?: string | React.ReactNode;
	links?: Button[];
}

export interface ScreenSection {
	type: 'hero' | string;
	component?: 'gallery';
	children?: React.ReactNode | string;
	heading?: string | React.ReactNode;
	background?: ImageProps & {
		srcMobile?: string | StaticImport;
	};
	image?: ImageProps;
	leading?: string  | React.ReactNode;
	links?: Button[];
	link?: Button;
	cards?: Card[];
	slider?: SliderCardProps[];
}

export interface PageContent {
	[keyof: string]: {
		title: string;
		description: string;
		sections: ScreenSection[];
	}
}