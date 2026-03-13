import { motion } from "framer-motion";

const SKILLS = [
  "PYTHON",
  "PANDAS",
  "NUMPY",
  "SCIKIT-LEARN",
  "MATPLOTLIB",
  "SEABORN",
  "PLOTLY",
  "STREAMLIT",
  "FOLIUM",
  "GIT & GITHUB",
  "JUPYTER",
  "VERCEL",
  "SUPABASE",
];

const SkillsSection = () => {
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-12">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-foreground mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SKILL <span className="text-neon-green">LOADOUT</span>
        </motion.h2>
        <p className="font-body text-muted-foreground text-lg">Current knowledge base (building and learning in progress).</p>
      </div>

{/* Professional Data Stream Marquee */}
      <div className="bg-[#1A1A1A] py-4 border-y-4 border-black overflow-hidden shadow-[4px_4px_0px_#00FFFF]">
        <div className="animate-marquee flex whitespace-nowrap">
          {doubled.map((skill, i) => (
            <span 
              key={i} 
              className="font-mono text-base md:text-lg text-[#E0E0E0] font-bold uppercase tracking-widest px-8 border-r-2 border-[#333333]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Skill cards grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill}
            className="bg-card brutal-border p-4 text-center hover:brutal-shadow-pink transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
          >
            <p className="font-display text-xs md:text-sm text-foreground">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
