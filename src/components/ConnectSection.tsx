import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_uwg2aut';
const EMAILJS_TEMPLATE_ID = 'template_gy4bjps';
const EMAILJS_PUBLIC_KEY = 'xzROrMGACDIM6NHmJ';

export default function ConnectSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Krushna',
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/padolekrushna', label: 'GitHub', username: '@padolekrushna' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/krushna-padole/', label: 'LinkedIn', username: 'Krushna Padole' },
    { icon: Mail, href: 'mailto:krushnapadole18@gmail.com', label: 'Email', username: 'krushnapadole18@gmail.com' },
  ];

  return (
    <section id="connect" className="py-24 md:py-32 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            04. CONTACT
          </span>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Whether you have a project in mind or just want to chat about AI, I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently available for freelance projects, full-time opportunities, and interesting AI/ML collaborations. Let's build something amazing together!
              </p>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Pune, India</span>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <social.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {social.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50 disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            Designed & Built by{' '}
            <span className="text-primary font-medium">Krushna Padole</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
