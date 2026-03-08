import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }
        const emailNorm = String(email).trim().toLowerCase();

        // Check admin (from database only)
        const adminRecord = await prisma.admin.findUnique({ where: { email: emailNorm } });
        if (adminRecord) {
            const valid = await bcrypt.compare(password, adminRecord.password);
            if (valid) {
                return NextResponse.json({
                    success: true,
                    user: { id: adminRecord.id, email: adminRecord.email },
                    isAdmin: true,
                });
            }
        }

        // Check regular user
        const user = await prisma.user.findUnique({ where: { email: emailNorm } });
        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }
        return NextResponse.json({ success: true, user: { id: user.id, email: user.email }, isAdmin: false });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
