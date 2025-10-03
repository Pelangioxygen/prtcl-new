export const service_booking = {
	60: {
		title: "Restore – 60 min HBOT",
		id: "33eb9e71-5ed7-4bda-bdda-a3ea84ed66d5"
	},
	90: {
		title: "Recovery – 90 min HBOT",
		id: "55a9160b-0052-4827-afec-119bbaf699c2",
	},
	120: {
		title: "Renewal – 120 min HBOT",
		id: "27a86590-8a44-4272-81c1-9b43fd91c496",
	},
	fetchString: {
		getHours: (time: string, serviceId: string) => `https://intakeq.com/api/widget/times?date=${time}&isStaff=true&locationId=1&memberId=687ff7d1ed72f1123779b1b1&serviceId=${serviceId}`,
		disabledDays: (serviceId: string) => `https://intakeq.com/api/widget/disabledDates?isStaff=true&locationId=1&memberId=687ff7d1ed72f1123779b1b1&serviceId=${serviceId}`,
	},
};