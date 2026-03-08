import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

function parseAuthFromRequest(request: Request): { email: string; id: number; isAdmin: boolean } | null {
    const cookie = request.headers.get('cookie') || '';
    const match = cookie.match(/auth=([^;]+)/);
    if (!match) return null;
    try {
        return JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
    } catch {
        return null;
    }
}

export async function POST(request: Request) {
    try {
        const auth = parseAuthFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const { currentPassword, newPassword } = await request.json();
        if (!currentPassword || !newPassword || newPassword.length < 6) {
            return NextResponse.json({ error: 'New password must be at least 6 characters' }, { status: 400 });
        }

        if (auth.isAdmin) {
            const admin = await prisma.admin.findUnique({ where: { email: auth.email } });
            if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
            const valid = await bcrypt.compare(currentPassword, admin.password);
            if (!valid) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 });
            const hash = await bcrypt.hash(newPassword, 10);
            await prisma.admin.update({ where: { id: admin.id }, data: { password: hash } });
        } else {
            const user = await prisma.user.findUnique({ where: { email: auth.email } });
            if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
            const valid = await bcrypt.compare(currentPassword, user.password);
            if (!valid) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 });
            const hash = await bcrypt.hash(newPassword, 10);
            await prisma.user.update({ where: { id: user.id }, data: { password: hash } });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Change password error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
