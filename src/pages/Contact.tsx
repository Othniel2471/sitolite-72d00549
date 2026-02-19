import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Have a project in mind? We'd love to hear about it. Get in touch and let's discuss
                how we can help transform your business.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@sitolite.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Address", value: "123 Tech Avenue, San Francisco, CA 94102" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
