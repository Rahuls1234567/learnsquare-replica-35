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

const noticeUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  image: z.string().nullable().optional(),
  isActive: z.boolean().optional(),
  startDate: z.string().or(z.date()).optional(),
  endDate: z.string().or(z.date()).optional(),
});

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    if (!getAdminFromRequest(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const params = await context.params;
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const parsed = noticeUpdateSchema.parse(body);

    const updateData: any = {};
    if (parsed.title !== undefined) updateData.title = parsed.title;
    if (parsed.content !== undefined) updateData.content = parsed.content;
    if (parsed.image !== undefined) updateData.image = parsed.image;
    if (parsed.isActive !== undefined) updateData.isActive = parsed.isActive;
    if (parsed.startDate !== undefined) updateData.startDate = new Date(parsed.startDate);
    if (parsed.endDate !== undefined) updateData.endDate = new Date(parsed.endDate);

    const notice = await prisma.notice.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(notice);
  } catch (error) {
    console.error('Error updating notice:', error);
    return NextResponse.json({ error: 'Failed to update notice' }, { status: 400 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    if (!getAdminFromRequest(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const params = await context.params;
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    await prisma.notice.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting notice:', error);
    return NextResponse.json({ error: 'Failed to delete notice' }, { status: 400 });
  }
}
