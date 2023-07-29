import { NextRequest, NextResponse } from 'next/server';
import data from '../../../../public/projects/project.json';

export async function GET(req: NextRequest) {
  return NextResponse.json(data.projects);
}
