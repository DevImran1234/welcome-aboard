import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  ArrowUpRight,
  Settings,
  GitBranch,
  PenTool,
  Brain,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Vue for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android that users love.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure on AWS, GCP, or Azure with seamless deployment pipelines.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Robust APIs and microservices architecture designed for high availability and performance.",
  },
  {
    icon: Shield,
    title: "Security Audit",
    description:
      "Comprehensive security assessments and implementation of best practices to protect your data.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimization services to ensure your applications load fast and run smoothly at scale.",
  },
  {
    icon: Settings,
    title: "Automation",
    description:
      "Workflow and process automation to reduce manual work, improve efficiency, and scale operations.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "End-to-end DevOps solutions including CI/CD pipelines, infrastructure as code, and monitoring.",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description:
      "High-quality technical, marketing, and SEO-friendly content tailored to your brand voice.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI and ML solutions for data-driven insights, predictions, and intelligent automation.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Generative AI solutions including chatbots, copilots, and content generation powered by LLMs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Services We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end software, automation, and AI-driven services built to scale with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
