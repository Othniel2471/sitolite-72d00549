import Layout from "@/components/Layout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import serverImg from "@/assets/server-room.jpg";

const ITInfrastructure = () => (
  <Layout>
    <ServicePageTemplate
      title="IT Infrastructure"
      subtitle="Build Reliable Systems"
      description="Design, deploy, and manage robust IT infrastructure that keeps your business running smoothly around the clock."
      image={serverImg}
      features={[
        "Network Design & Architecture",
        "Server Management & Virtualization",
        "Storage Solutions & Data Management",
        "Unified Communications",
        "IT Asset Management",
        "24/7 Monitoring & Support",
      ]}
      benefits={[
        { title: "Design", description: "Our architects design scalable infrastructure solutions tailored to your current and future needs." },
        { title: "Deployment", description: "Expert deployment with minimal business disruption and comprehensive testing." },
        { title: "Management", description: "Proactive management and maintenance to ensure optimal performance and reliability." },
      ]}
    />
  </Layout>
);

export default ITInfrastructure;
