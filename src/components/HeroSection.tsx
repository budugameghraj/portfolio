import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import Robot from "./Robot";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-4 md:px-12 lg:px-20 py-12">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        >
          <motion.p
            className="text-neon-green font-body font-bold text-sm md:text-base uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            // Portfolio v1.0
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-4">
            <span className="text-[#00E5FF]">Megh</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
            I aspire to build data-driven applications and machine learning systems that turn complex datasets into actionable insights. Passionate about building solutions, reproducible science, and impactful products.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00E5FF] text-black font-display font-bold text-base md:text-lg px-8 py-4 brutal-border shadow-[4px_4px_0px_#FCE100] uppercase tracking-wider"
            >
              VIEW PROJECTS
            </motion.button>
            <button
              disabled
              className="bg-muted text-muted-foreground font-display text-base md:text-lg px-8 py-4 brutal-border cursor-not-allowed flex items-center gap-2 opacity-60"
            >
              <Lock size={18} />
              RESUME (DROPPING SOON)
            </button>
          </div>
        </motion.div>

        {/* Right: Robot */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <Robot />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
