"use client";
import { useForm } from "@mantine/form";
import "@mantine/core/styles/Combobox.layer.css";
import styles from "./FormBook.module.css";
import "@mantine/dates/styles.css";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import  Button  from "@/components/Button/Button"
import FieldComposer from "@/components/FieldComposer/FieldComposer";
import { useCallback, useState } from "react";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { z } from "zod";

// Подключаем необходимые плагины
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
export const conditions = [
	'Air or Gas Embolism',
	'Carbon Monoxide Poisoning (with or without cyanide)',
	'Clostridial Myositis & Myonecrosis (Gas Gangrene)',
	'Crush Injury / Compartment Syndrome / Acute Traumatic Ischemias',
	'Decompression Sickness',
	'Problem Wound Healing (e.g., Diabetic Foot Ulcers)',
	'Exceptional Blood Loss Anemia',
	'Intracranial Abscess',
	'Necrotizing Soft Tissue Infections',
	'Osteomyelitis (Refractory)',
	'Delayed Radiation Injury (Soft Tissue / Bone Necrosis)',
	'Compromised Skin Grafts and Flaps',
	'Thermal Burns',
	'Actinomycosis (Refractory)',
]
const formInputs = {
	doctor_info: {
		heading: "Doctor's Info (required)",
		subheading: "Choose a day",
		subheading2: "Patient's Info",
		subheading3: "Please enter patient details",
		heading2: "Your Details",
		heading3: "Review and Confirm Your Booking",
		heading4: "Payment Confirmed",
		className: "grid-cols-1 lg:grid-cols-2",
		inputs: [
			{
				label: "First Name",
				type: "text",
				className: "max-lg:col-span-full",
				name: "first_name_doctor",
				required: true,
				placeholder: "First Name",
			},
			{
				label: "Last Name",
				type: "text",
				className: "max-lg:col-span-full",
				name: "last_name_doctor",
				required: true,
				placeholder: "Last Name",
			},
			{
				label: "Doctor's License number",
				type: "number",
				name: "license",
				required: true,
				className: "col-span-full",
				placeholder: "Doctor's License number",
			},
			{
				label: "Email",
				type: "email",
				className: "col-span-full",
				name: "email_doctor",
				required: true,
				placeholder: "Email",
			},
			{
				label: "Mobile Phone",
				type: "text",
				className: "col-span-full",
				name: "phone_doctor",
				required: true,
				placeholder: "Mobile Phone",
			}
		],
	},
	patient_info: {
		heading: "Doctor's Info (required)",
		subheading: "Choose a day",
		subheading2: "Patient's Info",
		subheading3: "Please enter patient details",
		heading2: "Your Details",
		heading3: "Review and Confirm Your Booking",
		heading4: "Payment Confirmed",
		className: "grid-cols-2",
		inputs: [
			{
				label: "First Name",
				type: "text",
				className: "max-lg:col-span-full",
				name: "first_name_patient",
				required: true,
				placeholder: "First Name",
			},
			{
				label: "Last Name",
				type: "text",
				className: "max-lg:col-span-full",
				name: "last_name_patient",
				required: true,
				placeholder: "Last Name",
			},
			{
				label: "Patient's DOB",
				type: "date",
				name: "patient_dob",
				required: true,
				className: "col-span-full ",
				placeholder: "DD.MM.YYYY",
			},
			{
				label: "Insurance Provider & Plan",
				type: "textarea",
				name: "insurance_plan",
				required: true,
				minRows: 4,
				autosize: true,
				className: "col-span-full",
				placeholder: "Insurance Provider & Plan",
			},
			{
				label: "Diagnosis",
				type: "textarea",
				name: "diagnosis",
				required: true,
				minRows: 4,
				autosize: true,
				className: "col-span-full",
				placeholder: "Diagnosis",
			},
			{
				type: "select",
				label: "FDA Approved Condition",
				name: "fda_approved",
				required: true,
				maxDropdownHeight:200,
				className: "col-span-full",
				data: conditions,
				placeholder: "FDA Approved Condition"
			},
			{
				type: "checkbox",
				label: "I confirm that the above patient is medically cleared to undergo hyperbaric oxygen therapy (HBOT) in a pressurized chamber for sessions ranging from 60 to 120 minutes, as prescribed.",
				name: "confirm_patient",
				required: true,
				className: "max-lg:col-span-full",
				placeholder: "I confirm that the above patient is medically cleared to undergo hyperbaric oxygen therapy (HBOT) in a pressurized chamber for sessions ranging from 60 to 120 minutes, as prescribed."
			},
			{
				label: "Hyperbaric Protocol",
				type: "textarea",
				name: "protocol",
				required: true,
				minRows: 4,
				autosize: true,
				className: "col-span-full",
				placeholder: "Please describe your treatment protocol (required)",
			},
		],
	},
};
const validationSchema = z.object({
	first_name_doctor: z.string().min(1, { message: "First name is required" }),
	last_name_doctor: z.string().min(1, { message: "Last name is required" }),
	license: z.string().min(1, {message: "License is required"}),
	email_doctor: z.string().email({ message: "Invalid email" }),
	phone_doctor: z.string().min(1, { message: "Phone is required" }),
	first_name_patient: z.string().min(1, { message: "First name is required" }),
	last_name_patient: z.string().min(1, { message: "Last name is required" }),
	patient_dob: z.string().min(1, { message: "Date of birth is required" }),
	insurance_plan: z.string().min(1, { message: "Insurance plan is required" }),
	diagnosis: z.string().min(1, { message: "Diagnosis is required" }),
	fda_approved: z.string().min(1, { message: "FDA approved condition is required" }),
	confirm_patient: z.string().min(1, { message: "Confirm patient is required" }),
	protocol: z.string().min(1, { message: "Protocol is required" }),
})
const FormReferPatient = () => {
	const [isSent, setIsSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm({
		name: "FormReferPatient",
		mode: "controlled",
		validateInputOnBlur: true,
		validate: zod4Resolver(validationSchema),
		initialValues: {
			first_name_doctor: "",
			last_name_doctor: "",
			license: "",
			email_doctor: "",
			phone_doctor: "",
			first_name_patient: "",
			"last_name_patient": "",
			patient_dob: "",
			insurance_plan: "",
			diagnosis: "",
			fda_approved: "",
			confirm_patient: "",
			protocol: "",
		},
	});

	// const values = form.getValues();
	const inputs = formInputs["doctor_info"];
	const inputs_patient = formInputs["patient_info"];
	// const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");
	const handleSubmit = useCallback(() => {
		const result = form.validate();

		if (!result.hasErrors) {
		const scriptURL = 'https://script.google.com/macros/s/AKfycbzG9TqDkmfXt2fNixEOgw4lBPpKGayMhgt9jFepaArTUvuoV7nCW5OhNW0Br9u8yxbrhw/exec'
		const form = document.forms['submit-to-google-refer-sheet']

		// form.addEventListener('submit', e => {
		// 	e.preventDefault()
		setIsLoading(true);
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
			.then(response => console.log('Success!', response))
			.then(() => {
				fetch('/api/send-email-refer', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(form.getValues()),
				})
					.then(response => console.log('Success!', response));
			})
			.then(() => {
				setIsLoading(false);
				setIsSent(true);
			})
			.catch(error => console.error('Error!', error.message))
		// })
	}
	}, [form]);
	return (
		<div className={styles.formWrapper}>
			{!isSent ? <form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"}  id={"submit-to-google-refer-sheet"}>
				<hgroup className={'!block text-left  lg:mb-16 mb-8'}>
					<h3 className={"justify-self-start col-span-2 mb-2 text-primary"}>{inputs.heading}</h3>
					<p className={'justify-self-start text-[.825rem] lg:text-[1.125rem] text-left'}>Please enter referring physician details</p>
				</hgroup>

				{inputs.inputs.map((i) => {
					return <FieldComposer {...i} key={form.key(i.name)} {...form.getInputProps(i.name)} />;
				})}

				<hgroup className={'!block text-left lg:mb-16 mb-8'}>
					<h3 className={"justify-self-start col-span-2  mb-2  lg:mt-16 mt-8 text-primary"}>{inputs.subheading2}</h3>
					<p className={'justify-self-start  text-[.825rem] lg:text-[1.125rem]'}>{inputs.subheading3}</p>

				</hgroup>
				{inputs_patient.inputs.map((i) => {
					return <FieldComposer {...i} key={form.key(i.name)} {...form.getInputProps(i.name)} />;
				})}

				<div className={"grid col-span-full gap-y-12 justify-between mt-4"}>
					<Button shadow={true} component={"button"} variant={"primary"} className={" max-sm:w-full max-sm:!max-w-full"} onClick={() => handleSubmit()}>
						{!isLoading ? 'Submit' : "Sending..."}
					</Button>
					<p>Fax additional clinical notes to: 302-333-4778</p>
				</div>
			</form> : <div style={{ display: "grid" }} className={" " + "gap-x-6 gap-y-2"}>
				{/*<GreenBtnIcon width={"9rem"} height={"9rem"} className={"mx-auto mb-10"} />*/}
				<h3 className={"text-primary text-center"}>Message sent</h3>
				<p className={" text-center text-main-gray"}>
					Thank you — your journey to recovery starts now.
					<br /> We’ve received your message and look forward to seeing you soon.
				</p>
			</div>}
		</div>
	);
};

export default FormReferPatient;
