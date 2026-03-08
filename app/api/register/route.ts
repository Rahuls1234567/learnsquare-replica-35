import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, name, phoneNumber, collegeCourse, branch, year, city, address } = body;
        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }
        const required: [string, string][] = [
            ['name', 'Name'],
            ['phoneNumber', 'Phone number'],
            ['collegeCourse', 'College / Course'],
            ['branch', 'Branch'],
            ['year', 'Year'],
            ['city', 'City'],
            ['address', 'Address'],
        ];
        for (const [field, label] of required) {
            if (!body[field] || String(body[field]).trim() === '') {
                return NextResponse.json({ error: `${label} is required` }, { status: 400 });
            }
        }
        const emailNorm = String(email).trim().toLowerCase();
        if (password.length < 6) {
            return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
        }
        const existing = await prisma.user.findUnique({ where: { email: emailNorm } });
        if (existing) {
            return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
        }
        const hash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email: emailNorm,
                password: hash,
                name: String(name).trim(),
                phoneNumber: String(phoneNumber).trim(),
                collegeCourse: String(collegeCourse).trim(),
                branch: String(branch).trim(),
                year: String(year).trim(),
                city: String(city).trim(),
                address: String(address).trim(),
            },
        });
        return NextResponse.json({ success: true, user: { id: user.id, email: user.email } }, { status: 201 });
    } catch (error) {
        console.error('Register error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
