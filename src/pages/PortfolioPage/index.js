import React from "react";
import projects from "../../utils/db.js";
import "./style.css";
import Project from "../../components/Project";
import { Card, Container } from "semantic-ui-react";

function PortfolioPage() {
  const projectArray = projects.map((project, index) => (
    <Project key={index} projectData={project} />
  ));

  return (
    <Container>
      <div className="project-page">
        <h3 className="section-title">Portfolio</h3>

        <Card.Group id="project-cards">{projectArray}</Card.Group>
      </div>
    </Container>
  );
}

export default PortfolioPage;
