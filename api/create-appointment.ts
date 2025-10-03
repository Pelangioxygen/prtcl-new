// api/create-client.js
module.exports = async (req, res) => {
	// Разрешаем CORS
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	// Handle preflight
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}

	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const intakeQResponse = await fetch('https://intakeq.com/api/v1/appointments', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-Auth-Key': '2f3ad06ec5edfe09a2f655c901c716c072e2c43b'
			},
			body: JSON.stringify(req.body)
		});

		const data = await intakeQResponse.json();

		if (!intakeQResponse.ok) {
			return res.status(intakeQResponse.status).json(data);
		}

		res.status(200).json(data);
	} catch (error) {
		console.error('IntakeQ API error:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: error.message
		});
	}
};