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
import { useState } from "react";
import { GreenBtnIcon } from "@/components/Icons/Icons";

// Подключаем необходимые плагины
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const formInputs = {
	questions: {
		heading: "Have Questions?",
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
				name: "first_name",
				required: true,
				placeholder: "First Name",
			},
			{
				label: "Last Name",
				type: "text",
				name: "last_name",
				required: true,
				placeholder: "Last Name",
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
				name: "message",
				required: true,
				autosize: true,
				minRows: 6,
				placeholder: 'Ex. "I’m recovering from surgery” or “I’ll be 10 mins late”',
			},
		],
	},
};

const FormQuestions = () => {
	const [isSent, setIsSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm({
		name: "Questions",
		mode: "controlled",
		validateInputOnBlur: true,
		initialValues: {
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			message: "",
		},
	});

	// const values = form.getValues();
	const inputs = formInputs["questions"];
	// const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");
	const handleSubmit = (values: any) => {
		const scriptURL = 'https://script.google.com/macros/s/AKfycbwWGZYvVzXQtNla-3WqcStxermRQzOJnXK2b34xFua1KTH_Im5jUWCawjSZnt7xEWil/exec'
		const form = document.forms['submit-to-google-sheet']

		// form.addEventListener('submit', e => {
		// 	e.preventDefault()
			setIsLoading(true);
			fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => console.log('Success!', response))
				.then(() => {
					setIsLoading(false);
					setIsSent(true);
				})
				.catch(error => console.error('Error!', error.message))
		// })
	}
	return (
		<div className={styles.formWrapper}>
			{!isSent ? <form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"} id={"submit-to-google-sheet"}>
				<hgroup className={'!block text-left mb-16 !col-span-full'}>
					<h3 className={"justify-self-start col-span-2 mb-2 text-primary"}>{inputs.heading}</h3>
					<p className={' text-left justify-self-start text-[1.125rem]'}>Our intake team is here to assist referring physicians directly.<br/>
						Please fill out the secure form below or email us anytime at info@healthprtcl.com</p>
				</hgroup>

				{inputs.inputs.map((i) => {
					return <FieldComposer {...i} key={form.key(i.name)} {...form.getInputProps(i.name)} />;
				})}

				<div className={"lg:grid col-span-full gap-y-4 justify-between lg:mt-4"}>
					<Button shadow={true} component={"button"} variant={"primary"} className={"w-full !max-w-full"} onClick={() => handleSubmit(form.getValues())}>
						{!isLoading ? 'Submit' : "Sending..."}
					</Button>
				</div>
			</form> :
				<div style={{ display: "grid" }} className={" " + "gap-x-6 gap-y-2"}>
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

export default FormQuestions;
