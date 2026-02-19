import Layout from "@/components/Layout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import analyticsImg from "@/assets/data-analytics.jpg";

const DataAnalytics = () => (
  <Layout>
    <ServicePageTemplate
      title="Data Analytics"
      subtitle="Data-Driven Decisions"
      description="Our process unlocks your data's potential to drive your business forward with actionable insights and predictive analytics."
      image={analyticsImg}
      features={[
        "Business Intelligence & Reporting",
        "Predictive Analytics & ML Models",
        "Data Warehousing & ETL Pipelines",
        "Real-Time Dashboard Development",
        "Data Governance & Quality",
        "Custom Analytics Solutions",
      ]}
      benefits={[
        { title: "Discovery", description: "We analyze your existing data landscape and identify opportunities for insights and optimization." },
        { title: "Development", description: "Building custom analytics pipelines and dashboards tailored to your KPIs." },
        { title: "Delivery", description: "Actionable insights delivered through intuitive dashboards and automated reporting." },
      ]}
    />
  </Layout>
);

export default DataAnalytics;
