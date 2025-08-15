"use client";
import { useForm } from "@mantine/form";
import "@mantine/core/styles/Combobox.layer.css";
import { DatePicker, getTimeRange, TimeGrid } from "@mantine/dates";
import styles from "./FormBook.module.css";
import styless from "./DateInput.module.css";
import stylesss from "./TimeGridInput.module.css";
import "@mantine/dates/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons/Icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

// Подключаем необходимые плагины
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const formInputs = {
	book: {
		heading: "Choose a day and time",
		subheading: "Choose a day",
		subheading2: "Choose a time",
		heading2: "Your Details",
		heading3: "Review and Confirm Your Booking",
		heading4: "Payment Confirmed",
		className: "grid-cols-2",
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
				label: "Appointment Reminder",
				type: "select",
				data: ["Yes", "No"],
				name: "appointment_reminder",
				required: true,
			},

			{
				label: "Mobile Phone",
				type: "text",
				name: "phone",
				required: true,
				placeholder: "Mobile Phone",
			},
			{
				label: "Anything we should know?",
				type: "textarea",
				className: "col-span-2",
				name: "anything-we",
				required: true,
				minRows: 4,
				placeholder: 'Ex. "I’m recovering from surgery” or “I’ll be 10 mins late”',
			},
		],
	},
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DateInputClassNames = {
	calendarHeader: styless.calendarHeader,
	monthTheadCell: styless.monthTheadCell,
	calendarHeaderControl: styless.calendarHeaderControl,
	calendarHeaderControlIcon: styless.calendarHeaderControlIcon,
	root: styless.root,
	calendarHeaderLevel: styless.calendarHeaderLevel,
	monthThead: styless.monthThead,
	monthCell: styless.monthCell,
	datePickerRoot: styless.datePickerRoot,
};
const TimeInputClassNames = {
	root: stylesss.root,
	control: stylesss.control,
	simpleGrid: stylesss.simpleGrid,
};

const FormBook = () => {

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
	const inputs = formInputs["book"];
	// const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");

	return (
		<div className={styles.formWrapper}>
			<form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"}>
				<h3 className={"col-span-2 mb-12 text-primary"}>{inputs.heading}</h3>
				<div className={styles.confirmPanel}>
					<h3>Selected Plan: Restore – 60 min HBOT </h3>
					<h4> Number of Sessions: 20</h4>
				</div>
				<h3 className={"col-span-2  mt-16 col-span-full mb-12 text-primary"}>{inputs.subheading}</h3>
				<DatePicker
					nextIcon={<ArrowRightIcon width={"1.25rem"} height={"1rem"} />}
					previousIcon={<ArrowLeftIcon width={"1.25rem"} height={"1rem"} />}
					className={"col-span-full "}
					allowDeselect
					classNames={DateInputClassNames}
					key={form.key("date_day")}
					value={form.getValues().date_day}
					{...form.getInputProps("date_day")}
				/>

				<h3 className={"col-span-2 mb-12 mt-16 text-primary"}>{inputs.subheading2}</h3>
				<TimeGrid
					classNames={TimeInputClassNames}
					data={getTimeRange({ startTime: "10:00", endTime: "21:00", interval: "01:00" })}
					simpleGridProps={{
						type: "container",
						cols: { base: 1, "180px": 2, "320px": 3 },
						spacing: "xs",
					}}
					key={form.key("date_time")}
					{...form.getInputProps("date_time")}
					withSeconds={false}
				/>
			</form>
		</div>
	);
};

export default FormBook;
