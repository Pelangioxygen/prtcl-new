export const handleSubmitClient = async () => {
	try {
		const result = await fetch("https://intakeq.com/api/v1/clients", {
			method: 'POST',
			headers: {
				"Content-Type": 'application/json',
				'X-Auth-Key': '2f3ad06ec5edfe09a2f655c901c716c072e2c43b'
			},
			body: JSON.stringify({ FirstName: "Dmitriaaa", LastName: "Agapovaaa", Email: "pr-web20206@yandex.ru", Phone: "89320141604", MobilePhone: "89320141604" })
		});

		console.log('Status:', result.status);
		console.log('Headers:', result.headers);

		const data = await result.json();
		console.log('Response data:', data);

		return data;
	} catch (error) {
		console.error('Fetch error:', error);
		throw error;
	}
};