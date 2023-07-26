import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Message from '@/lib/message';
export async function POST(req: NextRequest, res: NextResponse) {
  console.log('req.body', req.body);
  return res.json({ message: 'ok' });
}
