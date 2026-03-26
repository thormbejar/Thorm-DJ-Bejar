import { motion } from 'motion/react';
import { Layout, Code2, LineChart, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    title: 'Web Design',
    description: 'Beautiful, intuitive interfaces designed to engage users and communicate your brand value effectively.',
    benefit: 'Higher engagement & brand trust'
  },
  {
    icon: <Code2 className="w-6 h-6 text-teal-400" />,
    title: 'Web Development',
    description: 'Fast, secure, and scalable websites built with modern tech stacks like React, Next.js, and Tailwind.',
    benefit: 'Lightning-fast load times'
  },
  {
    icon: <LineChart className="w-6 h-6 text-teal-400" />,
    title: 'Conversion Optimization',
    description: 'Data-driven design decisions and A/B testing to turn more of your visitors into paying customers.',
    benefit: 'Increased ROI & sales'
  },
  {
    icon: <PenTool className="w-6 h-6 text-teal-400" />,
    title: 'UI/UX Design',
    description: 'Frictionless user journeys and wireframes that ensure your product is a joy to use.',
    benefit: 'Better user retention'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Services that drive <span className="text-gradient">growth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            We don't just build websites. We build digital assets designed to scale your business and dominate your market.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-zinc-800/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="inline-flex items-center text-sm font-medium text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">
                Result: {service.benefit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
