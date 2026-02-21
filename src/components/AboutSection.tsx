import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '@/assets/profile.jpg';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '6+', label: 'AI Projects' },
    { value: '4+', label: 'Domains Served' },
    { value: '100%', label: 'Passion' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            01. ABOUT ME
          </span>
          <h2 className="section-heading">
            Crafting <span className="gradient-text">Intelligence</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gradient-line w-32 mx-auto mt-4"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-20 scale-110" />
              
              {/* Gradient border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)), transparent, hsl(var(--gradient-start)))',
                  WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))',
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))',
                }}
              />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden profile-glow border-4 border-primary/30">
                <img
                  src={profileImage}
                  alt="Krushna Padole - AI Engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              <span className="gradient-text">AI/ML Engineer</span>
              <span className="text-muted-foreground text-lg font-normal ml-2">| Driving Enterprise AI Solutions</span>
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I'm an <span className="text-foreground font-medium">AI/ML Engineer</span> with over 2 years of experience delivering production-grade solutions across Machine Learning, Deep Learning, Generative AI, and Agentic AI. I've contributed to <span className="text-primary font-medium">high-impact enterprise projects valued at $150M+</span>, building scalable AI systems that drive real business outcomes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                My expertise spans <span className="text-primary">fine-tuning LLMs</span>, building ML pipelines, and deploying scalable AI systems on AWS and Azure using MLOps best practices. I'm skilled in <span className="text-secondary">Computer Vision</span>, <span className="text-primary">NLP</span>, and <span className="text-secondary">Multimodal AI</span> with hands-on experience in model optimization, quantization, and distributed training.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I specialize in integrating enterprise-grade AI applications with secure, compliant architectures, ensuring reliability, explainability, and regulatory alignment across <span className="text-primary">Banking</span>, <span className="text-secondary">Legal</span>, <span className="text-primary">Healthcare</span>, and <span className="text-secondary">Industrial IoT</span> domains.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center p-4 glass-card rounded-xl cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                Education
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'B.Sc. Data Science', sub: 'Savitribai Phule Pune University • 2022 - 2026' },
                  { title: '12th (HSC) — CBSE', sub: 'Kendriya Vidyalaya VRDE • 73%' },
                  { title: '10th (SSC) — CBSE', sub: 'Kendriya Vidyalaya VRDE • 82%' },
                ].map((edu, i) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    className="glass-card p-4 rounded-xl hover:border-primary/20 transition-colors duration-300"
                  >
                    <p className="font-medium">{edu.title}</p>
                    <p className="text-muted-foreground text-sm">{edu.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
