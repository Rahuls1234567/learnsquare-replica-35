import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEnquiryNotification } from '@/lib/mail';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { firstName, lastName, whatsappNo, email, collegeName, message } = data;
        if (!firstName || !lastName || !whatsappNo || !email || !collegeName || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }
        const contact = await prisma.contact.create({
            data: { firstName, lastName, whatsappNo, email, collegeName, message },
        });

        await sendEnquiryNotification({
            product: 'Contact Enquiry Form',
            fields: {
                Name: `${firstName} ${lastName}`,
                Whatsapp: String(whatsappNo),
                Email: email,
                College: collegeName,
                Message: message,
            },
        });

        return NextResponse.json(contact, { status: 201 });
    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
