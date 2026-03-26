import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'UI/UX & Development',
    image: 'https://picsum.photos/seed/fintech/800/600?blur=2',
    metric: '+210% User Retention',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Web Design & CRO',
    image: 'https://picsum.photos/seed/saas/800/600?blur=2',
    metric: '+85% Conversion Rate',
  },
  {
    title: 'E-commerce Platform',
    category: 'Full-stack Development',
    image: 'https://picsum.photos/seed/ecommerce/800/600?blur=2',
    metric: '$2M+ Monthly Revenue',
  },
  {
    title: 'AI Startup Website',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/ai/800/600?blur=2',
    metric: '10k+ Waitlist Signups',
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg max-w-xl"
            >
              Explore our recent projects and see how we've helped ambitious brands achieve their digital goals.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
          >
            View all projects <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800/50">
                  <span className="text-teal-400 font-semibold text-sm">{project.metric}</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-teal-500/10 group-hover:border-teal-500/30 group-hover:text-teal-400 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
