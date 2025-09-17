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

// Подключаем необходимые плагины
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

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
				name: "first_name_doctor",
				required: true,
				placeholder: "First Name",
			},
			{
				label: "Last Name",
				type: "text",
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
				name: "first_name_patient",
				required: true,
				placeholder: "First Name",
			},
			{
				label: "Last Name",
				type: "text",
				name: "last_name_patient",
				required: true,
				placeholder: "Last Name",
			},
			{
				label: "Patient's DOB",
				type: "number",
				name: "license",
				required: true,
				className: "col-span-full",
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
				className: "col-span-full",
				data: ["Crush Injury and Compartment Syndrome", "Crush Injury and Compartment Syndrome1"],
				placeholder: "FDA Approved Condition"
			},
			{
				type: "checkbox",
				label: "I confirm that the above patient is medically cleared to undergo hyperbaric oxygen therapy (HBOT) in a pressurized chamber for sessions ranging from 60 to 120 minutes, as prescribed.",
				name: "confirm_patient",
				required: true,
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

const FormReferPatient = () => {

	const form = useForm({
		name: "BookNow",
		mode: "controlled",
		validateInputOnBlur: true,
		initialValues: {
			date_time: "",
			date_day: "",
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			"anything-we": "",
			appointment_reminder: "No",
		},
	});

	// const values = form.getValues();
	const inputs = formInputs["doctor_info"];
	const inputs_patient = formInputs["patient_info"];
	// const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");

	return (
		<div className={styles.formWrapper}>
			<form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"}>
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
					<Button shadow={true} component={"button"} variant={"primary"} className={" max-sm:w-full max-sm:!max-w-full"}>
						Submit
					</Button>
					<p>Fax additional clinical notes to: 302-333-4778</p>
				</div>
			</form>
		</div>
	);
};

export default FormReferPatient;
