import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-foreground mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          COMMS <span className="text-neon-cyan">UPLINK</span>
        </motion.h2>
        <p className="font-body text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Resume dropping soon! Until then, you can ping me on Email or GitHub.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a
            href="https://github.com/budugameghraj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-cyan text-background font-display text-lg md:text-xl px-10 py-5 brutal-border brutal-shadow-pink flex items-center gap-3 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={24} />
            GITHUB
          </motion.a>

          <motion.a
            href="mailto:meghr7734@gmail.com"
            className="bg-neon-yellow text-background font-display text-lg md:text-xl px-10 py-5 brutal-border brutal-shadow-orange flex items-center gap-3 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={24} />
            EMAIL
          </motion.a>
        </div>

        <p className="font-body text-muted-foreground text-sm mt-20 tracking-widest uppercase">
          — Transmission Ended —
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
