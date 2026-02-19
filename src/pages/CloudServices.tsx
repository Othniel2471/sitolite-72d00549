import Layout from "@/components/Layout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import cloudImg from "@/assets/cloud-services.jpg";

const CloudServices = () => (
  <Layout>
    <ServicePageTemplate
      title="Cloud Services"
      subtitle="Scale With Confidence"
      description="We make your cloud infrastructure efficient and cost-effective. Migrate, manage, and optimize with our expert cloud solutions."
      image={cloudImg}
      features={[
        "Cloud Migration & Strategy",
        "Multi-Cloud & Hybrid Solutions",
        "Cloud Security & Compliance",
        "Infrastructure as Code (IaC)",
        "Cost Optimization & Management",
        "Disaster Recovery & Backup",
      ]}
      benefits={[
        { title: "Strategy", description: "We develop a comprehensive cloud strategy aligned with your business objectives and growth plans." },
        { title: "Migration", description: "Seamless migration of your workloads to the cloud with minimal downtime and risk." },
        { title: "Optimization", description: "Continuous monitoring and optimization to ensure peak performance and cost efficiency." },
      ]}
    />
  </Layout>
);

export default CloudServices;
