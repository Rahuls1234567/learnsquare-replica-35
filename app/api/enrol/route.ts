import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { firstName, lastName, mobileNumber, email, course, program, branch, yearOfStudy, semester } = data;

        if (!firstName || !lastName || !mobileNumber || !email || !course || !program || !branch || !yearOfStudy || !semester) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const enrolment = await prisma.enrolment.create({
            data: {
                firstName,
                lastName,
                mobileNumber: String(mobileNumber),
                email,
                course,
                program,
                branch,
                yearOfStudy,
                semester,
            },
        });

        return NextResponse.json(enrolment, { status: 201 });
    } catch (error) {
        console.error('Error creating enrolment:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
