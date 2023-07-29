import { NextRequest, NextResponse } from 'next/server';
import data from '../../../../../public/projects/project.json';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname.split('/').pop();
  const project = data.projects.find((project) => project.slug === slug);
  if (project) return NextResponse.json(project);

  return NextResponse.json({ notfound: 'Not Found' }, { status: 404 });
}
