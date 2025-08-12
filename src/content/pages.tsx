import { ButtonComponentProps } from "@/components/Button/Button";
import { ImageProps } from "next/image";
import { SliderCardProps } from "@/components/Cards/SliderCard/SliderCard";
import { FDAIcon } from "@/components/Icons/Icons";
import React from "react";
import AccorditionCustom from "@/components/AccorditionCustom/AccorditionCustom";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
interface Button  extends ButtonComponentProps  {
	children: string;
	href: string;
	variant?: string;
	size?: string;
	component: string;
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
}

export interface ScreenSection {
	type: 'hero' | string;
	component?: 'gallery';
	heading?: string | React.ReactNode;
	background?: ImageProps;
	image?: ImageProps;
	leading?: string;
	links?: Button[];
	link?: Button;
	cards?: Card[];
	slider?: SliderCardProps[];
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
			},
			{
				type: 'conditions',
				heading: 'FDA-Approved Conditions for Hyperbaric Oxygen Therapy',
				leading: 'Full list of 14 approved uses and 23 additional off-label applications',
				cards: [
					{
						heading: 14,
						description: 'On-Label',
						key: 'On-Label'
					},
					{
						heading: 23,
						description: 'Off-Label',
						key: 'Off-Label'
					},
					{
						heading: <FDAIcon/>,
						description: 'Approved',
						key: 'approved'
					}
				],
				links: [
					{
						children: '🧠 Neurology',
						href: '/neurology',
						component: 'a',
						variant: 'icon',
						size: 'xs',
					},
					{
						children: '🦠 Infection / Immunity',
						href: '/infection',
						variant: 'icon',
						size: 'xs',
						component: 'a'
					},
					{
						children: '🦴 Orthopedics / Trauma',
						href: '/trauma',
						variant: 'icon',
						size: 'xs',
						component: 'a'
					},
					{
						children: '❤ Recovery & Rehabilitation',
						href: '/rehabilitation',
						variant: 'icon',
						size: 'xs',
						component: 'a'
					},
					{
						children: '🔥 Burns & Emergency Conditions',
						href: '/emergency-conditions',
						variant: 'icon',
						size: 'xs',
						component: 'a'
					},
					{
						children: '🧬 Chronic Inflammatory Conditions',
						href: '/chronic-inflammatory-conditions',
						variant: 'icon',
						size: 'xs',
						component: 'a'
					},
					{
						children: '☢️ Oncology',
						href: '/oncology',
						variant: 'icon',
						size: 'xs',
						component: 'a'
					}
				],
				link: {
					variant: 'link',
					children: 'View All Diagnoses',
					href: '#',
					component: 'a'
				}
			},
			{
				type: 'oxygen',
				heading: 'What is Hyperbaric Oxygen Therapy?',
				leading: 'Hyperbaric oxygen therapy (HBOT) is a scientifically backed treatment that enhances healing by delivering 100% oxygen in a pressurized chamber. It’s used to support recovery from a wide range of medical conditions—from chronic wounds to surgical recovery and inflammation.',
				background: {
					alt:'',
					src: '/images/oxy_index.png'
				},
				link: {
					children: 'Learn How HBOT Works',
					href: '/hbot',
					component: 'a',
					variant: 'primary',

				}
			},
			{
				type: 'benefits',
				heading: 'Our Benefits',
				leading: 'Discover what makes our care unique — science-backed protocols, measurable outcomes, and physician-guided support every step of the way.',
				cards: [
					{
						key: 'fda',
						heading: 'FDA-cleared Treatments',
						description: 'Scientifically validated therapies for complex recovery cases',
						image: {
							width: 300,
							height: 180,
							alt:'',
							src: '/images/benefits_index_1.png'
						}
					},
					{
						key: 'accepted',
						heading: 'Insurance Accepted',
						description: 'Covered care for 14 approved conditions with physician referral',
						image: {
							width: 300,
							height: 180,
							alt:'',
							src: '/images/benefits_index_2.png'
						}
					},
					{
						key: 'doctor-led-care',
						heading: 'Doctor-Led Care',
						description: 'Every treatment is overseen by licensed medical professionals',
						image: {
							width: 300,
							height: 180,
							alt:'',
							src: '/images/benefits_index_3.png'
						}
					},

				]
			},
			{
				type: 'heading_img',
				heading: <>{'Where advanced medicine'} <i data-bgimg/>  {`delivers real results`}</>
			},
			{
				type: 'real-stories',
				component: 'gallery',
				heading: 'Real Stories. Lasting Results',
				leading: 'Hear directly from patients and physicians about their healing journeys with physician-guided hyperbaric oxygen therapy.',
				slider: [
					{
						key: 'doctor',
						label: 'doctor',
						color: 'blue',
						subheading: 'Post-radiation recovery',
						heading: 'Dr. Laila Chen, DO',
						stars: 3,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'coordinator',
						label: 'Coordinator',
						color: 'yellow',
						subheading: 'Post-radiation recovery',
						heading: 'Dr. Laila Chen, DO',
						stars: 3,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'patient',
						label: 'Patient',
						color: 'green',
						subheading: 'Wound Care Specialist',
						heading: 'Dr. Laila Chen, DO',
						stars: 3,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'doctor2',
						label: 'doctor',
						color: 'blue',
						subheading: 'Wound Care Specialist',
						heading: 'Dr. Laila Chen, DO',
						stars: 3,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'doctor3',
						label: 'doctor',
						color: 'blue',
						subheading: 'Wound Care Specialist',
						heading: 'Dr. Laila Chen, DO',
						stars: 3,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'doctor123',
						label: 'doctor',
						color: 'blue',
						subheading: 'Post-radiation recovery',
						heading: 'Dr. Laila Chen, DO',
						stars: 3,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'coordinator4324',
						label: 'Coordinator',
						color: 'yellow',
						subheading: 'Post-radiation recovery',
						heading: 'Dr. Laila Chen, DO',
						stars: 1,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'patient5454',
						label: 'Patient',
						color: 'green',
						subheading: 'Wound Care Specialist',
						heading: 'Dr. Laila Chen, DO',
						stars: 5,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'doctor1235432',
						label: 'doctor',
						color: 'blue',
						subheading: 'Wound Care Specialist',
						heading: 'Dr. Laila Chen, DO',
						stars: 4,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					},
					{
						key: 'doctor123213123',
						label: 'doctor',
						color: 'blue',
						subheading: 'Wound Care Specialist',
						heading: 'Dr. Laila Chen, DO',
						stars: 2,
						description: 'I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.'
					}
				]
			},

			{
				type: 'insurance',
				heading: 'Insurance Plans We Accept',
				leading: 'Our clinic is in-network with leading providers to help you access covered care with confidence.',
				cards: [
					{
						key: 'Medicare-Medicaid',
						heading: 'Medicare / Medicaid',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/1.png'
						}
					},
					{
						key: 'Blue-Cross-Blue-Shield',
						heading: 'Blue Cross Blue Shield (BCBS)',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/2.png'
						}
					},
					{
						key: 'United-Healthcare',
						heading: 'United Healthcare',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/3.png'
						}
					},
					{
						key: 'Cigna',
						heading: 'Cigna',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/4.png'
						}
					},
					{
						key: 'Humana',
						heading: 'Humana',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/5.png'
						}
					},
					{
						key: 'Aetna',
						heading: 'Aetna',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/6.png'
						}
					},
					{
						key: 'Tricare',
						heading: 'Tricare',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/7.png'
						}
					}
				]
			}
		]
	},
	'what-is-hbot': {
		title: 'Every breath, clinically supported',
		description: 'Hyperbaric oxygen therapy is a medical treatment that helps treat many different medical conditions. It involves breathing 100% oxygen while in a pressurized chamber.',
		sections: [
			{
				type: 'hero',
				heading: 'What is Hyperbaric Oxygen Therapy?',
				background: {
					alt:'',
					src: '/images/oxy_index.png'
				},
				leading: 'Hyperbaric oxygen therapy is a medical treatment that helps treat many different medical conditions. It involves breathing 100% oxygen while in a pressurized chamber.'
			},
			{
				type: 'what-therapy',
				heading: 'What is Hyperbaric Oxygen Therapy?',
				leading: 'Hyperbaric oxygen therapy is a medical treatment that helps treat many different medical conditions. It involves breathing 100% oxygen while in a pressurized chamber.',
				image: {
					width: 1116,
					height: 500,
					src: '/images/what-is-hbat/oxygen.png',
					alt: ''
				},
				cards: [
					{
						heading: 'How does it affect healing?',
						children: <p>The pressure in the Hyperbaric Chamber increases the oxygen that your lungs take in. From the lungs, the oxygen is then absorbed into the blood. This stimulates the release of stem cells and growth factors that increase healing and fight infection.</p>,
						key: '01'
					},
					{
						heading: 'How should I prepare for HBO therapy?',
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: '02'
					},
					{
						heading: 'How should I prepare for HBO therapy?',
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: '03'
					},
					{
						heading: 'How should I prepare for HBO therapy?',
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: '04'
					}
				]
			},
			{
				type: 'case-study',
				heading: 'Oxygen That Heals: A Real-World Case Study',
				leading: 'See how tech entrepreneur Bryan Johnson used hyperbaric oxygen therapy for 90 days to enhance recovery, energy, and biological resilience.',
				image: {
					width: 1116,
					height: 627,
					src: '/images/what-is-hbat/oxygen2.png',
					alt: ''
				}
			},
			{
				type: 'why',
				heading: 'Why Choose Health PRTCL?',
				leading: 'Hyperbaric oxygen therapy supports healing from a wide range of medical conditions by delivering pure oxygen in a pressurized chamber. At Health PRTCL, every session is guided by licensed medical professionals using trusted clinical protocols.',
				cards: [
					{
						key: 'fda',
						heading: 'Elena Torres, RN',
						subtitle: 'Registered Nurse',
						leading: 'Compassionate care meets clinical precision',
						children: <><p>With over 12 years in patient-focused nursing, Elena brings warmth, structure, and deep clinical expertise to every recovery journey. After working in surgical and wound care units across California, she joined PRTCL to focus on long-term healing through HBOT.</p>
							<p><strong>Trust Note:</strong><br/>
								Board-certified RN with additional training in chronic wound management and trauma-informed care.</p></>,
						image: {
							width: 300,
							height: 300,
							alt:'',
							src: '/images/what-is-hbat/cards/1.png'
						}
					},
					{
						key: 'accepted',
						heading: 'Elena Torres, RN',
						subtitle: 'Registered Nurse',
						leading: 'Leading clinical strategy with a human-first mindset',
						children: <><p>With over 12 years in patient-focused nursing, Elena brings warmth, structure, and deep clinical expertise to every recovery journey. After working in surgical and wound care units across California, she joined PRTCL to focus on long-term healing through HBOT.</p>
							<p><strong>Trust Note:</strong><br/>
								Board-certified RN with additional training in chronic wound management and trauma-informed care.</p></>,
						image: {
							width: 300,
							height: 300,
							alt:'',
							src: '/images/what-is-hbat/cards/2.png'
						}
					},
					{
						key: 'doctor-led-care',
						heading: 'Elena Torres, RN',
						subtitle: 'Registered Nurse',
						leading: 'Compassionate care meets clinical precision',
						children: <><p>With over 12 years in patient-focused nursing, Elena brings warmth, structure, and deep clinical expertise to every recovery journey. After working in surgical and wound care units across California, she joined PRTCL to focus on long-term healing through HBOT.</p>
							<p><strong>Trust Note:</strong><br/>
								Board-certified RN with additional training in chronic wound management and trauma-informed care.</p></>,
						image: {
							width: 300,
							height: 300,
							alt:'',
							src: '/images/what-is-hbat/cards/3.png'
						}
					},

				]
			}
		]
	},
	insurance: {
		title: 'Get Your Patient Covered with HBOT',
		description: 'Get Your Patient Covered with HBOT',
		sections: [
			{
				type: 'hero',
				heading: 'Get Your Patient Covered with HBOT',
				leading: 'Get Your Patient Covered with HBOT',
			},
			{
				type: 'steps',
				cards: [
					{
						heading: 'How does it affect healing?',
						description: 'We treat 14 FDA-cleared conditions with insurance coverage. See full list of approved diagnoses and referring specialties below.',
						children: <AccorditionCustom/>,
						key: '01'
					},
					{
						heading: 'How should I prepare for HBO therapy?',
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: '02'
					},
					{
						heading: 'How should I prepare for HBO therapy?',
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: '03'
					},
					{
						heading: 'How should I prepare for HBO therapy?',
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: '04'
					}
				]
			},
			{
				type: 'insurance',
				heading: 'We Accept Most Major Insurance Plans',
				leading: 'Our clinic is in-network with leading providers to help you access covered care with confidence.',
				cards: [
					{
						key: 'Medicare-Medicaid',
						heading: 'Medicare / Medicaid',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/1.png'
						}
					},
					{
						key: 'Blue-Cross-Blue-Shield',
						heading: 'Blue Cross Blue Shield (BCBS)',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/2.png'
						}
					},
					{
						key: 'United-Healthcare',
						heading: 'United Healthcare',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/3.png'
						}
					},
					{
						key: 'Cigna',
						heading: 'Cigna',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/4.png'
						}
					},
					{
						key: 'Humana',
						heading: 'Humana',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/5.png'
						}
					},
					{
						key: 'Aetna',
						heading: 'Aetna',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/6.png'
						}
					},
					{
						key: 'Tricare',
						heading: 'Tricare',
						image: {
							width: 300,
							height: 100,
							alt:'',
							src: '/images/insuranse/7.png'
						}
					}
				]
			}
		]
	}
}