import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              We are digital craftsmen focused on <span className="text-gradient">results.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Founded on the belief that great design should drive business growth, Teal is a specialized agency partnering with ambitious brands.
              </p>
              <p>
                We bridge the gap between aesthetics and performance. Every pixel we place and every line of code we write is optimized to convert your visitors into loyal customers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-4xl font-display font-bold text-teal-400 mb-2">50+</p>
                <p className="text-zinc-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-teal-400 mb-2">$50M+</p>
                <p className="text-zinc-500 font-medium">Client Revenue Generated</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent z-10 mix-blend-overlay" />
              <img 
                src="https://picsum.photos/seed/agency/800/800?blur=1" 
                alt="Our Agency" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-500/20 blur-[60px] rounded-full" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
