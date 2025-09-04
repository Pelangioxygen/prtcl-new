'use client'
import axios from "axios";
const keyFromEnv =
	typeof window === 'undefined'
		? process.env.API_AUTH_KEY
		: process.env.NEXT_PUBLIC_API_AUTH_KEY;

const axiosClient = axios.create({
	withCredentials: false,
	headers: {
		'Content-Type': 'application/json',
		'accept': 'application/json',
		"X-Auth-Key": keyFromEnv
		// 'Authorization': 'Bearer '
	},
	baseURL: `https://intakeq.com/api/v1/`,
});
const axiosClientAnon = axios.create({
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		"X-Auth-Key": keyFromEnv
		// 'Authorization': 'Bearer '
	},
	baseURL: `https://intakeq.com/api/`,
});

const  API_ROOT_ANON = "https://intakeq.com/api/"
const  API_ROOT = "https://intakeq.com/api/v1/"

export const requestsAxios = {
	delete: (url: string) =>
		axiosClient({
			url: `${API_ROOT}${url}`,
			method: 'DELETE',
		})
			.then(r => r)
			.catch(e => e),
	get: (url: string, params?: unknown) =>
		axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'GET',
			params: params
		}).then(r => r)
			.catch(e => e),
	put: (url: string, body: unknown, params?: unknown) =>
		axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'PUT',
			params: params,
			data: JSON.stringify(body),
		}).then(r => r)
			.catch(e => e),
	putts: (url: string, body: unknown, params?: unknown) => {
		return axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			// headers: headers,
			method: 'PUT',
			data: JSON.stringify(body),
			params: params
		}).then(r => r)
			.catch(e => e)
	},
	patch: (url: string, body: unknown, params?: unknown,) => {
		return axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'PATCH',
			data: body,
			params: params
		}).then(r => r)
			.catch(e => e)
	},
	post: (url: string, body: unknown, params?: unknown) => {
		return axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'POST',
			data: JSON.stringify(body),
			params: params
		}).then(r => r)
			.catch(e => e)
	},

}
export const requestsAxiosAnon = {
	delete: (url: string) =>
		axiosClient({
			url: `${API_ROOT}${url}`,
			method: 'DELETE',
		})
			.then(r => r)
			.catch(e => e),
	get: (url: string, params?: unknown) =>
		axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'GET',
			params: params
		}).then(r => r)
			.catch(e => e),
	put: (url: string, body: unknown, params?: unknown) =>
		axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'PUT',
			params: params,
			data: JSON.stringify(body),
		}).then(r => r)
			.catch(e => e),
	putts: (url: string, body: unknown, params?: unknown) => {
		return axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			// headers: headers,
			method: 'PUT',
			data: JSON.stringify(body),
			params: params
		}).then(r => r)
			.catch(e => e)
	},
	patch: (url: string, body: unknown, params?: unknown,) => {
		return axiosClient({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'PATCH',
			data: body,
			params: params
		}).then(r => r)
			.catch(e => e)
	},
	post: (url: string, body: unknown, params?: unknown) => {
		return axiosClientAnon({
			url: `${API_ROOT}${url}`,
			// headers: tokenPlugin(),
			method: 'POST',
			data: JSON.stringify(body),
			params: params
		}).then(r => r)
			.catch(e => e)
	},

}