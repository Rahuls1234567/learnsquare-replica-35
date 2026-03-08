import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { firstName, lastName, whatsappNo, email, message } = data;

        if (!firstName || !lastName || !whatsappNo || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const syntaxwork = await prisma.syntaxwork.create({
            data: {
                firstName,
                lastName,
                whatsappNo: String(whatsappNo),
                email,
                message,
            },
        });

        return NextResponse.json(syntaxwork, { status: 201 });
    } catch (error) {
        console.error('Error creating syntax work request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
