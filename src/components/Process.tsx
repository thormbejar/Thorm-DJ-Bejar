import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and competitors to craft a winning digital strategy.'
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'We create wireframes and high-fidelity designs that align with your brand and optimize for conversions.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our engineers bring the designs to life using modern, scalable, and fast web technologies.'
  },
  {
    number: '04',
    title: 'Testing & Launch',
    description: 'Rigorous QA testing ensures a flawless experience across all devices before we deploy to production.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Our proven <span className="text-gradient">process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            A streamlined workflow designed to deliver exceptional results on time and within budget.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-zinc-800 via-teal-500/50 to-zinc-800" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pt-8 md:pt-0"
            >
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center text-3xl font-display font-bold text-teal-400 mb-6 md:mx-auto relative z-10 bg-zinc-950">
                {step.number}
              </div>
              <div className="md:text-center">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
