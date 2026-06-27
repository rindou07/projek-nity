import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ error: 'Tidak ada file yang diunggah' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Pastikan folder uploads ada
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // Abaikan jika folder sudah ada
    }

    // Buat nama file unik (opsional) atau gunakan nama asli
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = path.join(uploadDir, fileName);

    // Simpan file ke folder public/uploads
    await writeFile(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      url: `/uploads/${fileName}` 
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Gagal mengunggah gambar' }, { status: 500 });
  }
}
