import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {

	try {
		const { first_name_doctor,last_name_doctor,license, email_doctor, phone_doctor, first_name_patient, last_name_patient, patient_dob, insurance_plan, diagnosis, fda_approved, confirm_patient, protocol   } = await request.json();

		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: [process.env.EMAIL_TO],
			subject: `Новое сообщение c формы Refer Patient`,
			html: `
        <h3>Новое сообщение с формы</h3>
        <p><strong>First Name Doctor:</strong> ${first_name_doctor}</p>
        <p><strong>First Name Doctor:</strong> ${last_name_doctor}</p>
        <p><strong>Doctor's License number:</strong> ${license}</p>
        <p><strong>Doctor's Email:</strong> ${email_doctor}</p>
        <p><strong>Doctor's Mobile Phone:</strong> ${phone_doctor}</p>
        <p><strong>Patient's First Name:</strong> ${first_name_patient}</p>
        <p><strong>Patient's Last Name:</strong> ${last_name_patient}</p>
        <p><strong>Patient's DOB:</strong> ${patient_dob}</p>
        <p><strong>Insurance Provider & Plan:</strong> ${insurance_plan}</p>
        <p><strong>Diagnosis:</strong> ${diagnosis}</p>
        <p><strong>FDA Approved Condition:</strong> ${fda_approved}</p>
        <p><strong>confirm_patient:</strong> ${confirm_patient}</p>
        <p><strong>Diagnosis:</strong> ${protocol}</p>
        <a href="https://docs.google.com/spreadsheets/d/1pi6D-LXkNu-mm38M8t-i4hipkEhK0q-a4YjoJHCKtzM/edit?gid=0#gid=0">Ссылка на Google Sheets</a>
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