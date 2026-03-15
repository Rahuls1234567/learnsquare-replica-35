import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, university, college, email, password, mobile } = body;

        if (!name || !university || !college || !email || !password || !mobile) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const registration = await prisma.semesterPrep.create({
            data: {
                name,
                university,
                college,
                email,
                password,
                mobile,
            },
        });

        return NextResponse.json({ message: 'Registration successful', data: registration }, { status: 201 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
