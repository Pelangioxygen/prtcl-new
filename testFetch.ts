// typescript

'use client'
import axios, {
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
	Method,
} from 'axios';

type FetchWithAuthInit = Omit<RequestInit, 'body'> & {
	authKey?: string;
	json?: unknown; // Если передать, будет автоматически сериализовано в body
	body?: BodyInit | null;
};

export async function fetchWithAuth<T = unknown>(
	input: string | URL | Request,
	init: FetchWithAuthInit = {}
): Promise<T> {
	const {
		authKey,
		json,
		headers: initHeaders,
		body: initBody,
		...rest
	} = init;

	// Берём ключ из параметра или из переменных окружения; используйте свои переменные в проекте
	const keyFromEnv =
		typeof window === 'undefined'
			? process.env.API_AUTH_KEY
			: process.env.NEXT_PUBLIC_API_AUTH_KEY;

	const key = authKey ?? keyFromEnv ?? '<X_AUTH_KEY_PLACEHOLDER>';

	const headers = new Headers(initHeaders);
	headers.set('X-Auth-Key', key);

	let body: BodyInit | null | undefined = initBody;

	// Удобство для JSON-запросов
	if (json !== undefined) {
		if (!headers.has('Content-Type')) {
			headers.set('Content-Type', 'application/json');
		}
		body = JSON.stringify(json);
	}

	const response = await fetch(input, { ...rest, headers, body });

	if (!response.ok) {
		const text = await response.text().catch(() => '');
		throw new Error(`HTTP ${response.status} ${response.statusText}: ${text}`);
	}

	// Пытаемся распарсить JSON, если он есть
	const contentType = response.headers.get('Content-Type') || '';
	if (contentType.includes('application/json')) {
		return (await response.json()) as T;
	}

	// Если это не JSON — возвращаем как текст (или вы можете сменить поведение)
	return (await response.text()) as unknown as T;
}
export const baseFetch = async () => {
	const resp = await fetch('https://intakeq.com/api/widget/disabledDates?locationId=1&memberId=687ff7d1ed72f1123779b1b1&serviceId=33eb9e71-5ed7-4bda-bdda-a3ea84ed66d5&timezoneIana=America%2FLos_Angeles', {
		method: 'GET'
	});
	const data = await resp.json();

	return data;
}

export const formFetch = async () => {

	const resp = await fetchWithAuth('https://intakeq.com/api/v1/' + 'questionnaires', {
		method: 'GET',
	});

	const data = await resp;

	return data;
}

// Converted from test.http:
// GET https://intakeq.com/api/v1/notes/689e5b444307223d37ecb324
// Accept: application/json
// X-Auth-Key: <use env or pass explicitly>
export async function getNoteById(
	id: string,
	authKey: string
): Promise<unknown> {
	return await fetch(`https://intakeq.com/api/v1/questionnaires/689e5b444307223d37ecb324` , {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'X-Auth-Key': authKey,
			'Content-Type': 'application/json'

		}
	});
}

// Example usage:
// const note = await getNoteById('689e5b444307223d37ecb324');
// Or explicitly provide a key:
// const note = await getNoteById('689e5b444307223d37ecb324', '2f3ad06ec5edfe09a2f655c901c716c072e2c43b');


/**
 * Тип для параметров функции sendRequest
 */
interface SendRequestParams<T = any> {
	method: Method;
	url: string;
	data?: T;
	headers?: Record<string, string>;
	params?: Record<string, string | number | boolean>;
	config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data' | 'headers' | 'params'>;
}
//
// /**
//  * Функция для отправки HTTP-запросов с помощью Axios
//  * @template T - Тип отправляемых данных
//  * @template R - Тип получаемых данных
//  * @param {SendRequestParams<T>} params - Параметры запроса
//  * @returns {Promise<R>} - Промис с данными ответа
//  */
// async function sendRequest<T = any, R = any>({
// 												 method,
// 												 url,
// 												 data,
// 												 headers = {},
// 												 params = {},
// 												 config = {},
// 											 }: SendRequestParams<T>): Promise<R> {
// 	try {
// 		const axiosConfig: AxiosRequestConfig = {
// 			method,
// 			url,
// 			headers,
// 			params,
// 			data,
// 			...config,
// 		};
//
// 		const response: AxiosResponse<R> = await axios(axiosConfig);
// 		return response.data;
// 	} catch (error) {
// 		const axiosError = error as AxiosError<R>;
//
// 		if (axiosError.response) {
// 			// Сервер ответил с кодом статуса вне 2xx
// 			console.error('Error response:', axiosError.response.data);
// 			console.error('Status code:', axiosError.response.status);
// 			throw new Error(`Request failed with status ${axiosError.response.status}`);
// 		} else if (axiosError.request) {
// 			// Запрос был сделан, но ответ не получен
// 			console.error('No response received:', axiosError.request);
// 			throw new Error('No response received from server');
// 		} else {
// 			// Произошла ошибка при настройке запроса
// 			console.error('Request setup error:', axiosError.message);
// 			throw new Error(`Request setup error: ${axiosError.message}`);
// 		}
// 	}
// }
//
// // Примеры использования с типами:
//
// interface User {
// 	id: number;
// 	name: string;
// 	email: string;
// }
//
// interface CreateUserDto {
// 	name: string;
// 	email: string;
// 	password: string;
// }
//
// // GET запрос
// async function getUsers(): Promise<User[]> {
// 	return sendRequest<User[], User[]>({
// 		method: 'get',
// 		url: 'https://api.example.com/users',
// 		params: { page: 1, limit: 10 },
// 	});
// }
//
// // POST запрос
// async function createUser(userData: CreateUserDto): Promise<User> {
// 	return sendRequest<CreateUserDto, User>({
// 		method: 'post',
// 		url: 'https://api.example.com/users',
// 		data: userData,
// 		headers: { 'Content-Type': 'application/json' },
// 	});
// }
//
// // PUT запрос
// async function updateUser(id: number, userData: Partial<CreateUserDto>): Promise<User> {
// 	return sendRequest<Partial<CreateUserDto>, User>({
// 		method: 'put',
// 		url: `https://api.example.com/users/${id}`,
// 		data: userData,
// 	});
// }
//
// // DELETE запрос
// async function deleteUser(id: number): Promise<void> {
// 	return sendRequest({
// 		method: 'delete',
// 		url: `https://api.example.com/users/${id}`,
// 	});
// }