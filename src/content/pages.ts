import { ButtonComponentProps } from "@/components/Button/Button";
import { ImageProps } from "next/image";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
interface Button  extends ButtonComponentProps  {
	children: string;
	href: string;
	variant?: string;
	size?: string;
	component: string;
}

export interface ScreenSection {
	type: 'hero' | string;
	heading: string;
	background?: ImageProps;
	leading?: string;
	links?: Button[];
}

interface PageContent {
	[keyof: string]: {
		title: string;
		description: string;
		sections: ScreenSection[];
	}
}
export const pages:PageContent = {
	index: {
		title: 'Every breath, clinically supported',
		description: 'Every breath, clinically supported',
		sections: [
			{
				type: 'hero',
				heading: 'Every breath, clinically supported',
				background: {
					alt:'',
					src: '/images/hero_index.jpg'
				},
				leading: 'Hyperbaric oxygen therapy to help you recover faster, feel stronger, and heal better. FDA-cleared treatments, overseen by physicians, and covered by insurance.',
				links: [
					{
						children: 'Refer a Patient',
						href: '/refer-a-patient',
						variant: 'primary',
						component: 'a'
					},
					{
						children: 'Book Now',
						href: '/book-now',
						variant: 'glass',
						component: 'a'
					}
				]
			}
		]
	}
}