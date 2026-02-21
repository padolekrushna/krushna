import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    color: 'primary',
    skills: ['NLP', 'LLMs', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'Agentic AI', 'Multimodal AI', 'Time-series Forecasting', 'LLM Fine-tuning', 'RLHF', 'Feature Engineering'],
  },
  {
    title: 'Frameworks & Tools',
    color: 'secondary',
    skills: ['LangChain', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Transformers', 'FAISS Vector Database', 'OpenCV', 'SageMaker', 'XGBoost', 'Random Forest', 'LSTM'],
  },
  {
    title: 'Development',
    color: 'primary',
    skills: ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'SQL', 'ETL Pipelines', 'Docker', 'Git', 'CI/CD', 'Prompt Engineering'],
  },
  {
    title: 'Cloud & MLOps',
    color: 'secondary',
    skills: ['AWS', 'Azure', 'Azure OpenAI', 'Gemini Pro', 'MLOps', 'Model Deployment', 'Quantization', 'Distributed Training'],
  },
  {
    title: 'Data Visualization',
    color: 'primary',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Streamlit', 'Data Analysis'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            02. EXPERTISE
          </span>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A comprehensive toolkit spanning the entire AI/ML lifecycle, from research to production deployment.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gradient-line w-32 mx-auto mt-4"
          />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className={`text-xl font-display font-semibold mb-6 flex items-center gap-3 ${category.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.3 }}
                  className={`w-3 h-3 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="skill-tag cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Data Analyst Career Track', org: 'WorldQuant University' },
              { name: 'Oracle Cloud Certification', org: 'Oracle University' },
              { name: 'AI/ML Specialization', org: 'Coursera' },
              { name: 'Microsoft Azure Fundamentals (AZ-900)', org: 'Microsoft' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <p className="font-medium mb-1 group-hover:text-primary transition-colors">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
