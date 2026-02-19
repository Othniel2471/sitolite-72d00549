import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import teamMeeting from "@/assets/team-meeting.jpg";
import serverRoom from "@/assets/server-room.jpg";
import dataAnalytics from "@/assets/data-analytics.jpg";

const caseStudies = [
  {
    title: "Enterprise Cloud Migration",
    client: "Global Financial Corp",
    category: "Cloud Services",
    description: "Migrated 200+ applications to a hybrid cloud environment, reducing infrastructure costs by 40% and improving system reliability.",
    image: serverRoom,
    results: ["40% cost reduction", "99.99% uptime", "3x faster deployments"],
  },
  {
    title: "Cybersecurity Transformation",
    client: "HealthTech Solutions",
    category: "Cybersecurity",
    description: "Implemented comprehensive security framework achieving HIPAA compliance and reducing security incidents by 95%.",
    image: teamMeeting,
    results: ["95% fewer incidents", "HIPAA compliant", "24/7 monitoring"],
  },
  {
    title: "Data Analytics Platform",
    client: "Retail Dynamics Inc",
    category: "Data Analytics",
    description: "Built a real-time analytics platform processing millions of transactions daily, enabling data-driven merchandising decisions.",
    image: dataAnalytics,
    results: ["10M+ daily events", "Real-time insights", "25% revenue increase"],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Real Results for Real Businesses
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore how we've helped organizations across industries achieve their digital
              transformation goals.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full rounded-2xl object-cover aspect-[4/3]"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">{study.category}</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-2">{study.client}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{study.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {study.results.map((result, j) => (
                      <span key={j} className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                        {result}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
