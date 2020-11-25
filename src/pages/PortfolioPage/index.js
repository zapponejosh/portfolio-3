import React from "react";
import projects from "../../utils/db.js";
import "./style.css";
import Project from "../../components/Project";
import { Card } from "semantic-ui-react";

function PortfolioPage() {
  const projectArray = projects.map((project, index) => (
    <Project key={index} projectData={project} />
  ));

  return (
    <div className="project-page">
      <h3 className="section-title">Portfolio</h3>

      <Card.Group id="project-cards" itemsPerRow={3}>
        {projectArray}
      </Card.Group>
    </div>
  );
}

export default PortfolioPage;
