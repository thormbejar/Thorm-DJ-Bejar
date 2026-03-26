import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 text-center border-teal-500/20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to scale your <br className="hidden md:block" />
            <span className="text-gradient">business?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can transform your website into your most powerful sales asset.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-teal text-zinc-950 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
              Book a Discovery Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-zinc-300 hover:text-zinc-50 border border-zinc-700 hover:bg-zinc-800 transition-colors">
              Request a Quote
            </button>
          </div>
          
          <p className="mt-6 text-sm text-zinc-500">
            No commitment required. We typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
