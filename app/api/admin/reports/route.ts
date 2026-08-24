import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

const LIST_TYPES = ['contact', 'syntaxwork', 'aicas', 'trainingRequest', 'testPrepPro', 'enrolment', 'semesterPrep'] as const;

async function getAdminFromRequest(): Promise<{ email: string; isAdmin: boolean } | null> {
    try {
        const cookieStore = await cookies();
        const authCookie = cookieStore.get('auth');

        if (!authCookie?.value) return null;

        const decoded = JSON.parse(atob(decodeURIComponent(authCookie.value)));

        if (decoded?.isAdmin) return decoded;
        return null;
    } catch {
        return null;
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const list = searchParams.get('list');

        if (list && LIST_TYPES.includes(list as (typeof LIST_TYPES)[number])) {
            const type = list as (typeof LIST_TYPES)[number];
            let data: Record<string, unknown>[];
            switch (type) {
                case 'contact':
                    data = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                case 'syntaxwork':
                    data = await prisma.syntaxwork.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                case 'aicas':
                    data = await prisma.aicas.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                case 'trainingRequest':
                    data = await prisma.trainingRequest.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                case 'testPrepPro':
                    data = await prisma.testPrepPro.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                case 'enrolment':
                    data = await prisma.enrolment.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                case 'semesterPrep':
                    data = await prisma.semesterPrep.findMany({ orderBy: { createdAt: 'desc' } });
                    break;
                default:
                    data = [];
            }
            return NextResponse.json(data);
        }

        const [contact, syntaxwork, aicas, trainingRequest, testPrepPro, enrolment, semesterPrep] = await Promise.all([
            prisma.contact.count(),
            prisma.syntaxwork.count(),
            prisma.aicas.count(),
            prisma.trainingRequest.count(),
            prisma.testPrepPro.count(),
            prisma.enrolment.count(),
            prisma.semesterPrep.count(),
        ]);

        const total = contact + syntaxwork + aicas + trainingRequest + testPrepPro + enrolment + semesterPrep;

        return NextResponse.json({
            contact,
            syntaxwork,
            aicas,
            trainingRequest,
            testPrepPro,
            enrolment,
            semesterPrep,
            total,
        });
    } catch (error) {
        console.error('Reports error:', error);
        return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const auth = await getAdminFromRequest();
        if (!auth) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        let body: { type?: unknown; id?: unknown; remarks?: unknown; isRead?: unknown };
        try {
            body = await request.json();
        } catch {
            return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
        }

        const { type, id, remarks, isRead } = body;

        if (typeof type !== 'string' || !LIST_TYPES.includes(type as (typeof LIST_TYPES)[number])) {
            return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
        }
        const recordId = Number(id);
        if (!Number.isInteger(recordId)) {
            return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
        }

        const data: { remarks?: string; isRead?: boolean } = {};
        if (typeof remarks === 'string') data.remarks = remarks;
        if (typeof isRead === 'boolean') data.isRead = isRead;

        let updated;
        switch (type as (typeof LIST_TYPES)[number]) {
            case 'contact':
                updated = await prisma.contact.update({ where: { id: recordId }, data });
                break;
            case 'syntaxwork':
                updated = await prisma.syntaxwork.update({ where: { id: recordId }, data });
                break;
            case 'aicas':
                updated = await prisma.aicas.update({ where: { id: recordId }, data });
                break;
            case 'trainingRequest':
                updated = await prisma.trainingRequest.update({ where: { id: recordId }, data });
                break;
            case 'testPrepPro':
                updated = await prisma.testPrepPro.update({ where: { id: recordId }, data });
                break;
            case 'enrolment':
                updated = await prisma.enrolment.update({ where: { id: recordId }, data });
                break;
            case 'semesterPrep':
                updated = await prisma.semesterPrep.update({ where: { id: recordId }, data });
                break;
        }

        return NextResponse.json(updated);
    } catch (error) {
        console.error('Remarks update error:', error);
        return NextResponse.json({ error: 'Failed to update remarks' }, { status: 500 });
    }
}
