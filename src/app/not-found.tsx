import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
} 