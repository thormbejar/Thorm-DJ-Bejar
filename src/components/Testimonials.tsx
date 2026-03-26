import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Teal completely transformed our online presence. Our conversion rate doubled within the first month of launching the new site.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow SaaS",
    result: "2x Conversion Rate"
  },
  {
    quote: "The attention to detail and strategic approach to UX design is unmatched. They don't just make it look good, they make it work.",
    author: "Marcus Chen",
    role: "Founder, Elevate E-commerce",
    result: "+150% Mobile Sales"
  },
  {
    quote: "Professional, fast, and incredibly talented. The team at Teal delivered a website that perfectly captures our brand identity.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Nova AI",
    result: "10k+ Waitlist Signups"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Client <span className="text-gradient">Feedback</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6" />
              <div className="mb-8">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6">
                  Result: {testimonial.result}
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto">
                <p className="font-bold text-zinc-50">{testimonial.author}</p>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
