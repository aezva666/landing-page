import { ImageUpload } from '@/components/ui/ImageUpload';

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Subir Imágenes</h1>
      <div className="max-w-md">
        <ImageUpload />
      </div>
    </div>
  );
} 