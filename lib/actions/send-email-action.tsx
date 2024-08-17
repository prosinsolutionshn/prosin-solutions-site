'use server';

import { ContactFormValues } from '@/components/pages/home/client/contact-form/contact-form';

import { CustomerRegisteredEmail, NewEmailCustomer } from '@/emails/new-email';

import { render } from '@react-email/render';
import Nodemailer from 'nodemailer';

export default async function newEmailAction(values: ContactFormValues): Promise<any> {
  try {
    await sendEmail(values);
    return {
      message: 'Correo enviado muchas gracias por contactarnos',
      ok: true,
    };
  } catch (error) {
    return {
      message: 'Error al enviar el correo',
    };
  }
}

async function sendEmail(data: any) {
  try {
    const emailHtml = render(<NewEmailCustomer clientName={data.name} companyName="Prosin Solutions HN"></NewEmailCustomer>);

    const registeredEmail = render(<CustomerRegisteredEmail {...data}></CustomerRegisteredEmail>);

    const transportEmail = Nodemailer.createTransport({
      auth: {
        pass: process.env.SMTP_PASSWORD,
        user: process.env.SMTP_USER,
      },
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
    });

    const result = await transportEmail.sendMail({
      from: `"Prosin Solutions HN" <${process.env.SMTP_USER}>`,
      html: emailHtml,
      subject: 'Mensaje de bienvenida',
      to: [data.email, process?.env?.SEND_EMAIL_NOTIFICATIONS_TO as string],
    });

    const second = await transportEmail.sendMail({
      from: `"Prosin Solutions HN" <${process.env.SMTP_USER}>`,
      html: registeredEmail,
      subject: 'Nuevo cliente registrado',
      to: process?.env?.SEND_EMAIL_NOTIFICATIONS_TO as string,
    });

    console.log(result);
    console.log(second);
  } catch (error) {}
}
