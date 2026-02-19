import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

const faqs = [
  { q: "What industries do you serve?", a: "We serve a wide range of industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are tailored to meet the unique challenges of each sector." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A typical engagement ranges from 4-12 weeks for implementation, with ongoing support and optimization thereafter." },
  { q: "Do you offer 24/7 support?", a: "Yes, we provide round-the-clock monitoring and support for all our managed services. Our dedicated team ensures your systems are always running optimally." },
  { q: "What makes Sitolite different?", a: "Our combination of deep technical expertise, strategic business thinking, and commitment to long-term partnerships sets us apart. We don't just implement solutions — we transform businesses." },
  { q: "How do you ensure data security?", a: "We follow industry best practices and comply with major regulatory frameworks including SOC 2, ISO 27001, and GDPR. Security is embedded in everything we do." },
  { q: "Can you work with our existing systems?", a: "Absolutely. We specialize in integrating with existing infrastructure and systems. Our approach minimizes disruption while maximizing the value of your current investments." },
];

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Got Questions?
            </h1>
            <p className="text-muted-foreground text-lg mt-4">
              We've gathered answers to the most common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-foreground">{faq.q}</span>
                  {open === i ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
