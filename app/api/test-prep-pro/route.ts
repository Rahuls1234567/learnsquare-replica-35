import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { firstName, lastName, whatsappNo, email, collegeName, message } = data;

        if (!firstName || !lastName || !whatsappNo || !email || !collegeName || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const testPrepPro = await prisma.testPrepPro.create({
            data: {
                firstName,
                lastName,
                whatsappNo: String(whatsappNo),
                email,
                collegeName,
                message,
            },
        });

        return NextResponse.json(testPrepPro, { status: 201 });
    } catch (error) {
        console.error('Error creating Test Prep Pro request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
