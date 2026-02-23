import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const education = [
  {
    degree: 'B.Sc. Data Science',
    institution: 'Savitribai Phule Pune University',
    years: '2022 - 2025',
  },
  {
    degree: '12th (HSC)',
    institution: 'Kendriya Vidyalaya VRDE, CBSE',
    years: '73%',
  },
  {
    degree: '10th (SSC)',
    institution: 'Kendriya Vidyalaya VRDE, CBSE',
    years: '82%',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
            AI/ML <span className="gradient-text">Engineer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Driving Enterprise AI Solutions — from research to production-grade deployments.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gradient-line w-32 mx-auto mt-4"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-2xl"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
                  opacity: 0.3,
                }}
              />
              <img
                src={profileImg}
                alt="Krushna Padole"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover profile-glow"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Pune, India</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Passionate AI/ML Engineer with hands-on experience in building production-grade AI solutions.
              Specializing in NLP, LLMs, and Agentic AI systems, I design and deploy
              intelligent applications that solve complex enterprise challenges across industries.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From fine-tuning transformer models to architecting RAG pipelines and multi-agent systems,
              I bring a research-driven approach to every project — shipping solutions that are robust,
              scalable, and impactful.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Projects Delivered', value: '10+' },
                { label: 'AI Models Deployed', value: '8+' },
                { label: 'Certifications', value: '4' },
                { label: 'Technologies', value: '30+' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card p-6 rounded-xl text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <p className="font-semibold text-lg mb-1">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {edu.years}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
