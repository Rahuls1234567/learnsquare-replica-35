import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const LIST_TYPES = ['contact', 'syntaxwork', 'aicas', 'trainingRequest', 'testPrepPro', 'enrolment', 'semesterPrep'] as const;

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
