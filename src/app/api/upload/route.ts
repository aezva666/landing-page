import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No se proporcionó ningún archivo' },
        { status: 400 }
      );
    }

    // Generar un nombre único para el archivo
    const fileName = `${Date.now()}-${file.name}`;
    
    // Subir el archivo a Vercel Blob
    const { url } = await put(fileName, file, {
      access: 'public',
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    return NextResponse.json(
      { error: 'Error al subir el archivo' },
      { status: 500 }
    );
  }
} 