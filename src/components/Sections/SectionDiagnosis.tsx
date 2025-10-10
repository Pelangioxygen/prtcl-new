
'use client'
import React, { useMemo, useState } from "react";
import styles from "./SectionDiagnosis.module.css";
import Button from "@/components/Button/Button";
import { useId } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const data = {
	descriptions: {
		"all": {
			on: [
				'Actinomycosis (Refractory)',
				'Air or Gas Embolism',
				'Carbon Monoxide Poisoning (with or without cyanide)',
				'Clostridial Myositis & Myonecrosis (Gas Gangrene)',
				'Compartment Syndrome / Crush Injury / Acute Traumatic Ischemias',
				'Compromised Skin Grafts and Flaps',
				'Decompression Sickness',
				'Delayed Radiation Injury (Soft Tissue / Bone Necrosis)',
				'Diabetic Foot Ulcers / Problem Wound Healing',
				'Exceptional Blood Loss Anemia',
				'Intracranial Abscess',
				'Necrotizing Soft Tissue Infections',
				'Osteomyelitis (Refractory)',
				'Thermal Burns',
			],
			off: [
				'Anoxic Brain Injury',
				'Arthritis',
				'Cancer (Treatment Synergy)',
				'Cerebral Palsy',
				'Chronic Fatigue Syndrome',
				'Chronic Pain',
				'Complex Regional Pain Syndrome (CRPS/RSD)',
				'Concussion & Traumatic Brain Injury',
				'Crohn’s Disease',
				'Fibromyalgia',
				'Inflammatory Bowel Disease',
				'Interstitial Cystitis',
				'Lyme Disease',
				'Migraine/Headache',
				'Multiple Sclerosis',
				'Retinitis Pigmentosa',
				'Pancreatitis',
				'Spinal Cord Injuries',
				'Sports Injuries',
				'Stroke',
				'Surgery Preparation & Accelerated Recovery',
				'Complications of Scleroderma',
				'Ulcerative Colitis',
			]
		},
		"neurology": {
			on: [
				'Air or Gas Embolism',
				'Carbon Monoxide Poisoning (with or without cyanide)',
				'Intracranial Abscess',
				'Decompression Sickness'
			],
			off: [
					'Stroke (acute and recovery phase)',
					'Traumatic Brain Injury (TBI)',
					'Post-Concussion Syndrome',
					'Migraine and Cluster Headaches',
					'Cerebral Palsy',
					'Multiple Sclerosis (MS)',
					'Parkinson’s Disease',
					'ALS (supportive)',
			]
		},
		"infection": {
			on: [
'Clostridial Myositis & Myonecrosis (Gas Gangrene)',
'Necrotizing Soft Tissue Infections',
 'Actinomycosis (refractory)',
 'Chronic Refractory Osteomyelitis',
 'Intracranial Abscess (also neurological overlap)',
			],
			off: [
'Lyme Disease (chronic)',
'Long COVID / Post-viral syndromes',
'Chronic fatigue & immune dysregulation',
'Systemic inflammatory infections',

			]
		},
		"trauma": {
			on: [
 'Crush Injury / Compartment Syndrome / Acute Traumatic Ischemias',
 'Acute Peripheral Arterial Insufficiency',
 'Compromised Skin Grafts & Flaps',
			],
			off: [
'Sports injuries (ligaments, tendons, recovery acceleration)',
'Post-surgical wound healing optimization',
'Fracture healing enhancement',
'Joint and muscle recovery',
			]
		},
		"rehabilitation": {
			"on": ["Exceptional Blood Loss Anemia", "Problem Wound Healing (e.g., Diabetic Foot Ulcers)"],
			"off": ["Post-surgical healing & recovery optimization", "Chronic fatigue syndrome", "Fibromyalgia", "Post-chemo & post-radiation recovery (supportive)", "Wellness protocols (adjunctive recovery, energy optimization)"]
		},
		"emergency-conditions": {
			"on": ["Thermal Burns"],
			"off": ["Acute smoke inhalation injury", "Critical illness recovery protocols", "Emergency ischemic events (supportive)"]
		},
		"vision": {
			"on": ["Central Retinal Artery Occlusion (CRAO) (CMS recognizes as indication)"],
			"off": ["Macular Degeneration (early intervention)", "Glaucoma (adjunctive)", "Retinopathy (supportive therapy)"]
		},
		"chronic-inflammatory-conditions": {
			"on": ["Delayed Radiation Injury (Soft Tissue / Bone Necrosis)"],
			"off": ["Autoimmune disorders (RA, lupus, Crohn's)", "Chronic pain syndromes", "Fibromyalgia (overlap)", "Long-COVID inflammatory syndromes"]
		},
		"oncology": {
			"on": ['Delayed Radiation Injury (osteoradionecrosis, soft tissue radionecrosis)'],
			"off": ["Cancer treatment synergy (adjunct to radiation, chemo, immunotherapy)", "Radiation cystitis / proctitis", "Post-oncology wound healing and fatigue recovery"]
		}
	},
	links: [
		{
			children: "🧠 Neurology",
			href: "neurology",
			component: "a",
			variant: "icon",
			size: "xs",
		},
		{
			children: "🦠 Infection / Immunity",
			href: "infection",
			variant: "icon",
			size: "xs",
			component: "a",
		},
		{
			children: "🦴 Orthopedics / Trauma",
			href: "trauma",
			variant: "icon",
			size: "xs",
			component: "a",
		},
		{
			children: "❤ Recovery & Rehabilitation",
			href: "rehabilitation",
			variant: "icon",
			size: "xs",
			component: "a",
		},
		{
			children: "🔥 Burns & Emergency Conditions",
			href: "emergency-conditions",
			variant: "icon",
			size: "xs",
			component: "a",
		},
		{
			children: "👁 Vision",
			href: "vision",
			variant: "icon",
			size: "xs",
			component: "a",
		},

		{
			children: "🧬 Chronic Inflammatory Conditions",
			href: "chronic-inflammatory-conditions",
			variant: "icon",
			size: "xs",
			component: "a",
		},
		{
			children: "☢️ Oncology",
			href: "oncology",
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
}

const SectionDiagnosis = () => {
	const [state, setState] = useState<string>('');
	const id = useId();
	const router = useRouter()
	const desc = useMemo(() => {
		const result = data.descriptions[state];
		if (!result) return

		return <div className={styles.description} id={"desc"}>
			<div className={styles.result}>

				<h3>On-Label</h3>
				<ul>
					{result.on.map((el, index) => {

						return <li key={id + index}>{el}</li>
					})}
				</ul>
			</div>
			<div>
				<h3>Off-Label</h3>
				<ul>
					{result.off.map((el, index) => <li key={id + index}>{el}</li>)}
				</ul>
			</div>


		</div>
	}, [id, state])
	return (
		<div className={styles.wrapper} id={"btns"}>
			<div className={styles.bgcircle}></div>
			<div className={styles.diagnosis}>
				{data.links?.map((l, index: number) => (
					<Button className={styles.btn} component={"button"} key={l.href as string + index} variant={"icon"} size={l.size} onClick={() => {
						setState(l.href)
						router.push("#desc", {
							scroll: true
						})
					}}>{l.children}</Button>
				))}
			</div>

				{desc}

			<div className={styles.all}>
				<a onClick={() => {
					const scrollTarget = state === "" ? "#desc" : state === "all" ?  "#btns" : "#btns"
					router.push(scrollTarget, {
						scroll: true
					})
					if (state !== "") {
						setState("")
					} else {
						setState("all")
					}

				}}>{(() => {
					if (state !== "") {
					return 'Hide Diagnoses'
				} else {
					return "View All Diagnoses"
				}})()}</a>
			</div>

		</div>
	)
}

export default SectionDiagnosis