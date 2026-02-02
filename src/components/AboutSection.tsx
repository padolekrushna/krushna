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
    <section id="about" className="py-24 md:py-32 relative">
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30 scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden profile-glow border-4 border-primary/30">
                <img
                  src={profileImage}
                  alt="Krushna Padole - AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-secondary/10" />
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
              AI/ML Engineer at{' '}
              <span className="text-primary">Konverge.AI</span>
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an <span className="text-foreground font-medium">AI/ML Engineer</span> with over 2 years of experience delivering production-grade solutions across Machine Learning, Deep Learning, Generative AI, and Agentic AI.
              </p>
              <p>
                My expertise spans <span className="text-primary">fine-tuning LLMs</span>, building ML pipelines, and deploying scalable AI systems on AWS and Azure using MLOps best practices. I'm skilled in <span className="text-secondary">Computer Vision</span>, <span className="text-primary">NLP</span>, and <span className="text-secondary">Multimodal AI</span> with hands-on experience in model optimization, quantization, and distributed training.
              </p>
              <p>
                I specialize in integrating enterprise-grade AI applications with secure, compliant architectures, ensuring reliability, explainability, and regulatory alignment across <span className="text-primary">Banking</span>, <span className="text-secondary">Legal</span>, <span className="text-primary">Healthcare</span>, and <span className="text-secondary">Industrial IoT</span> domains.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
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
              <div className="glass-card p-4 rounded-xl">
                <p className="font-medium">B.Sc. Data Science</p>
                <p className="text-muted-foreground text-sm">
                  Savitribai Phule Pune University • 2022 - 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
