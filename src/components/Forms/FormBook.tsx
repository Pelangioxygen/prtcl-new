"use client";
import { useForm } from "@mantine/form";
import FieldComposer from "@/components/FieldComposer/FieldComposer";
import "@mantine/core/styles/Combobox.layer.css";
import { Stepper } from "@mantine/core";
import { DatePicker, getTimeRange, TimeGrid } from "@mantine/dates";
import Button from "@/components/Button/Button";
import { useCallback, useEffect, useState } from "react";
import styles from "./FormBook.module.css";
import styless from "./DateInput.module.css";
import stylesss from "./TimeGridInput.module.css";
import "@mantine/dates/styles.css";
import { ArrowLeftIcon, ArrowRightIcon, GreenBtnIcon } from "@/components/Icons/Icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { baseFetch, fetchWithAuth } from "../../../testFetch";
import { requestsAxios, requestsAxiosAnon } from "@/utils/fetch";

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

const query = {
	getSettings: () => fetchWithAuth("https://intakeq.com/api/v1/" + "appointments/settings", { method: "GET", }),
	getDates: () => baseFetch(),
	// sendRequest: () => requestsAxios.get('intakes/'),
	sendRequestAnon: () => requestsAxiosAnon.post('anonymousform', {"Id":null,"ClientName":"[Anonymous]","Email":null,"Questions":[{"Id":1,"Text":"<p>Please enter your information.</p>","QuestionType":10,"DisplayFurtherExplanation":false,"Answer":null,"FurtherExplanation":null,"FurtherExplanationLabel":null,"Note":null,"Required":false,"BreakBeforeWeb":false,"BreakBefore":false,"OfficeUse":false,"Attachments":[],"Columns":4,"ExtraField":null,"Placeholder":null,"CalculateScore":false,"ScoredSettings":null,"IsSpecial":false,"Flag":false,"UniqueId":"ph4x","QuestionOptions":[],"QuestionItems":[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}],"Comments":[],"IsPinned":false,"IntegrationFieldId":null,"Prefill":false,"_i":null,"page":1,"number":1,"signature":{"SignatureType":"typed","ESignature":"[]","QuestionUniqueId":"ph4x"},"Rows":[[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false}],[{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}]],"isanswered":true,"focused":false,"ignored":false}],"Name":"Questions","QuestionnaireId":"689e58eabf53f484850a1664","InvitationCode":null,"InvitationAccepted":false,"MemberId":"687ff7d1ed72f1123779b1b1","MemberName":"Alexey Savin","Status":0,"CompletedDate":null,"AppointmentDate":null,"SeenByMember":false,"LastSeenByClientDate":null,"Password":null,"Instructions":null,"ESignature":null,"RequireSignature":false,"IsSignatureDrawn":false,"IsRevisit":false,"ShowConsentFormsAtBottom":false,"ClientConsentId":null,"InvitationSentDateString":null,"ConsentForms":[],"ClientIp":null,"EnableCustomHeader":false,"HideProgressIndicator":false,"HideDefaultInstructions":true,"Deleted":false,"CanBeFilledByThirdParty":false,"FilledByType":0,"FilledByName":null,"ResponsibleWasSet":false,"Script":null,"HidePrintButton":true,"AppointmentReminderOption":0,"AppointmentTimeIndex":0,"AppointmentId":null,"AppointmentReminderType":null,"AppointmentReminderNumber":null,"CompletedByMember":false,"RevisionIndex":0,"Archived":false,"NotDeliveredMessage":null,"Rules":[],"ClientId":null,"ClinicAdminId":"687ff7d1ed72f1123779b1b1","HasPendingProviderSignature":false,"HasPendingAssistantSignature":false,"ReportProcessedDate":null,"AdoptedSignatureId":null,"FirstOpenDate":null,"FormReminderSent":false,"Review":null,"ContactId":null,"Summary":null,"ExpirationDate":null,"MessageId":null,"SubmittedByEmail":null,"InvitationSentDate":"0001-01-01T00:00:00","IsLocked":false,"JournalId":null,"LocationId":null,"PermissionObservation":null,"IsAnonymous":true,"LastUpdatedItemId":null,"EhrUploadCount":0,"GoogleDriveFileId":null,"Dismissed":false,"DeletedDate":null,"DropboxFileId":null,"JournalEntryNumber":0,"DeliveryMethod":0,"SendEvents":[],"IsContact":false,"ClinicId":"687ff7d1ed72f1123779b1b1","ContactRelationship":null,"LastModified":"0001-01-01T00:00:00","StandardFormId":null,"GoodFaithEstimateId":null,"AutoSummary":null,"allConsentHidden":true}),
	sendRequest: () => requestsAxios.get('appointments/settings'),
	getQuestionary: () => requestsAxios.get('questionnaires'),
	getIntake: () => requestsAxios.get('intakes/689e58eabf53f484850a1664'),
	sendRequestForm: () => requestsAxios.post('intakes/send', {"Id":null,"ClientName":"[Anonymous]","Email":null,"Questions":[{"Id":1,"Text":"<p>Please enter your information.</p>","QuestionType":10,"DisplayFurtherExplanation":false,"Answer":null,"FurtherExplanation":null,"FurtherExplanationLabel":null,"Note":null,"Required":false,"BreakBeforeWeb":false,"BreakBefore":false,"OfficeUse":false,"Attachments":[],"Columns":4,"ExtraField":null,"Placeholder":null,"CalculateScore":false,"ScoredSettings":null,"IsSpecial":false,"Flag":false,"UniqueId":"ph4x","QuestionOptions":[],"QuestionItems":[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}],"Comments":[],"IsPinned":false,"IntegrationFieldId":null,"Prefill":false,"_i":null,"page":1,"number":1,"signature":{"SignatureType":"typed","ESignature":"[]","QuestionUniqueId":"ph4x"},"Rows":[[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false}],[{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}]],"isanswered":true,"focused":false,"ignored":false}],"Name":"Questions","QuestionnaireId":"689e58eabf53f484850a1664","InvitationCode":null,"InvitationAccepted":false,"MemberId":"687ff7d1ed72f1123779b1b1","MemberName":"Alexey Savin","Status":0,"CompletedDate":null,"AppointmentDate":null,"SeenByMember":false,"LastSeenByClientDate":null,"Password":null,"Instructions":null,"ESignature":null,"RequireSignature":false,"IsSignatureDrawn":false,"IsRevisit":false,"ShowConsentFormsAtBottom":false,"ClientConsentId":null,"InvitationSentDateString":null,"ConsentForms":[],"ClientIp":null,"EnableCustomHeader":false,"HideProgressIndicator":false,"HideDefaultInstructions":true,"Deleted":false,"CanBeFilledByThirdParty":false,"FilledByType":0,"FilledByName":null,"ResponsibleWasSet":false,"Script":null,"HidePrintButton":true,"AppointmentReminderOption":0,"AppointmentTimeIndex":0,"AppointmentId":null,"AppointmentReminderType":null,"AppointmentReminderNumber":null,"CompletedByMember":false,"RevisionIndex":0,"Archived":false,"NotDeliveredMessage":null,"Rules":[],"ClientId":null,"ClinicAdminId":"687ff7d1ed72f1123779b1b1","HasPendingProviderSignature":false,"HasPendingAssistantSignature":false,"ReportProcessedDate":null,"AdoptedSignatureId":null,"FirstOpenDate":null,"FormReminderSent":false,"Review":null,"ContactId":null,"Summary":null,"ExpirationDate":null,"MessageId":null,"SubmittedByEmail":null,"InvitationSentDate":"0001-01-01T00:00:00","IsLocked":false,"JournalId":null,"LocationId":null,"PermissionObservation":null,"IsAnonymous":true,"LastUpdatedItemId":null,"EhrUploadCount":0,"GoogleDriveFileId":null,"Dismissed":false,"DeletedDate":null,"DropboxFileId":null,"JournalEntryNumber":0,"DeliveryMethod":0,"SendEvents":[],"IsContact":false,"ClinicId":"687ff7d1ed72f1123779b1b1","ContactRelationship":null,"LastModified":"0001-01-01T00:00:00","StandardFormId":null,"GoodFaithEstimateId":null,"AutoSummary":null,"allConsentHidden":true}),
	// sendRequestForm: () => fetch("https://intakeq.com/api/v1/" + 'intakes/send', {
	// 	method: "POST",
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'accept': 'application/json',
	// 		"X-Auth-Key": "2908956133c4d12a7a14114b2d600c8270ac3ad0"
	// 	},
	// 	body: JSON.stringify({"Id":null,"ClientName":"[Anonymous]","Email":null,"Questions":[{"Id":1,"Text":"<p>Please enter your information.</p>","QuestionType":10,"DisplayFurtherExplanation":false,"Answer":null,"FurtherExplanation":null,"FurtherExplanationLabel":null,"Note":null,"Required":false,"BreakBeforeWeb":false,"BreakBefore":false,"OfficeUse":false,"Attachments":[],"Columns":4,"ExtraField":null,"Placeholder":null,"CalculateScore":false,"ScoredSettings":null,"IsSpecial":false,"Flag":false,"UniqueId":"ph4x","QuestionOptions":[],"QuestionItems":[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}],"Comments":[],"IsPinned":false,"IntegrationFieldId":null,"Prefill":false,"_i":null,"page":1,"number":1,"signature":{"SignatureType":"typed","ESignature":"[]","QuestionUniqueId":"ph4x"},"Rows":[[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false}],[{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}]],"isanswered":true,"focused":false,"ignored":false}],"Name":"Questions","QuestionnaireId":"689e58eabf53f484850a1664","InvitationCode":null,"InvitationAccepted":false,"MemberId":"687ff7d1ed72f1123779b1b1","MemberName":"Alexey Savin","Status":0,"CompletedDate":null,"AppointmentDate":null,"SeenByMember":false,"LastSeenByClientDate":null,"Password":null,"Instructions":null,"ESignature":null,"RequireSignature":false,"IsSignatureDrawn":false,"IsRevisit":false,"ShowConsentFormsAtBottom":false,"ClientConsentId":null,"InvitationSentDateString":null,"ConsentForms":[],"ClientIp":null,"EnableCustomHeader":false,"HideProgressIndicator":false,"HideDefaultInstructions":true,"Deleted":false,"CanBeFilledByThirdParty":false,"FilledByType":0,"FilledByName":null,"ResponsibleWasSet":false,"Script":null,"HidePrintButton":true,"AppointmentReminderOption":0,"AppointmentTimeIndex":0,"AppointmentId":null,"AppointmentReminderType":null,"AppointmentReminderNumber":null,"CompletedByMember":false,"RevisionIndex":0,"Archived":false,"NotDeliveredMessage":null,"Rules":[],"ClientId":null,"ClinicAdminId":"687ff7d1ed72f1123779b1b1","HasPendingProviderSignature":false,"HasPendingAssistantSignature":false,"ReportProcessedDate":null,"AdoptedSignatureId":null,"FirstOpenDate":null,"FormReminderSent":false,"Review":null,"ContactId":null,"Summary":null,"ExpirationDate":null,"MessageId":null,"SubmittedByEmail":null,"InvitationSentDate":"0001-01-01T00:00:00","IsLocked":false,"JournalId":null,"LocationId":null,"PermissionObservation":null,"IsAnonymous":true,"LastUpdatedItemId":null,"EhrUploadCount":0,"GoogleDriveFileId":null,"Dismissed":false,"DeletedDate":null,"DropboxFileId":null,"JournalEntryNumber":0,"DeliveryMethod":0,"SendEvents":[],"IsContact":false,"ClinicId":"687ff7d1ed72f1123779b1b1","ContactRelationship":null,"LastModified":"0001-01-01T00:00:00","StandardFormId":null,"GoodFaithEstimateId":null,"AutoSummary":null,"allConsentHidden":true})
	// }),
};
const FormBook = () => {
	const [active, setActive] = useState(0);
	const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
	const [dates, setDates] = useState([]);

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

	useEffect(() => {
		(async () => {
			const res = await query.getDates();
			setDates(res.dates);
		})();
	}, []);

	const values = form.getValues();

	const handleFetch = useCallback(async () => {
		// const res1 = query.getIntake();
		// const res2 = query.sendRequestAnon();
		// const res22 = query.getSettings();
		// const res3 = query.getQuestionary();
		// const send = query.sendRequestForm();

	}, [dates]);

	const inputs = formInputs["book"];
	const dateTime = dayjs(values.date_day + values.date_time, "YYYY-MM-DD HH:mm:ss");

	return (
		<div className={styles.formWrapper}>
			<Button component={"a"} onClick={handleFetch}>
				Test
			</Button>
			<Stepper active={active} onStepClick={setActive}>
				<Stepper.Step step={0} label={inputs.heading}>
					<form style={{ display: "grid" }} className={inputs.className + " " + "gap-x-6 gap-y-2"}>
						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.heading}</h3>
						<div className={styles.confirmPanel}>
							<h3>Selected Plan: Restore – 60 min HBOT </h3>
							<h4> Number of Sessions: 20</h4>
						</div>
						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.subheading}</h3>
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

						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.subheading2}</h3>
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
							<h3>Selected Plan: Restore – 60 min HBOT </h3>
							<h4>Number of Sessions: 20</h4>
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
				<Button shadow={true} component={"button"} variant={"primary"} className={"flex-1 max-sm:!max-w-full"} onClick={nextStep}>
					Continue →
				</Button>
			</div>
		</div>
	);
};

export default FormBook;
