"use client";
import { useForm } from "@mantine/form";
import FieldComposer from "@/components/FieldComposer/FieldComposer";
import "@mantine/core/styles/Combobox.layer.css";
import { Stepper } from "@mantine/core";
import { DatePicker,  TimeGrid } from "@mantine/dates";
import Button from "@/components/Button/Button";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./FormBook.module.css";
import styless from "./DateInput.module.css";
import stylesss from "./TimeGridInput.module.css";
import "@mantine/dates/styles.css";
import { ArrowLeftIcon, ArrowRightIcon, GreenBtnIcon } from "@/components/Icons/Icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useRouter, useSearchParams } from "next/navigation";
import { service_booking } from "@/utils/service_booking";
import formCheckAvailibilityStore from "@/components/Forms/FormCheckAvailibilityStore";
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { observer } from "mobx-react-lite";
dayjs.extend(utc)
dayjs.extend(timezone)
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
				data: [{label: "Yes", value: "1"},{label: "No", value: "10"}],
				name: "ReminderType",
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
	const [active, setActive] = useState(0);
	const router = useRouter()
	const searchParams = useSearchParams();
	const minutes = searchParams.get('type');
	const titlePlan = minutes ? service_booking[minutes].title : "";
	const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
	// eslint-disable-next-line @typescript-eslint/no-unused-vars

	useEffect(() => {
		if (!minutes) {
			router.push('/prices')
		}
	}, [minutes, router]);
	const form = useForm({
		name: "BookNow",
		mode: "controlled",
		validateInputOnBlur: true,
		initialValues: {
			locationId: "",
			date_time: "",
			date_day: "",
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			"anything-we": "",
			ReminderType: "1",
			result: {}
		},
	});
	const store = useMemo(() => {
		return new formCheckAvailibilityStore()
	}, []);

	useEffect(() => {
		const tagId = searchParams.get('type');
		if (tagId) {
			const serviceId = service_booking[tagId].id;
			store.setserviceId(serviceId);
		}
	}, [searchParams, store]);

	const values = form.getValues();

	useEffect(() => {
		if (values.date_day) {
			store.setDay(values.date_day)
		}
		if (values.date_time) {
			store.setTime(values.date_time)
		}
	}, [store, values.date_day, values.date_time]);

	const handleSubmitClient = useCallback(async (clientData) => {
		try {
			// Используем прокси роут вместо прямого вызова IntakeQ API
			const result = await fetch('https://prtcl-six.vercel.app/api/create-client', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(clientData || {
					"FirstName": "Dmitribbbb",
					"LastName": "Agapovbbbb",
					"Email": "pr-web20206@yandex.ru",
					"Phone": "89320141604",
					"MobilePhone": "89320141604"
				})
			});

			if (!result.ok) {
				const errorData = await result.json();
				throw new Error(errorData.message || 'Request failed');
			}

			return result;

		} catch (error) {
			console.error('Error creating client:', error);
			throw error;
		}
	}, []);

	const handleSubmitAppointMent = useCallback(async (appointMentData) => {
		try {
			// Используем прокси роут вместо прямого вызова IntakeQ API
			const result = await fetch('https://prtcl-six.vercel.app/api/create-appointment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(appointMentData)
			});

			if (!result.ok) {
				const errorData = await result.json();
				throw new Error(errorData.message || 'Request failed');
			}

			const data = await result.json();
			console.log('Client created successfully:', data);
			return result;

		} catch (error) {
			console.error('Error creating client:', error);
			throw error;
		}
	}, []);

	const handleSubmit = useCallback(async () => {
		const resClient = await handleSubmitClient({
			FirstName: values.first_name,
			LastName:  values.last_name,
			Email: values.email,
			Phone: values.phone,
			MobilePhone: values.phone,
		});

		if(resClient.status === 200) {
			const clientData = await resClient.json()
			console.log(clientData);
			const result = await handleSubmitAppointMent(
				{
					ClientId: clientData.ClientId,
					MemberId: "687ff7d1ed72f1123779b1b1",
					ClientName: values.first_name + " " + values.last_name,
					ClientEmail: values.email,
					ClientPhone: values.phone,
					PractitionerId: clientData.PractitionerId,
					UtcDateTime: dayjs(`${store.getParams.date_day}T${store.getParams.date_time}:00.000Z`).valueOf(),
					ServiceId: store.getParams.serviceId,
					Status: "WaitingConfirmation",
					LocationId: "1",
					ReminderType: Number(values.ReminderType),
					ClinicId: "687ff7d1ed72f1123779b1b1",
					CustomFields: [],
					LocalTimezoneId: "Pacific Standard Time",
					LocalDate: `${store.getParams.date_day}T${store.getParams.date_time}:00`,
					EmailOrPhone: values.email || values.phone,
					sendConfirmation: false,
					selectedRecipient: {
						name: values.first_name + " " + values.last_name,
						groupName: `${values.first_name} + " " + ${values.last_name} (Client)`,
						address: values.email,
						type: "Email",
						// id: "16979502-a54d-49e5-b58b-410aab246a85",
						isContact: false,
					},
					dob: null,
				}
			);
			if (result.status === 200) {
				nextStep()
			}
		}
	}, [handleSubmitClient, store.getParams.date_day, store.getParams.date_time, store.getParams.serviceId, values.ReminderType, values.email, values.first_name, values.last_name, values.phone])

	const inputs = formInputs["book"];
	const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");

	return (
		<div className={styles.formWrapper}>
			<Stepper active={active} onStepClick={setActive}>
				<Stepper.Step step={0} label={inputs.heading}>
					<form onSubmit={handleSubmit} style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"}>
						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.heading}</h3>
						<div className={styles.confirmPanel}>
							<h3>Selected Plan: {titlePlan}</h3>
							{/*<h4> Number of Sessions: 20</h4>*/}
						</div>
						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.subheading}</h3>

						{!store.getLoadingDays ? (!!store.getParams.disabledDays && store.disabledDaysLoaded) && <DatePicker
							excludeDate={(date) => store.getDisabledDays.includes(date)}
							nextIcon={<ArrowRightIcon width={"1.25rem"} height={"1rem"} />}
							previousIcon={<ArrowLeftIcon width={"1.25rem"} height={"1rem"} />}
							className={"col-span-full "}
							allowDeselect
							classNames={DateInputClassNames}
							key={form.key("date_day")}
							value={form.getValues().date_day}
							{...form.getInputProps("date_day")}
						/> : <div>Loading...</div>}

						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.subheading2}</h3>
						{!store.getLoadingTimes ? <TimeGrid
							classNames={TimeInputClassNames}
							data={store.getTimeTickets}
							simpleGridProps={{
								type: "container",
								cols: { base: 1, "180px": 2, "320px": 3 },
								spacing: "xs",
							}}
							key={form.key("date_time")}
							{...form.getInputProps("date_time")}
							withSeconds={false}
						/>: <div>Loading...</div>}
					</form>
				</Stepper.Step>
				<Stepper.Step step={1} title={"asd"} label={inputs.heading2}>
					<form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2 max-sm:grid-cols-2"}>
						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.heading2}</h3>
						{inputs.inputs.map((i) => {
							return <FieldComposer {...i} key={form.key(i.name)} className={"max-sm:col-span-full"} {...form.getInputProps(i.name)} />;
						})}
					</form>
				</Stepper.Step>
				<Stepper.Step step={2} label={inputs.heading3}>
					<div className={styles.confirmPanel}>
						<div>
							<h3>Selected Plan: {titlePlan}</h3>
							{/*<h4>Number of Sessions: 20</h4>*/}
						</div>
						<div className={"py-4"}>
							<p>{dateTime.format("h:mm A — dddd, MMM, YYYY")}</p>
							<p>Pacific Time</p>
						</div>
						<div className={"py-4"}>
							<p>{values.first_name + " " + values.last_name}</p>
							<p>{values.phone}</p>
							<p>{values.email}</p>
							<p>{values["anything-we"]}</p>
						</div>
						<div>
							<p>Health PRTCL</p>
							<p>Culver City</p>
							<p>10375 Washington Bivd, Culver City, CA 90232, USA</p>

							<p>*You’ll receive a confirmation email and SMS once submitted.</p>
						</div>
					</div>
				</Stepper.Step>
				<Stepper.Completed>
					<GreenBtnIcon width={"9rem"} height={"9rem"} className={"mx-auto mb-10"} />
					<h3 className={"text-primary text-center"}>Payment Confirmed</h3>
					<p className={" text-center text-main-gray"}>
						Thank you — your journey to recovery starts now.
						<br /> We’ve received your booking and look forward to seeing you soon.
					</p>
				</Stepper.Completed>
			</Stepper>
			<div className={'mt-8'}>
				*All times are shown in Pacific Time
			</div>
			<div className={"flex justify-between mt-6 gap-2"}>

				<Button shadow={true} variant="default" onClick={prevStep} component={"button"} className={"flex-1 max-sm:!max-w-full"}>
					← Back
				</Button>
				{active <= 1 ? <Button shadow={true} component={"button"} variant={"primary"} className={"flex-1 max-sm:!max-w-full"} onClick={nextStep}>
					Continue →
				</Button> : <Button shadow={true}  component={"button"} variant={"primary"} className={"flex-1 max-sm:!max-w-full"} onClick={handleSubmit}>
					Send
				</Button>}
			</div>
		</div>
	);
};

export default observer(FormBook);
