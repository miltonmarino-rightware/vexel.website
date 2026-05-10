import { BackgroundGrid } from './components/effects/BackgroundGrid';
import { Navbar } from './components/layout/Navbar';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ManifestoSection } from './components/sections/ManifestoSection';
import { ProductSections } from './components/sections/ProductSections';
import { ServicesSection } from './components/sections/ServicesSection';

export default function App() {
  return (
    <main className="vexel-noise relative min-h-screen overflow-hidden bg-vexel-bg text-vexel-ice">
      <BackgroundGrid />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <ExperienceSection />
        <ProductSections />
        <ContactSection />
        <footer className="relative px-5 pb-10 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-vexel-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VEXEL. Operational Intelligence. Executed.</p>
            <p>Automação inteligente para empresas.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
