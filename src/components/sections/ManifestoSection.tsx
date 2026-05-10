import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';

export function ManifestoSection() {
  return (
    <section className="relative px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Manifesto</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 shadow-panel sm:p-12 lg:p-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-vexel-blue/20 blur-[100px]" />
          <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            <span className="vexel-metal-text block">VEXEL does not decorate.</span>
            <span className="vexel-blue-text block">VEXEL executes.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-vexel-muted">
            A VEXEL constrói infraestrutura digital para operações que precisam de clareza, velocidade e controlo. Menos trabalho manual. Mais organização. Mais execução.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
