import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { firstName, lastName, whatsappNo, email, collegeName, city, message } = data;

        if (!firstName || !lastName || !whatsappNo || !email || !collegeName || !city || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const aicas = await prisma.aicas.create({
            data: {
                firstName,
                lastName,
                whatsappNo: String(whatsappNo),
                email,
                collegeName,
                city,
                message,
            },
        });

        return NextResponse.json(aicas, { status: 201 });
    } catch (error) {
        console.error('Error creating AICAS inquiry:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
