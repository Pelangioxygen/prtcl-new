export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const response = await fetch('https://intakeq.com/api/v1/appointments', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-Auth-Key': process.env.API_AUTH_KEY as string
			},
			body: JSON.stringify(req.body)
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error('Proxy error:', error);
		// @ts-ignore
		res.status(500).json({
			message: 'Internal server error',
			// @ts-ignore
			error: error.message
		});
	}
}