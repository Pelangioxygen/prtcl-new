import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
	try {
		const { first_name,last_name,phone, email, message } = await request.json();

		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: [process.env.EMAIL_TO],
			subject: `Новое сообщение от ${first_name} ${last_name} `,
			html: `
        <h3>Новое сообщение с формы</h3>
        <p><strong>Имя:</strong> ${first_name}</p>
        <p><strong>Фамилия:</strong> ${last_name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <a href="https://docs.google.com/spreadsheets/d/1eFESf7nRbyLcjyX9jIrJJ3vrbp0hmM6QtP6kcMgyIV8/edit?usp=sharing">Ссылка на Google Sheets</a>
      `,
		});

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}