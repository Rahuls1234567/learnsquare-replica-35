import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            console.error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env');
            return NextResponse.json({ error: 'Admin login is not configured' }, { status: 500 });
        }

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const emailMatch = String(email).trim().toLowerCase() === adminEmail.trim().toLowerCase();
        const passwordMatch = password === adminPassword;

        if (!emailMatch || !passwordMatch) {
            return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Admin login error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
