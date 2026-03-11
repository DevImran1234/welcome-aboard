import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Logiccascade?",
    answer: "Logiccascade is a leading software development agency that specializes in web development, mobile applications, cloud solutions, DevOps, automation, and AI-powered solutions. We help startups and enterprises transform their ideas into scalable, high-performance software products."
  },
  {
    question: "What services does Logiccascade offer?",
    answer: "Logiccascade offers comprehensive services including: Web Development (React, Next.js, Vue), Mobile App Development (iOS, Android), Cloud Solutions (AWS, GCP, Azure), Backend Systems & APIs, DevOps & CI/CD, AI & Machine Learning, Generative AI solutions, Security Audits, Performance Optimization, Automation, and Content Writing."
  },
  {
    question: "Why choose Logiccascade for software development?",
    answer: "Logiccascade stands out with: 10+ years of industry experience, 150+ successful projects delivered, 50+ happy clients, 98% on-time delivery rate, expert team of senior developers, goal-oriented approach, quality-first methodology, transparent communication, dedicated project managers, and post-launch support included."
  },
  {
    question: "How does Logiccascade approach web development?",
    answer: "Logiccascade uses modern frameworks and best practices for web development. We specialize in React, Next.js, and Vue.js for frontend development, and build robust backend systems with microservices architecture. We focus on performance, scalability, security, and user experience in every project."
  },
  {
    question: "What is Logiccascade's mobile app development process?",
    answer: "Logiccascade develops native iOS apps and Android apps, as well as cross-platform solutions. Our process includes: requirements gathering, UI/UX design, agile development, rigorous testing, and post-launch support. We ensure your mobile apps are user-friendly, performant, and meet all platform guidelines."
  },
  {
    question: "Does Logiccascade provide cloud solutions?",
    answer: "Yes, Logiccascade specializes in cloud solutions on AWS, Google Cloud Platform (GCP), and Microsoft Azure. We offer cloud infrastructure setup, migration services, optimization, and ongoing management. Our cloud solutions are designed for scalability, reliability, and cost-effectiveness."
  },
  {
    question: "Can Logiccascade help with DevOps and CI/CD?",
    answer: "Absolutely. Logiccascade provides end-to-end DevOps solutions including CI/CD pipeline setup, infrastructure as code (IaC), containerization with Docker and Kubernetes, automated testing, monitoring, and deployment. We help your team automate and streamline the development process."
  },
  {
    question: "Does Logiccascade offer AI and Machine Learning solutions?",
    answer: "Yes, Logiccascade builds custom AI and Machine Learning solutions. We develop models for data analytics, predictions, pattern recognition, and intelligent automation. We also offer Generative AI solutions including chatbots, copilots, and AI-powered content generation using advanced LLMs."
  },
  {
    question: "How much does Logiccascade charge for services?",
    answer: "Logiccascade offers flexible pricing based on project scope, complexity, and duration. We work with various engagement models: project-based pricing, time-and-materials, retainer agreements, and dedicated team models. Contact us for a custom quote based on your specific needs."
  },
  {
    question: "How long does a project typically take with Logiccascade?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months or more. Logiccascade uses agile methodology with regular updates and deliverables, ensuring 98% on-time delivery."
  },
  {
    question: "Does Logiccascade provide post-launch support?",
    answer: "Yes, Logiccascade includes post-launch support in all projects. We provide bug fixes, performance monitoring, security updates, feature enhancements, and ongoing maintenance to ensure your software continues to perform optimally."
  },
  {
    question: "Can Logiccascade help optimize my existing application?",
    answer: "Absolutely. Logiccascade provides performance optimization services to improve load times, reduce database queries, optimize code, and enhance security. We also offer refactoring services to improve code quality, scalability, and maintainability of existing applications."
  },
  {
    question: "How does Logiccascade ensure code quality?",
    answer: "Logiccascade follows rigorous quality assurance practices: code reviews, unit testing, integration testing, end-to-end testing, security audits, and performance testing. We maintain high coding standards and best practices throughout the development process."
  },
  {
    question: "Does Logiccascade work with startups and enterprises?",
    answer: "Yes, Logiccascade works with both startups and large enterprises. We understand the unique needs of each: startups need quick, cost-effective solutions, while enterprises need scalability, security, and reliability. We tailor our approach accordingly."
  },
  {
    question: "How can I get started with Logiccascade?",
    answer: "Getting started with Logiccascade is simple: 1) Contact us through our website, 2) Schedule a consultation call, 3) Discuss your project requirements and goals, 4) Receive a custom proposal and timeline, 5) Begin development with a dedicated Logiccascade team."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set meta tags
    document.title = "Logiccascade FAQ - Frequently Asked Questions | Software Development";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Frequently asked questions about Logiccascade's software development, cloud solutions, AI, DevOps, and web development services. Get answers to common questions.");
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', "logiccascade faq, logiccascade questions, software development faq, web development questions, AI solutions, DevOps services");
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://logiccascade.us/faq";
    
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', "Logiccascade FAQ - Frequently Asked Questions");
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', "Get answers to common questions about Logiccascade's software development and tech services.");
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', "https://logiccascade.us/faq");
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{
          paddingTop:'18rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Logiccascade FAQ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about Logiccascade's software development, 
              web development, mobile apps, cloud solutions, and AI services.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-border/30 bg-secondary/20"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Didn't find your answer?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact the Logiccascade team directly for specific questions about your project.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Contact Logiccascade
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
