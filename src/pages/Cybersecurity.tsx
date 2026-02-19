import Layout from "@/components/Layout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import cybersecurityImg from "@/assets/cybersecurity.jpg";

const Cybersecurity = () => (
  <Layout>
    <ServicePageTemplate
      title="Cybersecurity"
      subtitle="Protect Your Business"
      description="Safeguard your digital assets with our comprehensive cybersecurity solutions. We provide enterprise-grade protection against evolving threats."
      image={cybersecurityImg}
      features={[
        "Advanced Threat Detection & Response",
        "Network Security & Firewall Management",
        "Security Audits & Penetration Testing",
        "Employee Security Awareness Training",
        "Incident Response & Recovery",
        "Compliance & Regulatory Support",
      ]}
      benefits={[
        { title: "Assessment", description: "We conduct thorough security assessments to identify vulnerabilities in your systems and infrastructure." },
        { title: "Implementation", description: "Our team implements tailored security solutions designed to address your specific risk profile." },
        { title: "Monitoring", description: "Continuous 24/7 monitoring ensures threats are detected and neutralized before they impact your business." },
      ]}
    />
  </Layout>
);

export default Cybersecurity;
