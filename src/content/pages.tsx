import { ClockIcon, FDAIcon, WaveIcon } from "@/components/Icons/Icons";
import React from "react";
import AccorditionCustom from "@/components/AccorditionCustom/AccorditionCustom";
import { faqDataAccordition, insuranceDataAccordition } from "@/content/accorditions";
import { PageContent } from "@/utils/types";
import Link from "next/link";
import FormBook from "@/components/Forms/FormBook";

const priceLabels = ['Single', '3 pack','5 pack','10 pack','20 pack'];
const priceCards =	{
		restore: [
			[null, 200],
			[750, 540],
			[1250, 900],
			[2500, 1700],
			[5000, 3000]
		],
		recovery: [
			[null, 300],
			[750, 810],
			[1250, 900],
			[2500, 1700],
			[5000, 3000]
		],
		renewal: [
			[null, 400],
			[750, 1080],
			[1250, 1800],
			[2500, 3400],
			[5000, 6000]
		]
};

export const pages:PageContent = {
	index: {
		title: "Every breath, clinically supported",
		description: "Every breath, clinically supported",
		sections: [
			{
				type: "hero",
				heading: "Every breath, clinically supported",
				background: {
					alt: "",
					src: "/images/hero_index.jpg",
				},
				leading: "Hyperbaric oxygen therapy to help you recover faster, feel stronger, and heal better. FDA-cleared treatments, overseen by physicians, and covered by insurance.",
				links: [
					{
						children: "Refer a Patient",
						href: "refer-a-patient",
						variant: "primary",
						component: "a",
					},
					{
						children: "Book Now",
						href: "/book-now",
						variant: "glass",
						component: "a",
					},
				],
			},
			{
				type: "conditions",
				heading: "FDA-Approved Conditions for Hyperbaric Oxygen Therapy",
				leading: "Full list of 14 approved uses and 23 additional off-label applications",
				cards: [
					{
						heading: 14,
						description: "On-Label",
						key: "On-Label",
					},
					{
						heading: 23,
						description: "Off-Label",
						key: "Off-Label",
					},
					{
						heading: <FDAIcon />,
						description: "Approved",
						key: "approved",
					},
				],
				links: [
					{
						children: "🧠 Neurology",
						href: "/neurology",
						component: "a",
						variant: "icon",
						size: "xs",
					},
					{
						children: "🦠 Infection / Immunity",
						href: "/infection",
						variant: "icon",
						size: "xs",
						component: "a",
					},
					{
						children: "🦴 Orthopedics / Trauma",
						href: "/trauma",
						variant: "icon",
						size: "xs",
						component: "a",
					},
					{
						children: "❤ Recovery & Rehabilitation",
						href: "/rehabilitation",
						variant: "icon",
						size: "xs",
						component: "a",
					},
					{
						children: "🔥 Burns & Emergency Conditions",
						href: "/emergency-conditions",
						variant: "icon",
						size: "xs",
						component: "a",
					},
					{
						children: "🧬 Chronic Inflammatory Conditions",
						href: "/chronic-inflammatory-conditions",
						variant: "icon",
						size: "xs",
						component: "a",
					},
					{
						children: "☢️ Oncology",
						href: "/oncology",
						variant: "icon",
						size: "xs",
						component: "a",
					},
				],
				link: {
					variant: "link",
					children: "View All Diagnoses",
					href: "#",
					component: "a",
				},
			},
			{
				type: "oxygen",
				heading: "What is Hyperbaric Oxygen Therapy?",
				leading: "Hyperbaric oxygen therapy (HBOT) is a scientifically backed treatment that enhances healing by delivering 100% oxygen in a pressurized chamber. It’s used to support recovery from a wide range of medical conditions—from chronic wounds to surgical recovery and inflammation.",
				background: {
					alt: "",
					src: "/images/oxy_index.png",
				},
				link: {
					children: "Learn How HBOT Works",
					href: "what-is-hbot",
					component: "a",
					variant: "primary",

				},
			},
			{
				type: "benefits",
				heading: "Our Benefits",
				leading: "Discover what makes our care unique — science-backed protocols, measurable outcomes, and physician-guided support every step of the way.",
				cards: [
					{
						key: "fda",
						heading: "FDA-cleared Treatments",
						description: "Scientifically validated therapies for complex recovery cases",
						image: {
							width: 300,
							height: 180,
							alt: "",
							src: "/images/benefits_index_1.png",
						},
					},
					{
						key: "accepted",
						heading: "Insurance Accepted",
						description: "Covered care for 14 approved conditions with physician referral",
						image: {
							width: 300,
							height: 180,
							alt: "",
							src: "/images/benefits_index_2.png",
						},
					},
					{
						key: "doctor-led-care",
						heading: "Doctor-Led Care",
						description: "Every treatment is overseen by licensed medical professionals",
						image: {
							width: 300,
							height: 180,
							alt: "",
							src: "/images/benefits_index_3.png",
						},
					},

				],
			},
			{
				type: "heading_img",
				heading: <>{"Where advanced medicine"} <i data-bgimg /> {`delivers real results`}</>,
			},
			{
				type: "real-stories",
				component: "gallery",
				heading: "Real Stories. Lasting Results",
				leading: "Hear directly from patients and physicians about their healing journeys with physician-guided hyperbaric oxygen therapy.",
				slider: [
					{
						key: "doctor",
						label: "doctor",
						color: "blue",
						subheading: "Post-radiation recovery",
						heading: "Dr. Laila Chen, DO",
						stars: 3,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "coordinator",
						label: "Coordinator",
						color: "yellow",
						subheading: "Post-radiation recovery",
						heading: "Dr. Laila Chen, DO",
						stars: 3,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "patient",
						label: "Patient",
						color: "green",
						subheading: "Wound Care Specialist",
						heading: "Dr. Laila Chen, DO",
						stars: 3,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "doctor2",
						label: "doctor",
						color: "blue",
						subheading: "Wound Care Specialist",
						heading: "Dr. Laila Chen, DO",
						stars: 3,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "doctor3",
						label: "doctor",
						color: "blue",
						subheading: "Wound Care Specialist",
						heading: "Dr. Laila Chen, DO",
						stars: 3,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "doctor123",
						label: "doctor",
						color: "blue",
						subheading: "Post-radiation recovery",
						heading: "Dr. Laila Chen, DO",
						stars: 3,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "coordinator4324",
						label: "Coordinator",
						color: "yellow",
						subheading: "Post-radiation recovery",
						heading: "Dr. Laila Chen, DO",
						stars: 1,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "patient5454",
						label: "Patient",
						color: "green",
						subheading: "Wound Care Specialist",
						heading: "Dr. Laila Chen, DO",
						stars: 5,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "doctor1235432",
						label: "doctor",
						color: "blue",
						subheading: "Wound Care Specialist",
						heading: "Dr. Laila Chen, DO",
						stars: 4,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
					{
						key: "doctor123213123",
						label: "doctor",
						color: "blue",
						subheading: "Wound Care Specialist",
						heading: "Dr. Laila Chen, DO",
						stars: 2,
						description: "I refer my patients to PRTCL when we need medically supervised tissue recovery that actually moves the needle. Their adherence to FDA protocols and clinical transparency gives me full confidence in their team.",
					},
				],
			},

			{
				type: "insurance",
				heading: "Insurance Plans We Accept",
				leading: "Our clinic is in-network with leading providers to help you access covered care with confidence.",
				cards: [
					{
						key: "Medicare-Medicaid",
						heading: "Medicare / Medicaid",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/1.png",
						},
					},
					{
						key: "Blue-Cross-Blue-Shield",
						heading: "Blue Cross Blue Shield (BCBS)",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/2.png",
						},
					},
					{
						key: "United-Healthcare",
						heading: "United Healthcare",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/3.png",
						},
					},
					{
						key: "Cigna",
						heading: "Cigna",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/4.png",
						},
					},
					{
						key: "Humana",
						heading: "Humana",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/5.png",
						},
					},
					{
						key: "Aetna",
						heading: "Aetna",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/6.png",
						},
					},
					{
						key: "Tricare",
						heading: "Tricare",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/7.png",
						},
					},
				],
			},
		],
	},
	contacts: {
		title: "Every breath, clinically supported",
		description: "Every breath, clinically supported",
		sections: [
			{
				type: "hero",
				background: {
					alt: "",
					src: "/images/visitus.png",
				},
			},
			{
				type: "visitus",
				heading: "Visit Us",
				leading: "Whether you’re ready to book, need more information, or just have a question — our team is here to help, both online and in person.",
			},
			{
				type: "location",
				heading: "Our Location",
			},
		],
	},
	"refer-a-patient": {
		title: "Every breath, clinically supported",
		description: "Every breath, clinically supported",
		sections: [
			{
				type: "hero",
				background: {
					alt: "",
					src: "/images/refer.png",
				},
			},
			{
				type: "visitus",
				heading: "Refer a Patient",
				leading: "Simplified access to FDA-cleared HBOT — trusted by physicians, designed for optimal patient recovery.",
			},
		],
	},
	"book-now": {
		title: "Book Your Session",
		description: "For patients without insurance, we offer clear and flexible payment options — no hidden fees, just transparent care.",
		sections: [
			{
				type: "hero",
				heading: "Book Your Session",
				leading: "Choose a convenient time for your session. You’re just a few clicks away from starting your HBOT treatment.",
			},
			{
				type: 'form',
				children: <FormBook/>
			}
		],
	},
	prices: {
		title: "Pricing",
		description: "For patients without insurance, we offer clear and flexible payment options — no hidden fees, just transparent care.",
		sections: [
			{
				type: "hero",
				heading: "Pricing",
				leading: "For patients without insurance, we offer clear and flexible payment options — no hidden fees, just transparent care.",
			},
			{
				type: "treatment",
				heading: "Treatment Packages",
				leading: "Ongoing care at preferred rates — structured to support your recovery.",
				cards: [
					{
						key: "card-restore",
						heading: <><WaveIcon/>Restore</>,
						subtitle: <><ClockIcon/>60 minutes</>,
						leading: "Hyperbaric Oxygen Therapy",
						children: <ul>
								{priceCards["restore"].map((price, index) => <li key={price[1]}>
									<strong>{priceLabels[index]}</strong>
									<span>{price[1]}</span>
								</li>)}
							</ul>
						,
						links: [
							{
								component: 'a',
								href: '/book-now?type=renewal',
								children: 'Book Now →',
								variant: "custom"
							}
						]
					},
					{
						key: "card-recovery",
						heading: <><WaveIcon/>Recovery</>,
						subtitle:  <><ClockIcon/>90 minutes</>,
						leading: "Hyperbaric Oxygen Therapy",
						children: <ul>
								{priceCards["recovery"].map((price, index) => <li key={price[1]}>
									<strong>{priceLabels[index]}</strong>
									<span>{price[1]}</span>
								</li>)}
							</ul>
						,
						links: [
							{
								component: 'a',
								href: '/book-now?type=renewal',
								children: 'Book Now →',
								variant: "custom"
							}
						]
					},
					{
						key: "card-Renewal",
						heading: <><WaveIcon/>Renewal</>,
						subtitle: <><ClockIcon/>120 minutes</>,
						leading: "Hyperbaric Oxygen Therapy",
						children: <ul>
								{priceCards["restore"].map((price, index) => <li key={price[1]}>
									<strong>{priceLabels[index]}</strong>
									<span>{price[1]}</span>
								</li>)}
							</ul>
						,
						links: [
							{
								component: 'a',
								href: '/book-now?type=renewal',
								children: 'Book Now →',
								variant: "custom"
							}
						]
					}
				]
			},
			{
				type: 'transparent-pricing-for-personalized-care',
				leading: <h3 className={'text-left'}>Transparent Pricing for Personalized Care</h3>,
				children: <div>
					<p>At PRTCL, we believe advanced care should be accessible, straightforward, and free of hidden fees. While many of our treatments are covered by insurance, we also offer membership plans designed for those seeking proactive wellness, recovery support, or long-term performance optimization — even without a medical diagnosis.</p>
					<p>Note: Our <strong>membership</strong> plans are not covered by insurance. These self-pay programs are ideal for individuals looking to incorporate Hyperbaric Oxygen Therapy (HBOT) into their wellness strategy. Each plan includes a set number of sessions, flexible scheduling, and access to our experienced care team.</p>
					<p>Whether you’re recovering from surgery, managing chronic fatigue, or proactively investing in your long-term health, our three flexible membership options — Restore, Recovery, and Renewal — are tailored to meet your goals.</p>
					<p>Not sure which option is best for you? Contact our team for personalized guidance, or book a <Link href={'book-now'}>consultation.</Link></p>
				</div>
			}
		],
	},
	"what-is-hbot": {
		title: "Every breath, clinically supported",
		description: "Hyperbaric oxygen therapy is a medical treatment that helps treat many different medical conditions. It involves breathing 100% oxygen while in a pressurized chamber.",
		sections: [
			{
				type: "hero",
				heading: "What is Hyperbaric Oxygen Therapy?",
				background: {
					alt: "",
					src: "/images/oxy_index.png",
				},
				leading: "Hyperbaric oxygen therapy is a medical treatment that helps treat many different medical conditions. It involves breathing 100% oxygen while in a pressurized chamber.",
			},
			{
				type: "what-therapy",
				heading: "What is Hyperbaric Oxygen Therapy?",
				leading: "Hyperbaric oxygen therapy is a medical treatment that helps treat many different medical conditions. It involves breathing 100% oxygen while in a pressurized chamber.",
				image: {
					width: 1116,
					height: 500,
					src: "/images/what-is-hbat/oxygen.png",
					alt: "",
				},
				cards: [
					{
						heading: "How does it affect healing?",
						children: <p>The pressure in the Hyperbaric Chamber increases the oxygen that your lungs take
							in. From the lungs, the oxygen is then absorbed into the blood. This stimulates the release
							of stem cells and growth factors that increase healing and fight infection.</p>,
						key: "01",
					},
					{
						heading: "How should I prepare for HBO therapy?",
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: "02",
					},
					{
						heading: "How should I prepare for HBO therapy?",
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: "03",
					},
					{
						heading: "How should I prepare for HBO therapy?",
						children: <ul>
							<li>Eat a good meal prior to each session and take any prescribed medications.</li>
							<li>Wear cotton socks and cotton underwear.</li>
							<li>It is very important to maintain good hygiene and health during treatments.</li>
						</ul>,
						key: "04",
					},
				],
			},
			{
				type: "case-study",
				heading: "Oxygen That Heals: A Real-World Case Study",
				leading: "See how tech entrepreneur Bryan Johnson used hyperbaric oxygen therapy for 90 days to enhance recovery, energy, and biological resilience.",
				image: {
					width: 1116,
					height: 627,
					src: "/images/what-is-hbat/oxygen2.png",
					alt: "",
				},
			},
			{
				type: "why",
				heading: "Why Choose Health PRTCL?",
				leading: "Hyperbaric oxygen therapy supports healing from a wide range of medical conditions by delivering pure oxygen in a pressurized chamber. At Health PRTCL, every session is guided by licensed medical professionals using trusted clinical protocols.",
				cards: [
					{
						key: "fda",
						heading: "Elena Torres, RN",
						subtitle: "Registered Nurse",
						leading: "Compassionate care meets clinical precision",
						children: <><p>With over 12 years in patient-focused nursing, Elena brings warmth, structure,
							and deep clinical expertise to every recovery journey. After working in surgical and wound
							care units across California, she joined PRTCL to focus on long-term healing through
							HBOT.</p>
							<p><strong>Trust Note:</strong><br />
								Board-certified RN with additional training in chronic wound management and
								trauma-informed care.</p></>,
						image: {
							width: 300,
							height: 300,
							alt: "",
							src: "/images/what-is-hbat/cards/1.png",
						},
					},
					{
						key: "accepted",
						heading: "Elena Torres, RN",
						subtitle: "Registered Nurse",
						leading: "Leading clinical strategy with a human-first mindset",
						children: <><p>With over 12 years in patient-focused nursing, Elena brings warmth, structure,
							and deep clinical expertise to every recovery journey. After working in surgical and wound
							care units across California, she joined PRTCL to focus on long-term healing through
							HBOT.</p>
							<p><strong>Trust Note:</strong><br />
								Board-certified RN with additional training in chronic wound management and
								trauma-informed care.</p></>,
						image: {
							width: 300,
							height: 300,
							alt: "",
							src: "/images/what-is-hbat/cards/2.png",
						},
					},
					{
						key: "doctor-led-care",
						heading: "Elena Torres, RN",
						subtitle: "Registered Nurse",
						leading: "Compassionate care meets clinical precision",
						children: <><p>With over 12 years in patient-focused nursing, Elena brings warmth, structure,
							and deep clinical expertise to every recovery journey. After working in surgical and wound
							care units across California, she joined PRTCL to focus on long-term healing through
							HBOT.</p>
							<p><strong>Trust Note:</strong><br />
								Board-certified RN with additional training in chronic wound management and
								trauma-informed care.</p></>,
						image: {
							width: 300,
							height: 300,
							alt: "",
							src: "/images/what-is-hbat/cards/3.png",
						},
					},

				],
			},
		],
	},
	insurance: {
		title: "Get Your Patient Covered with HBOT",
		description: "Get Your Patient Covered with HBOT",
		sections: [
			{
				type: "hero",
				heading: "Get Your Patient Covered with HBOT",
				leading: "Get Your Patient Covered with HBOT",
			},
			{
				type: "steps",
				cards: [
					{
						heading: "Confirm Medical Eligibility",
						description: "We treat 14 FDA-cleared conditions with insurance coverage. See full list of approved diagnoses and referring specialties below.",
						children: <AccorditionCustom itemss={insuranceDataAccordition} />,
						key: "01",
					},
					{
						heading: "Submit a Referral",
						children: <p>Patients must be referred by a licensed physician. You may upload your own referral
							form or use our standard template.</p>,
						key: "02",
						links: [
							{
								component: "a",
								variant: "primary",
								href: "refer-a-patient",
								children: "Refer a Patient",
								shadow: true,
							},
							{
								component: "a",
								variant: "default",
								href: "refer-a-patient",
								children: "Book Now",
								shadow: true,
							},
						],
					},
					{
						heading: "We Handle Coverage Verification",
						children: <p>After receiving a referral, our care team contacts the patient and their insurance
							provider to verify coverage and obtain any necessary pre-authorizations.</p>,
						key: "03",
					},
					{
						heading: "Begin Treatment",
						children: <p>Once coverage is confirmed, we schedule the patient’s first session and manage all
							required documentation and waivers.</p>,
						key: "04",
					},
				],
			},
			{
				type: "insurance",
				heading: "We Accept Most Major Insurance Plans",
				leading: "Our clinic is in-network with leading providers to help you access covered care with confidence.",
				cards: [
					{
						key: "Medicare-Medicaid",
						heading: "Medicare / Medicaid",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/1.png",
						},
					},
					{
						key: "Blue-Cross-Blue-Shield",
						heading: "Blue Cross Blue Shield (BCBS)",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/2.png",
						},
					},
					{
						key: "United-Healthcare",
						heading: "United Healthcare",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/3.png",
						},
					},
					{
						key: "Cigna",
						heading: "Cigna",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/4.png",
						},
					},
					{
						key: "Humana",
						heading: "Humana",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/5.png",
						},
					},
					{
						key: "Aetna",
						heading: "Aetna",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/6.png",
						},
					},
					{
						key: "Tricare",
						heading: "Tricare",
						image: {
							width: 300,
							height: 100,
							alt: "",
							src: "/images/insuranse/7.png",
						},
					},
				],
			},
		],
	},
	faq: {
		title: "Frequently Asked Questions",
		description: "Clear answers about treatments, insurance, and what to expect.",
		sections: [
			{
				type: "hero",
				heading: "Frequently Asked Questions",
				leading: "Clear answers about treatments, insurance, and what to expect.",
			},
			{
				type: "steps",
				children: <AccorditionCustom itemss={faqDataAccordition} />,
			},
		],
	},
	privacy: {
		title: "Pricing",
		description: "For patients without insurance, we offer clear and flexible payment options — no hidden fees, just transparent care.",
		sections: [
			{
				type: "hero",
				heading: "Privacy policy",
				leading: "Updated on April 19, 2024",
			},
			{
				type: "privacy",
				leading: <p>Welcome to the Mayo Clinic website, mobile app, and related sites and digital and online services (“Mayo Clinic Site,” the “Site,” or “Sites”), an online e-commerce, information, and communications service provided by Mayo Clinic and all affiliates (“Mayo Clinic” or “We” or “Us”).</p>,
				children: <>
						<p>We take your privacy seriously, and we want you to know how we collect, use, share, and protect your information. In addition to this privacy policy (“Privacy Policy”), users of the Mayo Clinic Site should consult the Mayo Clinic Site Terms of Use as well as any product-specific terms and conditions that apply. You may review policies specifically related to patient information (protected health information or PHI) submitted through Mayo Clinic&apos;s Patient Portal.</p>
						<p>This Privacy Policy applies to all Sites where it is posted. Other Mayo Clinic online properties may have their own privacy policies that apply to those sites. You should review those privacy policies in connection with your use of those sites.</p>
						<h3>What information we collect</h3>
						<p>Information you give us: We respect the right to privacy of all visitors to the Mayo Clinic Sites. We receive and store some information that you enter on our Sites or that you provide to us through the Sites in any other way.
							The information we collect or that you provide on or through our Sites or by using our services includes:</p>
						<ul>
							<li>Data that may personally identify you, including your name, postal address, billing address, shipping address, e-mail address, home, work and mobile telephone numbers, age, date of birth, social security number, insurance policy number, physical characteristics that may personally identify you, sexual orientation, IP address, bank account number, credit or debit card number (for payment purposes only), national origin, ancestry, veteran or military status, medical conditions, race, citizenship, information about any physical or mental disabilities you may have, information related to your religious or philosophical beliefs, political opinions, information regarding your gender at birth and how you currently express your gender identity, information related to your sex life, such as pregnancy, child birth and related medical conditions, any history of criminal convictions, biometric information (such as fingerprints, exercise data, psychological characteristics, face prints, gait patterns, genetics, behavioral characteristics, voice, sleep data, and iris/retina scans), and genetic information (including familial genetic information) (collectively,“Personal Data”)</li>
							<li>Information that you provide by filling in forms on our Sites, such as appointment request forms or product ordering forms. It also includes information you provide when you register to use our Sites, purchase products, or use services available through the Sites or facilities. We may also ask you for information when you report a problem with our Sites. Some forms collect sensitive information, such as health information, necessary for us to provide our services to you;</li>
							<li>Records and copies of your correspondence (including email addresses), if you contact us;</li>
							<li>Your responses to surveys that we might ask you to complete for research, development, and marketing purposes;</li>
							<li>Details of transactions you carry out through our Sites and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Sites.</li>
						</ul>
						<h3>Choices about how we use and disclose your information</h3>
						<p>Our sponsors and advertisers have agreed that they will not collect any personally identifiable information from our Site visitors while using our Sites; however, we do not control the use of cookies provided by other third parties, nor do we manage the information collected by other third parties. These third parties may aggregate the information they collect with information from their other customers for their own purposes and in accordance with their own respective privacy policies.</p>
						<p>In addition, we strive to provide you with choices regarding the Personal Data you provide to us. We have created or you have available mechanisms to provide you with control over your Personal Data:</p>
						<ul>
							<li>Cookie Settings and Advertising. You can set your browser or operating system to refuse all or some cookies or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of our Sites may then be inaccessible or not function properly.</li>
							<li>Promotional Offers from Mayo Clinic. If you do not wish to have your email address used by us to promote our own products and services, you can opt-out at any time by clicking the unsubscribe link at the bottom of any email or other marketing communications you receive from us or submitting a request to our Preference Center. This opt-out does not apply to information provided to Mayo Clinic as a result of a product purchase or your use of our services. If you wish to opt-out of such sharing, please email us at <a href="mailto:mayoclinicpress@service.mayoclinic.com">mayoclinicpress@service.mayoclinic.com</a>.</li>
							<li>Disclosure of Your Information to Affiliates. By purchasing our products, you consent to our sharing of your Personal Data with our affiliates for their promotional purposes. If you wish to unsubscribe from such affiliate promotions, you can do so by clicking the unsubscribe link at the bottom of any email or other marketing communications you receive from them. If you wish to opt-out of such sharing, please email us at <a href="mailto:mayoclinicpress@service.mayoclinic.com">mayoclinicpress@service.mayoclinic.com</a>.</li>
							<li>Targeted Advertising. To learn more about interest-based advertisements and your opt-out rights and options, visit the Digital Advertising Alliance and the Network Advertising Initiative (NAI) websites (https://youradchoices.com/ and https://thenai.org/). Please note that if you choose to opt out, you will continue to see ads, but they will not be based on your online activity. We do not control third parties&apos; collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. You can also opt out of receiving targeted ads from members of the NAI on its website.</li>
						</ul>
						<h3>Your rights regarding your information and accessing and correcting your information</h3>
						<p>For non-patient information, you can Contact Us through the Contact Information below to access and/or find out what information we have about you and to correct that information. You can also review and change your Personal Data by logging into our site and visiting either the Settings or Account Preferences sections. You may also notify us through the Contact Information below of any changes or errors in any Personal Data we have about you to ensure that it is complete, accurate, and as current as possible or to delete your account. We cannot completely delete your personal information except by also deleting your account with us. We may not be able to accommodate your request if we believe it would violate any law or legal requirement or if we have a legal basis or obligation to maintain it, or if it would cause the information to be incorrect.</p>
						<p>If you are a patient of Mayo Clinic, you can access the patient-related information that we maintain about you through Patient Portal or through our health information management department. For more information about requesting your medical records, ask us or go online to the Patient and Visitor Guide for the location where you receive your care, then explore the release of information options: https://www.mayoclinic.org/patient-visitor-guide. You also can request a correction to your patient information through our Patient Portal or health information management department. In our mobile app, you can request to deactivate your account; however, we are still required maintain your patient-related information under the Health Insurance Portability and Accountability Act (HIPAA) and other federal and state law.</p>
						<h3>Contact information</h3>
						<p>If you have a question or concern regarding your privacy, please contact Mayo Clinic&apos;s Privacy Officer using the contact information below:</p>
						<ul>
							<li>Mayo Clinic Privacy Officer</li>
							<li>10375 Washington Blvd, Culver City, CA 90232</li>
							<li>302-333-4778</li>
							<li>info@healthprtcl.com</li>
						</ul>
					</>
			}
		]
	},
	terms: {
		title: "Pricing",
		description: "For patients without insurance, we offer clear and flexible payment options — no hidden fees, just transparent care.",
		sections: [
			{
				type: "hero",
				heading: "Terms & Condition",
				leading: "General Terms And Conditions For The Provision Of Health Care Services",
			},
			{
				type: "privacy",
				children: <>
						<p>We take your privacy seriously, and we want you to know how we collect, use, share, and protect your information. In addition to this privacy policy (“Privacy Policy”), users of the Mayo Clinic Site should consult the Mayo Clinic Site Terms of Use as well as any product-specific terms and conditions that apply. You may review policies specifically related to patient information (protected health information or PHI) submitted through Mayo Clinic&apos;s Patient Portal.</p>
						<p>This Privacy Policy applies to all Sites where it is posted. Other Mayo Clinic online properties may have their own privacy policies that apply to those sites. You should review those privacy policies in connection with your use of those sites.</p>
						<h3>What information we collect</h3>
						<p>Information you give us: We respect the right to privacy of all visitors to the Mayo Clinic Sites. We receive and store some information that you enter on our Sites or that you provide to us through the Sites in any other way.
							The information we collect or that you provide on or through our Sites or by using our services includes:</p>
						<ul>
							<li>Data that may personally identify you, including your name, postal address, billing address, shipping address, e-mail address, home, work and mobile telephone numbers, age, date of birth, social security number, insurance policy number, physical characteristics that may personally identify you, sexual orientation, IP address, bank account number, credit or debit card number (for payment purposes only), national origin, ancestry, veteran or military status, medical conditions, race, citizenship, information about any physical or mental disabilities you may have, information related to your religious or philosophical beliefs, political opinions, information regarding your gender at birth and how you currently express your gender identity, information related to your sex life, such as pregnancy, child birth and related medical conditions, any history of criminal convictions, biometric information (such as fingerprints, exercise data, psychological characteristics, face prints, gait patterns, genetics, behavioral characteristics, voice, sleep data, and iris/retina scans), and genetic information (including familial genetic information) (collectively,“Personal Data”)</li>
							<li>Information that you provide by filling in forms on our Sites, such as appointment request forms or product ordering forms. It also includes information you provide when you register to use our Sites, purchase products, or use services available through the Sites or facilities. We may also ask you for information when you report a problem with our Sites. Some forms collect sensitive information, such as health information, necessary for us to provide our services to you;</li>
							<li>Records and copies of your correspondence (including email addresses), if you contact us;</li>
							<li>Your responses to surveys that we might ask you to complete for research, development, and marketing purposes;</li>
							<li>Details of transactions you carry out through our Sites and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Sites.</li>
						</ul>
						<h3>Choices about how we use and disclose your information</h3>
						<p>Our sponsors and advertisers have agreed that they will not collect any personally identifiable information from our Site visitors while using our Sites; however, we do not control the use of cookies provided by other third parties, nor do we manage the information collected by other third parties. These third parties may aggregate the information they collect with information from their other customers for their own purposes and in accordance with their own respective privacy policies.</p>
						<p>In addition, we strive to provide you with choices regarding the Personal Data you provide to us. We have created or you have available mechanisms to provide you with control over your Personal Data:</p>
						<ul>
							<li>Cookie Settings and Advertising. You can set your browser or operating system to refuse all or some cookies or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of our Sites may then be inaccessible or not function properly.</li>
							<li>Promotional Offers from Mayo Clinic. If you do not wish to have your email address used by us to promote our own products and services, you can opt-out at any time by clicking the unsubscribe link at the bottom of any email or other marketing communications you receive from us or submitting a request to our Preference Center. This opt-out does not apply to information provided to Mayo Clinic as a result of a product purchase or your use of our services. If you wish to opt-out of such sharing, please email us at <a href="mailto:mayoclinicpress@service.mayoclinic.com">mayoclinicpress@service.mayoclinic.com</a>.</li>
							<li>Disclosure of Your Information to Affiliates. By purchasing our products, you consent to our sharing of your Personal Data with our affiliates for their promotional purposes. If you wish to unsubscribe from such affiliate promotions, you can do so by clicking the unsubscribe link at the bottom of any email or other marketing communications you receive from them. If you wish to opt-out of such sharing, please email us at <a href="mailto:mayoclinicpress@service.mayoclinic.com">mayoclinicpress@service.mayoclinic.com</a>.</li>
							<li>Targeted Advertising. To learn more about interest-based advertisements and your opt-out rights and options, visit the Digital Advertising Alliance and the Network Advertising Initiative (NAI) websites (https://youradchoices.com/ and https://thenai.org/). Please note that if you choose to opt out, you will continue to see ads, but they will not be based on your online activity. We do not control third parties&apos; collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. You can also opt out of receiving targeted ads from members of the NAI on its website.</li>
						</ul>
						<h3>Your rights regarding your information and accessing and correcting your information</h3>
						<p>For non-patient information, you can Contact Us through the Contact Information below to access and/or find out what information we have about you and to correct that information. You can also review and change your Personal Data by logging into our site and visiting either the Settings or Account Preferences sections. You may also notify us through the Contact Information below of any changes or errors in any Personal Data we have about you to ensure that it is complete, accurate, and as current as possible or to delete your account. We cannot completely delete your personal information except by also deleting your account with us. We may not be able to accommodate your request if we believe it would violate any law or legal requirement or if we have a legal basis or obligation to maintain it, or if it would cause the information to be incorrect.</p>
						<p>If you are a patient of Mayo Clinic, you can access the patient-related information that we maintain about you through Patient Portal or through our health information management department. For more information about requesting your medical records, ask us or go online to the Patient and Visitor Guide for the location where you receive your care, then explore the release of information options: https://www.mayoclinic.org/patient-visitor-guide. You also can request a correction to your patient information through our Patient Portal or health information management department. In our mobile app, you can request to deactivate your account; however, we are still required maintain your patient-related information under the Health Insurance Portability and Accountability Act (HIPAA) and other federal and state law.</p>
						<h3>Contact information</h3>
						<p>If you have a question or concern regarding your privacy, please contact Mayo Clinic&apos;s Privacy Officer using the contact information below:</p>
						<ul>
							<li>Mayo Clinic Privacy Officer</li>
							<li>10375 Washington Blvd, Culver City, CA 90232</li>
							<li>302-333-4778</li>
							<li>info@healthprtcl.com</li>
						</ul>
					</>
			}
		]
	},

};