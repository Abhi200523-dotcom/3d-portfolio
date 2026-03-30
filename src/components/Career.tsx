import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Enatel · Christchurch, Canterbury</h5>
              </div>
              <h3>Nov 2025–Feb 2026</h3>
            </div>
            <p>
              Built a deep understanding of AWS cloud services through completing AWS Cloud Practitioner Essentials and QuickSuite training. Designed and developed interactive prototype dashboards in Amazon Quick Suite for battery and charger performance, using mock and live datasets from Athena and Redshift. Conducted research to identify meaningful performance metrics and key indicators to display on dashboards, ensuring analytical relevance and business value. Tackled complex data engineering challenges. Created systematic fixes by engaging directly with senior engineers and AWS Support to resolve platform constraints. Produced dashboard concepts, each with distinct layouts and analytical narratives, and documented all metric logic in a technical design file outlining calculations, assumptions, and customer value. Collaborated closely with senior engineers from Enatel and Amazon to define the structure for the final analytical dashboard. Automated deployment of Quick Suite data sources, datasets, analyses, and dashboards using AWS CloudFormation. Built reusable templates that allow deterministic replication of analytical resources across environments. Communicated technical concepts to non technical stakeholders. Regularly collaborated with engineers, product teams, and leadership, presented analytical findings and explaining technical decisions in a clear and accessible way. Presented the final outcomes and insights to senior leadership, influencing the direction of the final product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
