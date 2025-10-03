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
import { useSearchParams } from "next/navigation";
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

// const query = {
// 	getSettings: () => fetchWithAuth("https://intakeq.com/api/v1/" + "appointments/settings", { method: "GET", }),
// 	getDates: () => baseFetch(),
// 	// sendRequest: () => requestsAxios.get('intakes/'),
// 	sendRequestAnon: () => requestsAxiosAnon.post('anonymousform', {"Id":null,"ClientName":"[Anonymous]","Email":null,"Questions":[{"Id":1,"Text":"<p>Please enter your information.</p>","QuestionType":10,"DisplayFurtherExplanation":false,"Answer":null,"FurtherExplanation":null,"FurtherExplanationLabel":null,"Note":null,"Required":false,"BreakBeforeWeb":false,"BreakBefore":false,"OfficeUse":false,"Attachments":[],"Columns":4,"ExtraField":null,"Placeholder":null,"CalculateScore":false,"ScoredSettings":null,"IsSpecial":false,"Flag":false,"UniqueId":"ph4x","QuestionOptions":[],"QuestionItems":[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}],"Comments":[],"IsPinned":false,"IntegrationFieldId":null,"Prefill":false,"_i":null,"page":1,"number":1,"signature":{"SignatureType":"typed","ESignature":"[]","QuestionUniqueId":"ph4x"},"Rows":[[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false}],[{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}]],"isanswered":true,"focused":false,"ignored":false}],"Name":"Questions","QuestionnaireId":"689e58eabf53f484850a1664","InvitationCode":null,"InvitationAccepted":false,"MemberId":"687ff7d1ed72f1123779b1b1","MemberName":"Alexey Savin","Status":0,"CompletedDate":null,"AppointmentDate":null,"SeenByMember":false,"LastSeenByClientDate":null,"Password":null,"Instructions":null,"ESignature":null,"RequireSignature":false,"IsSignatureDrawn":false,"IsRevisit":false,"ShowConsentFormsAtBottom":false,"ClientConsentId":null,"InvitationSentDateString":null,"ConsentForms":[],"ClientIp":null,"EnableCustomHeader":false,"HideProgressIndicator":false,"HideDefaultInstructions":true,"Deleted":false,"CanBeFilledByThirdParty":false,"FilledByType":0,"FilledByName":null,"ResponsibleWasSet":false,"Script":null,"HidePrintButton":true,"AppointmentReminderOption":0,"AppointmentTimeIndex":0,"AppointmentId":null,"AppointmentReminderType":null,"AppointmentReminderNumber":null,"CompletedByMember":false,"RevisionIndex":0,"Archived":false,"NotDeliveredMessage":null,"Rules":[],"ClientId":null,"ClinicAdminId":"687ff7d1ed72f1123779b1b1","HasPendingProviderSignature":false,"HasPendingAssistantSignature":false,"ReportProcessedDate":null,"AdoptedSignatureId":null,"FirstOpenDate":null,"FormReminderSent":false,"Review":null,"ContactId":null,"Summary":null,"ExpirationDate":null,"MessageId":null,"SubmittedByEmail":null,"InvitationSentDate":"0001-01-01T00:00:00","IsLocked":false,"JournalId":null,"LocationId":null,"PermissionObservation":null,"IsAnonymous":true,"LastUpdatedItemId":null,"EhrUploadCount":0,"GoogleDriveFileId":null,"Dismissed":false,"DeletedDate":null,"DropboxFileId":null,"JournalEntryNumber":0,"DeliveryMethod":0,"SendEvents":[],"IsContact":false,"ClinicId":"687ff7d1ed72f1123779b1b1","ContactRelationship":null,"LastModified":"0001-01-01T00:00:00","StandardFormId":null,"GoodFaithEstimateId":null,"AutoSummary":null,"allConsentHidden":true}),
// 	sendRequest: () => requestsAxios.get('appointments/settings'),
// 	getQuestionary: () => requestsAxios.get('questionnaires'),
// 	getIntake: () => requestsAxios.get('intakes/689e58eabf53f484850a1664'),
// 	sendRequestForm: () => requestsAxios.post('intakes/send', {"Id":null,"ClientName":"[Anonymous]","Email":null,"Questions":[{"Id":1,"Text":"<p>Please enter your information.</p>","QuestionType":10,"DisplayFurtherExplanation":false,"Answer":null,"FurtherExplanation":null,"FurtherExplanationLabel":null,"Note":null,"Required":false,"BreakBeforeWeb":false,"BreakBefore":false,"OfficeUse":false,"Attachments":[],"Columns":4,"ExtraField":null,"Placeholder":null,"CalculateScore":false,"ScoredSettings":null,"IsSpecial":false,"Flag":false,"UniqueId":"ph4x","QuestionOptions":[],"QuestionItems":[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}],"Comments":[],"IsPinned":false,"IntegrationFieldId":null,"Prefill":false,"_i":null,"page":1,"number":1,"signature":{"SignatureType":"typed","ESignature":"[]","QuestionUniqueId":"ph4x"},"Rows":[[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false}],[{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}]],"isanswered":true,"focused":false,"ignored":false}],"Name":"Questions","QuestionnaireId":"689e58eabf53f484850a1664","InvitationCode":null,"InvitationAccepted":false,"MemberId":"687ff7d1ed72f1123779b1b1","MemberName":"Alexey Savin","Status":0,"CompletedDate":null,"AppointmentDate":null,"SeenByMember":false,"LastSeenByClientDate":null,"Password":null,"Instructions":null,"ESignature":null,"RequireSignature":false,"IsSignatureDrawn":false,"IsRevisit":false,"ShowConsentFormsAtBottom":false,"ClientConsentId":null,"InvitationSentDateString":null,"ConsentForms":[],"ClientIp":null,"EnableCustomHeader":false,"HideProgressIndicator":false,"HideDefaultInstructions":true,"Deleted":false,"CanBeFilledByThirdParty":false,"FilledByType":0,"FilledByName":null,"ResponsibleWasSet":false,"Script":null,"HidePrintButton":true,"AppointmentReminderOption":0,"AppointmentTimeIndex":0,"AppointmentId":null,"AppointmentReminderType":null,"AppointmentReminderNumber":null,"CompletedByMember":false,"RevisionIndex":0,"Archived":false,"NotDeliveredMessage":null,"Rules":[],"ClientId":null,"ClinicAdminId":"687ff7d1ed72f1123779b1b1","HasPendingProviderSignature":false,"HasPendingAssistantSignature":false,"ReportProcessedDate":null,"AdoptedSignatureId":null,"FirstOpenDate":null,"FormReminderSent":false,"Review":null,"ContactId":null,"Summary":null,"ExpirationDate":null,"MessageId":null,"SubmittedByEmail":null,"InvitationSentDate":"0001-01-01T00:00:00","IsLocked":false,"JournalId":null,"LocationId":null,"PermissionObservation":null,"IsAnonymous":true,"LastUpdatedItemId":null,"EhrUploadCount":0,"GoogleDriveFileId":null,"Dismissed":false,"DeletedDate":null,"DropboxFileId":null,"JournalEntryNumber":0,"DeliveryMethod":0,"SendEvents":[],"IsContact":false,"ClinicId":"687ff7d1ed72f1123779b1b1","ContactRelationship":null,"LastModified":"0001-01-01T00:00:00","StandardFormId":null,"GoodFaithEstimateId":null,"AutoSummary":null,"allConsentHidden":true}),
// 	// sendRequestForm: () => fetch("https://intakeq.com/api/v1/" + 'intakes/send', {
// 	// 	method: "POST",
// 	// 	headers: {
// 	// 		'Content-Type': 'application/json',
// 	// 		'accept': 'application/json',
// 	// 		"X-Auth-Key": "2908956133c4d12a7a14114b2d600c8270ac3ad0"
// 	// 	},
// 	// 	body: JSON.stringify({"Id":null,"ClientName":"[Anonymous]","Email":null,"Questions":[{"Id":1,"Text":"<p>Please enter your information.</p>","QuestionType":10,"DisplayFurtherExplanation":false,"Answer":null,"FurtherExplanation":null,"FurtherExplanationLabel":null,"Note":null,"Required":false,"BreakBeforeWeb":false,"BreakBefore":false,"OfficeUse":false,"Attachments":[],"Columns":4,"ExtraField":null,"Placeholder":null,"CalculateScore":false,"ScoredSettings":null,"IsSpecial":false,"Flag":false,"UniqueId":"ph4x","QuestionOptions":[],"QuestionItems":[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}],"Comments":[],"IsPinned":false,"IntegrationFieldId":null,"Prefill":false,"_i":null,"page":1,"number":1,"signature":{"SignatureType":"typed","ESignature":"[]","QuestionUniqueId":"ph4x"},"Rows":[[{"Id":1,"Text":"Name","Answer":"asd sadasd sa","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"FirstName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":3,"Text":"Last Name:","Answer":"asdasdasd","Columns":3,"IsRequired":true,"Type":0,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"LastName","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false},{"Id":12,"Text":"Phone","Answer":"(123) 231-1232","Columns":4,"IsRequired":true,"Type":6,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"MobilePhone","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"ignored":false}],[{"Id":15,"Text":"Email","Answer":"qwe@aqweqwe.ru","Columns":4,"IsRequired":false,"Type":5,"TextMatrixAnswers":[],"PossibleAnswers":null,"AlignRight":false,"ClientProfileFieldId":"Email","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null,"invalidEmail":false},{"Id":17,"Text":"Message / Referral Details","Answer":"asd sad dsa dsadsa sadasd sad","Columns":6,"IsRequired":false,"Type":11,"TextMatrixAnswers":[],"PossibleAnswers":[],"AlignRight":false,"ClientProfileFieldId":"0","IntegrationFieldId":null,"Placeholder":null,"AutoSuggestSource":null}]],"isanswered":true,"focused":false,"ignored":false}],"Name":"Questions","QuestionnaireId":"689e58eabf53f484850a1664","InvitationCode":null,"InvitationAccepted":false,"MemberId":"687ff7d1ed72f1123779b1b1","MemberName":"Alexey Savin","Status":0,"CompletedDate":null,"AppointmentDate":null,"SeenByMember":false,"LastSeenByClientDate":null,"Password":null,"Instructions":null,"ESignature":null,"RequireSignature":false,"IsSignatureDrawn":false,"IsRevisit":false,"ShowConsentFormsAtBottom":false,"ClientConsentId":null,"InvitationSentDateString":null,"ConsentForms":[],"ClientIp":null,"EnableCustomHeader":false,"HideProgressIndicator":false,"HideDefaultInstructions":true,"Deleted":false,"CanBeFilledByThirdParty":false,"FilledByType":0,"FilledByName":null,"ResponsibleWasSet":false,"Script":null,"HidePrintButton":true,"AppointmentReminderOption":0,"AppointmentTimeIndex":0,"AppointmentId":null,"AppointmentReminderType":null,"AppointmentReminderNumber":null,"CompletedByMember":false,"RevisionIndex":0,"Archived":false,"NotDeliveredMessage":null,"Rules":[],"ClientId":null,"ClinicAdminId":"687ff7d1ed72f1123779b1b1","HasPendingProviderSignature":false,"HasPendingAssistantSignature":false,"ReportProcessedDate":null,"AdoptedSignatureId":null,"FirstOpenDate":null,"FormReminderSent":false,"Review":null,"ContactId":null,"Summary":null,"ExpirationDate":null,"MessageId":null,"SubmittedByEmail":null,"InvitationSentDate":"0001-01-01T00:00:00","IsLocked":false,"JournalId":null,"LocationId":null,"PermissionObservation":null,"IsAnonymous":true,"LastUpdatedItemId":null,"EhrUploadCount":0,"GoogleDriveFileId":null,"Dismissed":false,"DeletedDate":null,"DropboxFileId":null,"JournalEntryNumber":0,"DeliveryMethod":0,"SendEvents":[],"IsContact":false,"ClinicId":"687ff7d1ed72f1123779b1b1","ContactRelationship":null,"LastModified":"0001-01-01T00:00:00","StandardFormId":null,"GoodFaithEstimateId":null,"AutoSummary":null,"allConsentHidden":true})
// 	// }),
// };
const FormBook = () => {
	const [active, setActive] = useState(0);

	const searchParams = useSearchParams();
	const minutes = searchParams.get('type');
	const titlePlan = minutes ? service_booking[minutes].title : "";
	const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [dates, setDates] = useState([]);

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

			const data = await result.json();
			console.log('Client created successfully:', data);
			return result;

		} catch (error) {
			console.error('Error creating client:', error);
			throw error;
		}
	}, []);
	const handleSubmitAppointMent = useCallback(async (data) => {
		try {
			// Используем прокси роут вместо прямого вызова IntakeQ API
			const result = await fetch('https://prtcl-six.vercel.app/api/create-appointment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data)
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
		const resClient = handleSubmitClient({
			FirstName: values.first_name,
			LastName:  values.last_name,
			Email: values.email,
			Phone: values.phone,
			MobilePhone: values.phone,
		});

		if(resClient.status === 200) {
			const result = handleSubmitAppointMent(
				{
					MemberId: "687ff7d1ed72f1123779b1b1",
					ClientName: values.first_name + " " + values.last_name,
					ClientEmail: values.email,
					ClientPhone: values.phone,
					// ClientNote: null,
					// // ClientId: "16979502-a54d-49e5-b58b-410aab246a85",
					// // TimeIndex: 168,
					// Date: "2025-10-21T21:00:00Z",
					// Duration: 60,
					ServiceId: store.getParams.serviceId,
					// Paid: false,
					// DateCreated: "2025-10-02T22:46:25.797Z",
					// BookedByClient: false,
					// FormSent: false,
					// FormCompleted: false,
					// ClientQuestionnaireId: null,
					// FormRecipientId: null,
					// FormDeliveryMethod: 0,
					Status: "AwaitingConfirmation",
					// PaymentInfo: null,
					// ServiceName: "Hyperbaric Oxygen Therapy Session - 60 minutes",
					// Price: 250,
					// QuestionnaireId: null,
					// RequestCode: null,
					// GoogleEventId: null,
					// OutlookEventId: null,
					LocationId: "1",
					// LocationName: "Health PRTCL - Culver City",
					// LocationUrl: "https://maps.google.com/?q=10375+Washington+Blvd,+Culver+City,+CA+90232,+USA&ftid=0x80c2ba2f9a3d9fa3:0xf7460b26f945e934",
					// LocationAddress: "10375 Washington Blvd, Culver City, CA 90232, USA",
					// StripeCustomerId: null,
					// CancellationFeePaid: 0,
					// RefundedAmount: 0,
					// ReminderDate: null,
					// ReminderSent: false,
					ReminderType: Number(values.ReminderType),
					// ClientAppointmentPackageId: null,
					// ApprovalNote: null,
					// CouponCode: null,
					// Discount: 0,
					// ClientTimezoneId: null,
					// RecurrenceId: null,
					ClinicId: "687ff7d1ed72f1123779b1b1",
					// PractitionerNote: null,
					// BlockDuration: null,
					// CreatedBy: "Alexey Savin",
					// ResourceId: null,
					CustomFields: [],
					// PaymentProvider: 0,
					// AutoChargeFailed: false,
					// AutoChargeFailedError: null,
					LocalTimezoneId: "Pacific Standard Time",
					// NoteIds: [],
					// InvoiceId: null,
					// InvoiceNumber: 0,
					// InvoiceStatus: 0,
					// AdditionalClients: [],
					// SameDayReminderSent: false,
					// DepositPaymentInfo: null,
					// AutoCharge: -1,
					// ServicePrice: 250,
					// Taxes: [],
					// TaxesIncludedInPrice: false,
					// AttendanceConfirmationResponse: 0,
					// PreventAutocharge: false,
					// Procedures: [],
					// IsClientLocation: false,
					// LocationUnitNumber: null,
					// ZoomMeeting: null,
					// ScheduledEmailsSent: [],
					// ZoomOccurrenceId: null,
					// GoogleMeetConference: null,
					// Notes: [],
					// RealDuration: 60,
					// Subtotal: 250,
					// TaxAmount: 0,
					// InvoiceNumberFormatted: "0000",
					// EndDate: "2025-10-21T22:00:00Z",
					// ConfirmationSent: false,
					// StripeCardId: null,
					// CancellationReason: null,
					// CancellationSubReason: null,
					// CancellationSubReasonOther: null,
					// CancellationDateUtc: null,
					// FullCancellationReason: "",
					// ClientGeo: null,
					// Ip: null,
					LocalDate: `${store.getParams.date_day}T${store.getParams.date_time}:00`,
					// AmountDue: 250,
					// TotalAmountPaid: 0,
					// DisplayMap: true,
					EmailOrPhone: values.email || values.phone,
					// IntergrationId: null,
					// ConfirmationEmailBounced: false,
					// ServiceCode: null,
					// PlaceOfService: null,
					// ClaimId: null,
					// ClaimNumber: 0,
					// ClaimStatus: 0,
					// Deleted: false,
					// DeletedDate: null,
					// PreviousClaimIds: [],
					// Version: 1,
					// LastModified: "2025-10-02T22:46:48.895Z",
					// BilledAmount: 0,
					// InsuranceAmount: 0,
					// InsurancePaymentId: null,
					// ClaimCompletedDate: null,
					// InsuranceSecondaryPaymentId: null,
					// Claims: [],
					// VideoCallSettings: null,
					// SessionStarted: null,
					// SessionEnded: null,
					// CheckInStatus: 0,
					// CheckInData: null,
					// UpdatedByEra: false,
					// ExternalId: null,
					// Id: "68df00c1ae17b2dda4ab4531",
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
			console.log(result);
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
						{(!!store.getParams.disabledDays && store.disabledDaysLoaded) && <DatePicker
							excludeDate={(date) => store.getDisabledDays.includes(date)}
							nextIcon={<ArrowRightIcon width={"1.25rem"} height={"1rem"} />}
							previousIcon={<ArrowLeftIcon width={"1.25rem"} height={"1rem"} />}
							className={"col-span-full "}
							allowDeselect
							classNames={DateInputClassNames}
							key={form.key("date_day")}
							value={form.getValues().date_day}
							{...form.getInputProps("date_day")}
						/>}

						<h3 className={"col-span-2 mb-4  text-[1.5rem] mt-8 text-primary "}>{inputs.subheading2}</h3>
						<TimeGrid
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
