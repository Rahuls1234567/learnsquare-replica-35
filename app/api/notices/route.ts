import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

function getAdminFromRequest(request: Request): { email: string; isAdmin: boolean } | null {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(/auth=([^;]+)/);
  if (!match) return null;
  try {
    const decoded = JSON.parse(atob(decodeURIComponent(match[1])));
    if (decoded?.isAdmin) return decoded;
    return null;
  } catch {
    return null;
  }
}

const noticeSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  image: z.string().nullable().optional(),
  isActive: z.boolean().default(true),
  startDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isAdmin = searchParams.get('admin') === 'true';

  try {
    if (isAdmin) {
      if (!getAdminFromRequest(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      const notices = await prisma.notice.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json(notices);
    } else {
      const now = new Date();
      const notices = await prisma.notice.findMany({
        where: {
          isActive: true,
          startDate: { lte: now },
          endDate: { gte: now },
        },
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json(notices);
    }
  } catch (error) {
    console.error('Error fetching notices:', error);
    return NextResponse.json({ error: 'Failed to fetch notices' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!getAdminFromRequest(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json();
    const parsed = noticeSchema.parse(body);

    const notice = await prisma.notice.create({
      data: {
        title: parsed.title,
        content: parsed.content,
        image: parsed.image || null,
        isActive: parsed.isActive,
        startDate: new Date(parsed.startDate),
        endDate: new Date(parsed.endDate),
      },
    });

    return NextResponse.json(notice, { status: 201 });
  } catch (error: any) {
    console.error('Error creating notice:', error);
    return NextResponse.json({ error: error.message || 'Failed to create notice. Ensure the database schema has been pushed.' }, { status: 400 });
  }
}

