export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const response = await fetch('https://intakeq.com/api/v1/clients', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Key': '2f3ad06ec5edfe09a2f655c901c716c072e2c43b'
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
		res.status(500).json({
			message: 'Internal server error',
			error: error.message
		});
	}
}