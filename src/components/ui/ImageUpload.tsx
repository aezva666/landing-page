'use client';

import { useState } from 'react';

export function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();
      setUploadedUrl(data.url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-white
          hover:file:bg-primary/90"
      />
      {uploading && <p>Subiendo imagen...</p>}
      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">URL de la imagen:</p>
          <p className="text-sm text-gray-900 break-all">{uploadedUrl}</p>
        </div>
      )}
    </div>
  );
} 