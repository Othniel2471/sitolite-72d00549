import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cloud, Server, BarChart3, Users, Award, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import Marquee from "@/components/Marquee";
import heroBuilding from "@/assets/hero-building.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import orangeShell from "@/assets/orange-shell.png";

const services = [
  { icon: Shield, title: "Cybersecurity", description: "Protect your digital assets with enterprise-grade security solutions.", path: "/cybersecurity" },
  { icon: Cloud, title: "Cloud Services", description: "Scale your infrastructure with reliable cloud computing solutions.", path: "/cloud-services" },
  { icon: Server, title: "IT Infrastructure", description: "Build and maintain robust IT systems that power your business.", path: "/it-infrastructure" },
  { icon: BarChart3, title: "Data Analytics", description: "Transform raw data into actionable insights for smarter decisions.", path: "/data-analytics" },
];

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
  { value: "15+", label: "Years Experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">👋</span>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Welcome to Sitolite
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Revolutionize Your Business with{" "}
                <span className="text-gradient">Digital Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                An innovative company where we provide cutting-edge IT solutions that empower
                businesses to thrive in the digital era.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors text-lg"
                >
                  Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroBuilding}
                alt="Modern corporate building at sunset"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
              <img
                src={orangeShell}
                alt=""
                className="absolute -bottom-10 -right-10 w-40 h-40 opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Choose your digital<br />transformation path
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* About */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={teamMeeting}
              alt="Team in a meeting"
              className="w-full rounded-2xl object-cover aspect-square"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Helping businesses thrive in the digital world
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience, Sitolite has been at the forefront of digital
                transformation. We combine technical expertise with strategic thinking to deliver
                solutions that drive real business results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Users, label: "Expert Team" },
                  { icon: Award, label: "Award Winning" },
                  { icon: Zap, label: "Fast Delivery" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              "Our success is made possible by the dedication of our incredible team and the trust of
              our clients."
            </p>
            <div className="text-muted-foreground text-sm">— Sitolite Leadership</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
