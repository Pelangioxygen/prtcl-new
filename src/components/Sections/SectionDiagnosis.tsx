
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
				'Intracranial Abscess'
			],
			off: [
				'Anoxic Brain Injury',
				'Cerebral Palsy',
				'Concussion & Traumatic Brain Injury',
				'Migraine / Headache',
			]
		},
		"infection": {
			on: [
				'Actinomycosis (Refractory)',
				'Clostridial Myositis & Myonecrosis (Gas Gangrene)',
				'Necrotizing Soft Tissue Infections',
				'Osteomyelitis (Refractory)',
			],
			off: [
				'Lyme Disease'
			]
		},
		"trauma": {
			on: [
				'Compartment Syndrome / Crush Injury / Acute Traumatic Ischemias'
			],
			off: [
				'Complex Regional Pain Syndrome (CRPS / RSD)',
				'Sports Injuries',
			]
		},
		"rehabilitation": {
			on: [

			],
			off: [
				'Chronic Fatigue Syndrome',
				'Chronic Pain',
				'Surgery Preparation & Accelerated Recovery',
			]
		},
		"emergency-conditions": {
			on: [
				'Air or Gas Embolism',
				'Carbon Monoxide Poisoning (with or without cyanide)',
				'Decompression Sickness',
				'Thermal Burns',
			],
			off: []
		},
		"vision": {
			on: [],
			off: ['Retinitis Pigmentosa']
		},
		"chronic-inflammatory-conditions": {
			on: [],
			off: [
				'Arthritis',
				'Crohn’s Disease',
				'Fibromyalgia',
				'Inflammatory Bowel Disease',
				'Interstitial Cystitis',
				'Pancreatitis',
				'Ulcerative Colitis',
				'Complications of Scleroderma',
			]
		},
		"oncology": {
			on: ['Delayed Radiation Injury (Soft Tissue / Bone Necrosis)'],
			off: ['Cancer (Treatment Synergy)']
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