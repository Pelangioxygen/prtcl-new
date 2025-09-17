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
	questions: {
		heading: "Check Availability or Refer a Patient",
		subheading: "Choose a day",
		subheading2: "Patient's Info",
		subheading3: "Please enter patient details",
		heading2: "Your Details",
		heading3: "Review and Confirm Your Booking",
		heading4: "Payment Confirmed",
		className: "grid-cols-1 lg:grid-cols-3",
		inputs: [
			{
				label: "First Name",
				type: "text",
				name: "first_name",
				required: true,
				placeholder: "First Name",
			},
			{
				label: "Email",
				type: "email",
				name: "email",
				required: true,
				placeholder: "Email",
			},

			{
				label: "Mobile Phone",
				type: "text",
				name: "phone",
				required: true,
				placeholder: "Mobile Phone",
			},
			{
				label: "Message / Referral Details",
				type: "textarea",
				className: "col-span-full",
				name: "anything-we",
				required: true,
				autosize: true,
				minRows: 6,
				placeholder: 'Ex. "I’m recovering from surgery” or “I’ll be 10 mins late”',
			},
		],
	},
};

const FormCheckAvailibility = () => {

	const form = useForm({
		name: "CheckAvailibility",
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
	const inputs = formInputs["questions"];
	// const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");

	return (
		<div className={styles.formWrapper}>
			<form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"}>
				<hgroup className={'!block text-left mb-16 !col-span-full'}>
					<h3 className={"justify-self-start col-span-2 mb-2 text-primary"}>{inputs.heading}</h3>
					<p className={' text-left justify-self-start text-[1.125rem]'}>Our intake team is here to assist referring physicians directly. Please fill out the secure form below or email us anytime at referrals@healthprtcl.com</p>
				</hgroup>

				{inputs.inputs.map((i) => {
					return <FieldComposer {...i} key={form.key(i.name)} {...form.getInputProps(i.name)} />;
				})}

				<div className={"lg:grid col-span-full gap-y-4 justify-between lg:mt-4"}>
					<Button shadow={true} component={"button"} variant={"primary"} className={"w-full !max-w-full"}>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default FormCheckAvailibility;
