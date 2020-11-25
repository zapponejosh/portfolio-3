import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function Project({ projectData }) {
  const name = projectData.name;
  const description = projectData.description;
  const techStack = projectData.stack.map((tech, index) => (
    <i key={(name, index)}> {tech} |</i>
  ));
  const img = projectData.preview;
  const code = projectData.repoLink;
  const deployment = projectData.deployLink;

  return (
    <Card>
      <Image src={process.env.PUBLIC_URL + img} wrapped ui={false} />

      <Card.Content header={name} />
      <Card.Content description={description} />
      <Card.Content extra>
        <div className="ui two buttons">
          <a className="ui teal button" href={deployment}>
            See it live
          </a>
          <a className="ui orange button" href={code}>
            See the code
          </a>
        </div>
      </Card.Content>
      <Card.Content extra>
        <Icon name="code" />
        {techStack}
      </Card.Content>
    </Card>
  );
}

export default Project;
