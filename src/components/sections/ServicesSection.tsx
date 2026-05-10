import { motion } from 'framer-motion';
import { services } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { SectionLabel } from '../ui/SectionLabel';

export function ServicesSection() {
  return (
    <section id="serviços" className="relative px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Serviços</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
              <span className="vexel-metal-text">Sistemas que atendem, organizam e executam.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-vexel-muted">
              A VEXEL combina atendimento, agenda, workflows, Voice AI e dashboards numa camada de inteligência operacional desenhada para cada negócio.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(({ icon: Icon, name, text }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <GlassCard className="h-full">
                  <Icon className="h-8 w-8 text-vexel-blue" />
                  <h3 className="mt-5 text-xl font-semibold text-vexel-ice">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-vexel-muted">{text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
