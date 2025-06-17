import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const msg = {
            to: 'davidcarmonaarrabal@davidca.es', // Cambia esto por tu email
            from: 'davidcarmonaarrabal@davidca.es', // Debe ser un remitente verificado en SendGrid
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
            html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br/>${message}</p>`,
        };

        await sgMail.send(msg);

        return NextResponse.json({ message: 'Email enviado correctamente' }, { status: 200 });
    } catch (error) {
        console.error('Error enviando email:', error);
        return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
    }
}
