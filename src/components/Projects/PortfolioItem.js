import React from "react";
import ProjectCard from "./ProjectCards";
function PortfolioItem(props) {
  const { item } = props;
  return ( 
    <ProjectCard
      imgPath={item.imgPath}
      isBlog={item.isBlog}
      title={item.title}
      description={item.description}
      ghLink={item.ghLink}
      demoLink={item.demoLink}
    />
  );
}
export default PortfolioItem;
