import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  accentColor,
  shadowClass,
  tags,
  tagStyle,
  githubUrl,
  children,
}: {
  title: string;
  description: string;
  accentColor: string;
  shadowClass: string;
  tags: string[];
  tagStyle: string;
  githubUrl: string;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-card brutal-border ${shadowClass} p-6 md:p-8 relative overflow-hidden flex flex-col h-full`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* Corner accent */}
      <div 
        className={`absolute top-0 right-0 w-16 h-16 ${accentColor} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} 
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} 
      />

      <h3 className={`font-display text-2xl md:text-3xl mb-3 ${accentColor.replace("bg-", "text-")}`}>{title}</h3>
      <p className="font-body text-muted-foreground mb-6 text-sm md:text-base flex-grow z-10">{description}</p>

      {/* Interactive visual Box */}
      <div className="mb-6 h-32 md:h-40 brutal-border bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative group">
        
        {/* Subtle grid background that appears on hover */}
        <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-10'}`} 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {isHovered ? (
          <div className="w-full h-full relative z-10">
            {children}
            {/* Hacker Scanline effect */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm"
              animate={{ y: [0, 160, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>
        ) : (
          <motion.span 
            className="text-muted-foreground font-body text-xs tracking-widest border border-dashed border-muted-foreground/50 px-4 py-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            [ HOVER TO INITIALIZE ]
          </motion.span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6 z-10">
        {tags.map((tag) => (
          <span key={tag} className={`${tagStyle} font-body text-xs font-bold px-3 py-1 brutal-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
            {tag}
          </span>
        ))}
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 font-display text-sm md:text-base px-5 py-3 brutal-border ${accentColor} text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-10`}
      >
        <Github size={18} />
        ACCESS REPOSITORY
      </a>
    </motion.div>
  );
};

// 🟢 UPDATED: NEON GREEN SWIPETCHA VISUAL
const SliderVisual = () => (
  <motion.div 
    className="w-full h-full flex flex-col items-center justify-center px-6 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="w-full flex justify-between text-[#39FF14] font-mono text-[10px] mb-2">
      <span>SYS.AUTH.REQ</span>
      <span>0x8F9A2</span>
    </div>
    <div className="w-full h-4 bg-muted/30 brutal-border relative overflow-hidden">
      {/* Target area */}
      <div className="absolute right-0 top-0 w-12 h-full bg-[#39FF14]/20 border-l border-[#39FF14] border-dashed" />
      
      {/* The sliding block */}
      <motion.div
        className="absolute top-0 left-0 h-full w-8 bg-[#39FF14] brutal-border"
        animate={{ x: [0, 220, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-1 h-2 bg-black/50 mx-[1px]" />
          <div className="w-1 h-2 bg-black/50 mx-[1px]" />
        </div>
      </motion.div>
    </div>
    <motion.p
      className="absolute bottom-4 text-[#39FF14] font-body text-xs font-bold tracking-widest"
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
    >
      ANALYZING BEHAVIOR...
    </motion.p>
  </motion.div>
);

// SMARTTOUR VISUAL (Kept Deep Pink/Cyan)
const MinimapVisual = () => (
  <motion.div 
    className="w-full h-full relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <svg viewBox="0 0 300 120" className="w-full h-full p-4">
      {[
        [40, 30], [120, 80], [200, 25], [260, 90], [80, 100],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={cx} cy={cy} r={12}
          fill="none"
          stroke="#FF1493"
          strokeWidth={1}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {[
        [40, 30], [120, 80], [200, 25], [260, 90], [80, 100],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`node-${i}`}
          cx={cx} cy={cy} r={4}
          fill="#00E5FF"
          stroke="white"
          strokeWidth={1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
      <motion.polyline
        points="40,30 80,100 120,80 200,25 260,90"
        fill="none"
        stroke="#00E5FF" 
        strokeWidth={2}
        strokeDasharray="1"
        strokeDashoffset="1"
        pathLength={1}
        animate={{ strokeDashoffset: [1, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 1], ease: "easeInOut" }}
      />
    </svg>
    <div className="absolute top-2 left-2 text-[10px] text-muted-foreground font-mono">
      DIJKSTRA.EXE RUNNING...
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 md:px-12 lg:px-20 py-24 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2
            className="font-display text-5xl md:text-7xl text-foreground mb-4 tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            TACTICAL <span className="text-[#FFD700] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">CRATES</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-[#00E5FF] mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
          <p className="font-body text-muted-foreground text-lg md:text-xl font-medium tracking-wide">
            // Projects deployed in the field
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* 🟢 SWIPETCHA - NEON GREEN */}
          <ProjectCard
            title="SwipeTCHA"
            description="A smart CAPTCHA system utilizing machine learning and a custom slider mechanism to distinguish humans from bots based on interaction patterns."
            accentColor="bg-[#39FF14]" // Toxic Neon Green
            shadowClass="shadow-[4px_4px_0px_0px_#39FF14]" // Brutal shadow matches the green
            tags={["Machine Learning", "Python", "Security", "UX/UI"]}
            tagStyle="bg-[#39FF14] text-black"
            githubUrl="https://github.com/budugameghraj/SwipeTCHA.git"
          >
            <SliderVisual />
          </ProjectCard>

          {/* 💖 SMARTTOUR - DEEP PINK */}
          <ProjectCard
            title="SmartTour Viz"
            description="An interactive algorithm-driven engine for visualizing optimal touring routes, applying graph theory and mapping data in real-time."
            accentColor="bg-[#FF1493]" // Deep Pink
            shadowClass="shadow-[4px_4px_0px_0px_#FF1493]" // Brutal shadow matches the pink
            tags={["Algorithms", "DSA", "Visualization", "Graph Theory"]}
            tagStyle="bg-[#FF1493] text-white"
            githubUrl="https://github.com/budugameghraj/SmartTour-Route-Visualization.git"
          >
            <MinimapVisual />
          </ProjectCard>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;