import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-display font-bold tracking-tight inline-block mb-6">
              Teal<span className="text-teal-400">.</span>
            </a>
            <p className="text-zinc-400 max-w-sm mb-8">
              We design high-performing websites that convert traffic into customers for ambitious brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-400/30 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-400/30 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-400/30 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-50 font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-zinc-400 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#work" className="text-zinc-400 hover:text-teal-400 transition-colors">Our Work</a></li>
              <li><a href="#process" className="text-zinc-400 hover:text-teal-400 transition-colors">Process</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-teal-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-50 font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@teal.agency" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1">
                  hello@teal.agency <ArrowUpRight size={14} />
                </a>
              </li>
              <li className="text-zinc-400">
                123 Design Street<br />
                Creative District, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} Teal Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
