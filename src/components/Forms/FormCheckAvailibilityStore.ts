import { makeAutoObservable, reaction } from "mobx";
import { requestsAxios } from "@/utils/fetch";
import { service_booking } from "@/utils/service_booking";
import dayjs from "dayjs";

class formCheckAvailibilityStore {
	locationId: string | number =  1;
	loadingDays: boolean = false;
	loadingTimes: boolean = false;
	serviceId: string | null = null;
	clientId: string | null = null;
	date_day: string = "";
	date_time: string = "";
	disabledDays: string[] = [];
	disabledDaysLoaded: boolean = false;
	hours:{
		[key: string]: unknown,
		times?: {[key:string]: unknown,  DateTime: string}[]
	}= {

	}
	constructor() {
		makeAutoObservable(this)
		reaction(() => this.date_day,
			() => {
			if (this.serviceId &&  this.date_day) {
				this.loadingTimes = true;
				requestsAxios.getWithOutRoot(service_booking.fetchString.getHours(this.date_day, this.serviceId)).then((r) => {
					this.setHours(r.data);
					this.loadingTimes = false;
				});
			}
		})
		reaction(() => this.serviceId,
			() => {
			if (this.serviceId) {
				this.loadingDays = true;
				requestsAxios.getWithOutRoot(service_booking.fetchString.disabledDays(this.serviceId))
					.then(r => {
						if (r.status === 200) {
							this.setDisabledDays(r.data.dates);
							this.loadingDays = false;
						}
					})
					.finally(() => this.disabledDaysLoaded = true);
			}
		})
	}
	get getLoadingDays() {
		return this.loadingDays;
	}
	get getLoadingTimes() {
		return this.loadingTimes;
	}

	setLocation(id: string) {
		this.locationId = id;
	}
	setserviceId(id: string) {
		this.serviceId = id;
	}
	setDisabledDays(data: string[]) {
		this.disabledDays = data;
	}
	setHours(data) {
		this.hours = data;
	}
	setDay(data) {
		this.date_day = data;
	}
	setTime(data) {
		this.date_time = data;
	}
	get getTimeTickets() {
		if (this.hours.times && this.hours.times.length) {
			console.log(this.hours.times.map((el) => dayjs(el.DateTime).format("YYYY-MM-DD")));
			return this.hours.times.map((el) => dayjs(el.DateTime).tz("America/Los_Angeles").format("HH:mm"));
		}
		return []
	}

	get getDisabledDays() {
		return this.disabledDays
	}
	get getParams() {
		return ({
			locationId: this.locationId,
			serviceId: this.serviceId,
			disabledDays: this.disabledDays,
			hours: this.hours,
			date_day: this.date_day,
			date_time: this.date_time
		})
	}

}

export default formCheckAvailibilityStore