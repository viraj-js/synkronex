import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

const COMPONENTS_DIR = path.join(process.cwd(), 'src/app/(documentstion)/docs/components');

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get('file');
  if (!file || !/^[\w-]+\.tsx?$/.test(file)) {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
  }
  const filePath = path.join(COMPONENTS_DIR, file);
  try {
    const code = await readFile(filePath, 'utf-8');
    return NextResponse.json({ code });
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
