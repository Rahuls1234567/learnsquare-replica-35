import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const trainingRequest = await prisma.trainingRequest.create({
            data,
        });
        return NextResponse.json(trainingRequest, { status: 201 });
    } catch (error) {
        console.error('Error creating training request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
