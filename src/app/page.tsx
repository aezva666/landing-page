import Header from '@/components/layout/Header'
import HeroSection from '@/components/hero/hero-section'
import FeaturesSection from '@/components/features/features-section'
import PricingSection from '@/components/pricing/pricing-section'
import TestimonialsSection from '@/components/testimonials/testimonials-section'
import CTASection from '@/components/cta/cta-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Tu Asistente Virtual Inteligente
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automatiza la atención al cliente y mejora la experiencia de tus usuarios con inteligencia artificial
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/register"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Comenzar Gratis
              </a>
              <a
                href="/demo"
                className="bg-white text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 